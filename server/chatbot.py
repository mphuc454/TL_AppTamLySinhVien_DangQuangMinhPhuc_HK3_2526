from groq import Groq
import os
from dotenv import load_dotenv
load_dotenv()


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

    
     

