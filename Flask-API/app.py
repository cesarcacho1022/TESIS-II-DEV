from flask import Flask, render_template, request
import pickle
import numpy as np

model = pickle.load(open('Flask-API/data/modelDiscriminant.pkl', 'rb'))
app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/test', methods=['GET'])
def getResult():
    input = np.array([167580, 0, 0, 0, 1, 0, 157500, 1174090.5, 49873.5, 1080000, 6, 7, 4, 1, 1, 0.018801, 39, -3247, -1828, -4444, 1, 1, 1, 1, 0, 0, 14, 2, 2, 2, 5, 8, 0, 0, 0, 0, 0, 0, 51, 0.440504585,
                     0.297086612, 0.977734858, 0.226281907, 0.977065373, 0.222315047, 0.977752264, 0.22589659, 0.102546663, -1, 0, 0, 0, 0, -328, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3]).reshape(1, 80)
    
    # prediction
    result = model.predict(input)

    result = 'Yes' if result[0] == 1 else 'No'

    return render_template('index.html', result=result)


@app.route('/predict', methods=['POST'])
def predict_placement():
    AMT_INCOME_TOTAL = float(request.form.get('AMT_INCOME_TOTAL'))
    AMT_CREDT = int(request.form.get('AMT_CREDT'))
    NAME_INCOME = int(request.form.get('NAME_INCOME'))

    # prediction
    result = model.predict(
        np.array([AMT_INCOME_TOTAL, AMT_CREDT, NAME_INCOME]).reshape(1, 3))

    result = 'Yes' if result[0] == 1 else 'No'

    return render_template('index.html', result=result)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
