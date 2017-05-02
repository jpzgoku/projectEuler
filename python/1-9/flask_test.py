from flask import Flask
from problem5 import lowest_common_multiple
from functools import reduce


app = Flask(__name__)

@app.route('/')
def hello():
    return str(reduce(lowest_common_multiple, range(1, 21)))

app.run()
