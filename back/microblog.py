from flask import Flask
from flask import request
from flask import abort
from flask_cors import CORS
from random import choice
from flask import jsonify

app = Flask(__name__)
CORS(app)


@app.route("/", methods=['GET'])
def index():
    return "endpoints: /person ; /facility ; /exposure"


@app.route("/person/<int:input>", methods=['GET'])
def person(input):
    val1 = input * 2
    val2 = input * 3
    return jsonify(
        {"val1": val1, "val2": val2}
    )


@app.route("/facility/<int:val1>", methods=['GET'])
def facility(val1):
    val3 = val1 * 2
    val4 = val1 * 3
    return jsonify(
        {"val3": val3, "val4": val4}
    )


@app.route("/exposure/<int:val2>", methods=['GET'])
def exposure(val2):
    val5 = val2 * 2
    return jsonify(
        {"val5": val5}
    )


if __name__ == '__main__':
    app.run(debug=True)
