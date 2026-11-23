from flask import Flask, render_template, request
import requests

app = Flask(__name__, template_folder='.')

@app.route("/", methods=["GET", "POST"])
def index():
    texte = ""
    if request.method == "POST":
        r = requests.get('https://catfact.ninja/fact')
        texte = r.json()['fact']
    return render_template("index.html", texte=texte)

if __name__ == "__main__":
    app.run(debug=True)