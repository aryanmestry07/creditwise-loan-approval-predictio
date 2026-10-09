from pydantic import BaseModel , EmailStr
from enum import Enum

class Employment_Status_enum(str , Enum):
    Salaried = 'Salaried' ,
    Selfemployed = 'Self-employed'
    Contract = 'Contract'
    Unemployed = 'Unemployed'

class Marital_Status_Enum(str,Enum):
    Married = 'Married'
    Single ='Single'




class loan_info(BaseModel):
    Applicant_Income : float
    Coapplicant_Income : float
    Employment_Status : Employment_Status_enum
    Age : int
    Marital_Status : Marital_Status_Enum
    Dependents : float
    Credit_Score : float
    Existing_Loans : float
    DTI_Ratio :float
    Savings : float
    Collateral_Value : float
    Loan_Amount : float
    Loan_Term :float
    Loan_Purpose : str
    Property_Area : str
    Education_Level : str
    Gender : str
    Employer_Category : str



class UserRegister(BaseModel):
    email : EmailStr
    password : str

