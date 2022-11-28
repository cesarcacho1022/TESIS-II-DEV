from flask import Flask, render_template, request, make_response, jsonify
from waitress import serve
import pickle
import numpy as np

model = pickle.load(open('backend/data/modelDiscriminant.pkl', 'rb'))
app = Flask(__name__)


@app.route('/')
def index():
    return ('Bienvenidos al backend')


@app.route('/test', methods=['GET'])
def getResult():
    input = np.array([202500.00, 406597.50, 7, 4, 14, 0, 66]).reshape(1, 7)  # 0 -> para clientes no morosos | 1 -> para clientes morosos

    # prediction
    result = model.predict(input)
    print("Resultado : " + str(result))

    result = 'APLICA' if result[0] == 0 else 'NO APLICA'

    return result


@app.route('/predict', methods=['GET', 'POST', 'PUT'])
def predict_placement():
    if request.method == "POST":
        try:
            print("JSON : " + request.json)
            AMT_INCOME_TOTAL = float(request.json['AMT_INCOME_TOTAL'])
            AMT_CREDT = float(request.json['AMT_CREDT'])
            NAME_INCOME = int(request.json['NAME_INCOME'])
            NAME_EDUCATION = int(request.json['NAME_EDUCATION'])
            TERM_MONTH = int(request.json['TERM_MONTH'])
            CNT_CHILDRE = int(request.json['CNT_CHILDRE'])
            AGE = int(request.json['AGE'])

            print("AGE : " + str(AGE))

            # prediction
            result = model.predict(np.array([AMT_INCOME_TOTAL, AMT_CREDT, NAME_INCOME, NAME_EDUCATION, TERM_MONTH, CNT_CHILDRE, AGE]).reshape(1, 7))
            result = 'APLICA' if result[0] == 0 else 'NO APLICA'

            print("Resultado : " + str(result))

            sample_response = {
                "result": 'sucess'
            }
        except Exception as e:
            print("Fallado1 : " + str(e))
            sample_response = {
                "result": 'failed',
                "error": str(e)
            }
        return sample_response
    else:
        print("Fallado2 : ")
        sample_response = {"result": 'failed'}
    # JSONify response
    response = make_response(jsonify(sample_response))
    response.headers['Access-Control-Allow-Origin'] = '*'
    response.headers['Content-Type'] = 'application/json'
    return response


if __name__ == '__main__':
    serve(app, host='0.0.0.0', port=8080)
