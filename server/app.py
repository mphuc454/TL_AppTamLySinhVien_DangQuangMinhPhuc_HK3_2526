from flask import Flask, jsonify, request
from flask_cors import CORS
from clustering import analytics_emotion
app = Flask(__name__)
CORS(app) 

@app.route('/', methods = ['GET'])
def get_data():
    return jsonify({"mess": "Hello RN from flask", "status": "success"})


@app.route('/data-analysic', methods=["POST"])
def get_dataEmotion():
    account_id = request.json.get("account_id")
    data = analytics_emotion()
    result = next((item for item in data if item['account_id'] == account_id), None)
    return jsonify(result)

if __name__ == '__main__':
    # Run on 0.0.0.0 so it is accessible across your local network
    app.run(host='0.0.0.0', port=5000, debug=True)