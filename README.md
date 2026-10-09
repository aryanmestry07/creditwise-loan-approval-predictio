# CreditWise — Loan Approval Prediction System

An end-to-end machine learning project that predicts loan approval outcomes using applicant information. The project uses Python, Pandas, and Scikit-learn to build a classification model and integrates the prediction functionality with a FastAPI backend.

## Overview

Loan approval decisions depend on several factors, including an applicant's income, credit history, loan amount, and other financial characteristics.

CreditWise explores how machine learning can be used to analyze applicant information and predict loan approval outcomes.

The project covers data preprocessing, exploratory data analysis, model development, and API integration.

## Features

* Exploratory Data Analysis (EDA)
* Data cleaning and preprocessing
* Feature preparation for machine learning
* Loan approval prediction using a classification model
* Scikit-learn model integration
* FastAPI backend for prediction requests
* Structured and reusable Python code

## Tech Stack

**Programming Language**

* Python

**Data Analysis**

* Pandas
* NumPy
* Matplotlib

**Machine Learning**

* Scikit-learn
* Classification algorithms
* Model evaluation

**Backend**

* FastAPI
* Uvicorn

**Development Tools**

* Jupyter Notebook
* VS Code
* Git and GitHub

## Project Workflow

1. Load and inspect the loan applicant dataset.
2. Perform exploratory data analysis.
3. Clean the data and handle missing values where necessary.
4. Prepare the features for model training.
5. Train a machine learning classification model.
6. Evaluate the model using appropriate classification metrics.
7. Integrate the trained model with FastAPI.
8. Accept applicant information through the API and return a prediction.

## Project Structure


creditwise-loan-approval-prediction/
├── app/
├── data/
├── notebooks/
├── models/
├── src/
├── requirements.txt
├── .gitignore
└── README.md


The directory structure above illustrates a suggested organization. Refer to the actual project files for the implemented structure.

## Installation and Setup

### 1. Clone the Repository


git clone https://github.com/YOUR_USERNAME/creditwise-loan-approval-prediction.git


Replace `aryanmestry07` with your GitHub username.

### 2. Navigate to the Project Directory


cd creditwise-loan-approval-prediction


### 3. Create a Virtual Environment


python -m venv venv


Activate the environment.

**Windows — Command Prompt:**


venv\Scripts\activate


**Windows — PowerShell:**


.\venv\Scripts\Activate.ps1


**macOS/Linux:**


source venv/bin/activate


### 4. Install Dependencies

pip install -r requirements.txt


### 5. Run the Application

Run the FastAPI application using the appropriate module path for your project.

For example, if the FastAPI instance is named `app` inside `app/main.py`:

uvicorn app.main:app --reload

Open the interactive API documentation at:

`http://127.0.0.1:8000/docs`

If your application uses a different entry point, update the command accordingly.

## Model Evaluation

Model performance should be evaluated using appropriate classification metrics, such as:

* Accuracy
* Precision
* Recall
* F1-score
* Confusion matrix

Actual performance metrics can be added here after evaluating the final model.

## Current Status

* [x] Machine learning project development
* [x] FastAPI integration
* [ ] Public deployment

The deployment status should be updated as the project evolves.

## Future Improvements

* Improve model performance through hyperparameter tuning.
* Add more comprehensive model evaluation.
* Build a frontend for submitting loan applications.
* Improve API input validation and error handling.
* Deploy the application to a cloud platform.
* Add automated testing and continuous integration.

## Disclaimer

This project is intended for educational and experimental purposes. Its predictions should not be used as the sole basis for real-world lending or financial decisions.

## Author

**Aryan Mestry**

BCA Graduate | Python Developer | AI/ML Enthusiast

GitHub: [aryanmestry07](https://github.com/aryanmestry07)
