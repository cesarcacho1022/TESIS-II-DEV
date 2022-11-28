from flask import Flask, request, make_response, jsonify
from flask_cors import CORS
import pickle
import numpy as np

# Model
model = pickle.load(open('backend/data/modelDiscriminant.pkl', 'rb'))

# Instantiation
app = Flask(__name__)

# Settings
CORS(app)


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


@app.route('/predict', methods=['POST'])
def predict_placement():
    if request.method == "POST":
        try:
            print(request.form)
            
            AMT_INCOME_TOTAL = float(request.form.get('AMT_INCOME_TOTAL'))
            AMT_CREDT = float(request.form.get('AMT_CREDT'))
            NAME_INCOME = int(request.form.get('NAME_INCOME'))
            NAME_EDUCATION = int(request.form.get('NAME_EDUCATION'))
            TERM_MONTH = int(request.form.get('TERM_MONTH'))
            CNT_CHILDRE = int(request.form.get('CNT_CHILDRE'))
            AGE = int(request.form.get('AGE'))

            # prediction
            result = model.predict(np.array([AMT_INCOME_TOTAL, AMT_CREDT, NAME_INCOME, NAME_EDUCATION, TERM_MONTH, CNT_CHILDRE, AGE]).reshape(1, 7))
            result = 'APLICA' if result[0] == 0 else 'NO APLICA'

            print("Resultado : " + str(result))

            sample_response = {
                "result": str(result)
            }
        except Exception as e:
            print("Fallado1 : " + str(e))
            sample_response = {
                "status": 500,
				"error": str(e)
            }
        return sample_response
    else:
        sample_response = {"result": 'failed'}

    # JSONify response
    response = jsonify(str(sample_response))

    return response


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)
