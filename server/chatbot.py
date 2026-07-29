from groq import Groq
import os
from dotenv import load_dotenv
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import PyPDFLoader, DirectoryLoader
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_chroma import Chroma
load_dotenv()
CHROMA_DIR = "./chroma_db"
COLLECTION_NAME = "school_mental_health"
def process_pdf():
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

def text_split(size=1000, overlap=200 ):
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
    docs = process_pdf()
    text = (RecursiveCharacterTextSplitter(
        chunk_size = size,
        chunk_overlap = overlap,
        separators=MARKDOWN_TEMPLATE
    )) 
    split = text.split_documents(docs)
    return split

def hugg_embed():
    embeddings  = HuggingFaceEmbeddings(
        model_name = "sentence-transformers/all-MiniLM-L6-v2",
    )
    return embeddings

def build_vector(force_rebuild=False):
    embeddings = hugg_embed()
    if not force_rebuild and os.path.exists(CHROMA_DIR):
        vectorstore = Chroma(
            collection_name=COLLECTION_NAME,
            embedding_function=embeddings,
            persist_directory=CHROMA_DIR,
        )
        return vectorstore
    chunks = text_split()
    vectorstore = Chroma.from_documents(
        documents=chunks,
        embedding=embeddings,
        collection_name=COLLECTION_NAME,
        persist_directory=CHROMA_DIR,
    )
    return vectorstore

def retrieve_context(vectorstore, query, k=4):
    results = vectorstore.similarity_search(query, k=k)
    context = "\n\n".join(doc.page_content for doc in results)
    return context

def data_chatbot(user_message):
    client = Groq(
    api_key=os.environ.get("GROQ_API_KEY"),  # This is the default and can be omitted
)
    vector_db = build_vector()
    context = retrieve_context(vector_db, user_message)
    system_prompt = (
        "Bạn là chuyên gia tư vấn tâm lý sức khoẻ học đường. "
        "Mọi câu hỏi không liên quan sẽ từ chối trả lời hoặc kêu tôi không biết. "
        "Hãy sử dụng thông tin ngữ cảnh dưới đây (nếu có liên quan) để trả lời chính xác hơn:\n\n"
        f"{context}"
    )
    
    chat_completion = client.chat.completions.create(
             model="llama-3.1-8b-instant",
             messages=[
                    {"role":"system", "content": system_prompt},
                    {"role": "user", "content": user_message}
                 ],
        )
    answer = chat_completion.choices[0].message.content
    return answer

    
     

