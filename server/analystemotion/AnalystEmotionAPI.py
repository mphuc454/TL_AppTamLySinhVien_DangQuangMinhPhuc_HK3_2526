from flask import jsonify
from analystemotion.AnalystEmotion import AnalystEmotion

class AnalystEmotionAPI:
    def get_dataEmotion(self, account_id):
       data = AnalystEmotion().analytics_emotion()
       result = next((item for item in data if item['account_id'] == account_id), None)
       return jsonify(result)