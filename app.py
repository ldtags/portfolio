from flask import Flask, render_template, redirect

app = Flask(__name__)
app.secret_key = "27eduCBA09"

@app.route('/')
def main():
    return render_template("index.html")

@app.route('/btree')
def btree():
    return render_template("btree.html")


if __name__ == "__main__":
    app.run(debug=True)