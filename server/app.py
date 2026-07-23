from flask import Flask, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app) 

@app.route('/', methods = ['GET'])
def get_data():
    return jsonify({"mess": "Hello RN from flask", "status": "success"})

if __name__ == '__main__':
    # Run on 0.0.0.0 so it is accessible across your local network
    app.run(host='0.0.0.0', port=5000, debug=True)