from groq import Groq
import os
import json
from dotenv import load_dotenv
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import PyPDFLoader, DirectoryLoader
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_chroma import Chroma

class ChatbotResponse:
    load_dotenv()
    CHROMA_DIR = "./chroma_db"
    COLLECTION_NAME = "school_mental_health"
    def process_pdf(self):
        base_dir = os.path.dirname(os.path.abspath(__file__))
        doc_path = os.path.join(base_dir, "documents")
        loader = DirectoryLoader(
                path = doc_path,
                glob= "**/*.pdf",
                loader_cls= PyPDFLoader,
                show_progress= True,
                use_multithreading=True
            )
        docs = loader.load()
        return docs

    def text_split(self, size=1200, overlap=200 ):
        MARKDOWN_TEMPLATE = [
        "\n#{1,6} ",
        "```\n",
        "\n\\*\\*\\*+\n",
        "\n___+\n",
        "\n\n",
        "\n",
        " ",
        "",
            ]
        docs = self.process_pdf()
        text = (RecursiveCharacterTextSplitter(
            chunk_size = size,
            chunk_overlap = overlap,
            separators=MARKDOWN_TEMPLATE
        )) 
        split = text.split_documents(docs)
        return split
    
    def hugg_embed(self):
        hf_token = os.getenv("HF_TOKEN")
        embeddings  = HuggingFaceEmbeddings(
            model_name = "sentence-transformers/all-MiniLM-L6-v2",
            model_kwargs = {"device": "cpu",
                            "token": hf_token},
            encode_kwargs={"normalize_embeddings": False}
        )
        return embeddings

    def build_vector(self, force_rebuild=False):
        embeddings = self.hugg_embed()
        if not force_rebuild and os.path.exists(self.CHROMA_DIR):
            vectorstore = Chroma(
                collection_name=self.COLLECTION_NAME,
                embedding_function=embeddings,
                persist_directory=self.CHROMA_DIR,
            )
            return vectorstore
        chunks = self.text_split()
        vectorstore = Chroma.from_documents(
            documents=chunks,
            embedding=embeddings,
            collection_name=self.COLLECTION_NAME,
            persist_directory=self.CHROMA_DIR,
        )
        return vectorstore

    def retrieve_context(self, vectorstore, query, k=4):
        results = vectorstore.similarity_search(query, k=k)
        context = "\n\n".join(doc.page_content for doc in results)
        return context

    def load_json(self):
        with open("config_chatbot.json", "r", encoding="utf-8") as f:
            return json.load(f)

    def data_chatbot(self, user_message):
        client = Groq(
        api_key=os.environ.get("GROQ_API_KEY"),  # This is the default and can be omitted
    )
        vector_db = self.build_vector()
        context = self.retrieve_context(vector_db, user_message)
        system_prompt = (
            "Bạn là chuyên gia tư vấn tâm lý sức khoẻ học đường có đồng cảm và thấu hiểu. "
            "Mọi câu hỏi không liên quan sẽ từ chối trả lời hoặc kêu tôi không biết. "
            "Hãy sử dụng thông tin ngữ cảnh dưới đây (nếu có liên quan) để trả lời chính xác hơn:\n\n"
            f"{context}"
        )
        config_data = self.load_json()

        chat_completion = client.chat.completions.create(
                model= config_data['model'],
                temperature=config_data['temperature'],
                top_p=config_data['top_p'],
                max_tokens=config_data['max_tokens'],
                messages=[
                        {"role":"system", "content": system_prompt},
                        {"role": "user", "content": user_message}
                    ],
            )
        answer = chat_completion.choices[0].message.content
        return answer

    
     

