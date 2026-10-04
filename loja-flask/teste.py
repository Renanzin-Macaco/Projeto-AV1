from flask import Flask

app = Flask(__name__)

@app.route("/oi")
def dizer_oi():
    return "Olá, mundo!"

@app.route("/tchau")
def dizer_tchau():
    return "Até logo!"

if __name__ == "__main__":
    app.run(debug=True)



