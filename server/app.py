from flask import Flask, jsonify, request
from flask_cors import CORS
import json

from chatbot import data_chatbot
from analystemotion.AnalystEmotionAPI import AnalystEmotionAPI
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
    with open("config_chatbot.json", "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4)
    return jsonify({
        "message":"Cập nhật thành công"
    })
    
@app.route('/chatbot', methods=["POST"])
def get_dataChatbot():
    data = request.get_json()
    
    user_mess = data.get("message", "")
    my_data = data_chatbot(user_mess)
    try:
        return jsonify({"reply": my_data})
    except Exception as ex:
        return jsonify({"error":str(ex)}), 500


if __name__ == '__main__':
    # Run on 0.0.0.0 so it is accessible across your local network
    app.run(host='0.0.0.0', port=5000, debug=True)