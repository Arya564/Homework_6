## this is for FLASK the server side 
# setting up the backend portion for the homework

from flask import Flask, jsonify, request
# from flask_cors import CORS
from flask.helpers import send_from_directory

app = Flask(__name__, static_folder="frontend/build", static_url_path="")
# CORS(app)

valid = [] # initialize an empty list
valid.append("arya") # put my name into the list

# Route, make sure to include the GET methods
# include some directory 
@app.route("/name/<input_state>", methods=["GET"])
def name(input_state: str):
        
        if input_state.lower() in valid:
            return jsonify(output="Amin")
        else:
            return jsonify(output="User Not Found")


def index():
    return send_from_directory(app.static_folder, "index.html")

if __name__=="__main__":
    app.run(host="0.0.0.0")