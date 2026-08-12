from flask import json, jsonify, request
from .ChatbotResponse import ChatbotResponse

class ChatbotAPI:
    def dataChatbot(self, data):
        user_mess = data.get("message", "")
        chatbotRes = ChatbotResponse()
        my_data = chatbotRes.data_chatbot(user_mess)
        try:
            return jsonify({"reply": my_data})
        except Exception as ex:
            return jsonify({"error":str(ex)}), 500
    
    def configChatbot(self, data):
        with open("config_chatbot.json", "w", encoding="utf-8") as f:
            json.dump(data, f, indent=4)
        return jsonify({
            "message":"Cập nhật thành công",
            "config": data
        })
    
    def get_config(self):
        try:
            with open("config_chatbot.json", "r", encoding="utf-8") as f:
                config = json.load(f)
            return jsonify(config)
        except Exception as ex:
            return jsonify({"error": str(ex)}), 500
        
  