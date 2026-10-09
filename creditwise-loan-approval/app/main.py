from fastapi import FastAPI , HTTPException , Depends
from schema import *
from prediction import predict
from auth import hash_password , verify_password , create_access_token , get_current_user
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["http://localhost:5173"],
    allow_credentials= True,
    allow_methods = ["*"],
    allow_headers = ["*"]
)



@app.get("/")
def home():
    return{
        "message" : "Welcome to Loan Approval Prediction !!"
    }

USER = {
    
}

@app.post("/register")
def register(user : UserRegister):

    if USER:
        raise HTTPException(
            status_code = 400,
            detail = "Invalid Credentials"
        )

    hashed_password = hash_password(user.password)

    USER["email"] = user.email
    USER["password"] = hashed_password

    return{
        "message" : "Registered Successfull"
    }


@app.post("/login")
def login(form_data : OAuth2PasswordRequestForm = Depends()):

    if not USER:
        raise HTTPException(
            status_code = 401,
            detail = "User Not Found"
        )

    if form_data.username != USER["email"]:
        raise HTTPException(
            status_code = 401,
            detail = "Invalid Credentials"
        )

    if not verify_password(form_data.password , USER["password"]):
        raise HTTPException(
            status_code = 401,
            detail = "Invalid Credentials"
        )

    token = create_access_token({'sub' : form_data.username})

    return{
        "access_token" : token,
        "token_type" : "bearer"
    }



@app.post("/loan-predict")
def loan_predictions(data : loan_info , current_user : str = Depends(get_current_user)):
    try:
        prediction = predict(data)

        return{
            "Status" : prediction
        }   

    except Exception as e:
        raise HTTPException(
            status_code = 500,
            detail = f"Exception : {e}"
        )

