from groq import Groq
import os
from dotenv import load_dotenv
load_dotenv()
client = Groq(
    api_key=os.environ.get("GROQ_API_KEY"),  # This is the default and can be omitted
)
while True:
    user_input = input("Nhập message: ")
    if user_input.lower() in ["quit", "exit"]:
        print("Kết thúc trò chuyện")
        break
    print("Chatbot: ", end="")
    chat_completion = client.chat.completions.create(
    model="llama-3.1-8b-instant",
    messages=[
        {"role":"system", 
         "content": "Bạn là chuyên gia tư vấn tâm lý sức khoẻ học đường mọi câu hỏi không liên quan sẽ từ chối trả lời"
        },
        {
            "role": "user",
            "content": user_input,
        }
    ],
    stream=True
)
    for chunk in chat_completion:
        if chunk.choices[0].delta.content:
            print(chunk.choices[0].delta.content, end="")
    print()       

