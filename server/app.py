from flask import Flask, jsonify, request
from flask_cors import CORS
import json

# from chatbot import data_chatbot
from analystemotion.AnalystEmotionAPI import AnalystEmotionAPI
from chatbot.ChatbotAPI import ChatbotAPI
app = Flask(__name__)
CORS(app) 

@app.route('/data-analysic', methods=["POST"])
def get_dataEmotion():
    analystAPI = AnalystEmotionAPI()
    account_id = request.json.get("account_id")
    return analystAPI.get_dataEmotion(account_id) 

@app.route('/config_chat', methods=["POST"])
def update_config():
    data = request.json
    configChatbot = ChatbotAPI()
    return configChatbot.configChatbot(data)

@app.route('/config_chat_get', methods=["GET"])
def get_config():
    data = ChatbotAPI()
    return data.get_config()  
   
@app.route('/chatbot', methods=["POST"])
def get_dataChatbot():
    data = request.get_json()
    chatres = ChatbotAPI()
    return chatres.dataChatbot(data)
    
if __name__ == '__main__':
    # Run on 0.0.0.0 so it is accessible across your local network
    app.run(host='0.0.0.0', port=5000, debug=True)