from flask import Flask, send_file

app = Flask(__name__)


@app.route("/")
def index():
    return send_file("index.html")


@app.route("/foods")
def foods():
    return send_file("templates/foods.html")

if __name__ == "__main__":
    app.run()
