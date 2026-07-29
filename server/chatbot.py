from groq import Groq
import os
from dotenv import load_dotenv
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import PyPDFLoader, DirectoryLoader
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_chroma import Chroma
load_dotenv()

def process_pdf():
    loader = DirectoryLoader(
            path = "./documents",
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


def data_chatbot(user_message):
    client = Groq(
    api_key=os.environ.get("GROQ_API_KEY"),  # This is the default and can be omitted
)
    
    chat_completion = client.chat.completions.create(
             model="llama-3.1-8b-instant",
             messages=[
                     {"role":"system", 
                      "content": "Bạn là chuyên gia tư vấn tâm lý sức khoẻ học đường mọi câu hỏi không liên quan sẽ từ chối trả lời"
                     },
                     {
                         "role": "user",
                         "content": user_message,
                     }
                 ],
        )
    answer = chat_completion.choices[0].message.content
    return answer

    
     

