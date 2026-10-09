import pandas as pd
import joblib



best_model = joblib.load("../model/creditwise-loan-model.pkl")
feature_columns = joblib.load("../model/feature-columns.pkl")


def predict(data):
    input_df = pd.DataFrame([data.model_dump()])

    input_df = pd.get_dummies(input_df)
    input_df = input_df.reindex(
        columns = feature_columns,
        fill_value = 0
    )

    predictions = best_model.predict(input_df)[0]

    if predictions == 0:
        return 'Not Approved'
    else:
        return 'Approved'

    

