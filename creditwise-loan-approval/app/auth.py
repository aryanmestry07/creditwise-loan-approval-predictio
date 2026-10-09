from passlib.context import CryptContext
from jose import jwt , JWTError
from datetime import datetime , timezone , timedelta
from fastapi.security import OAuth2PasswordBearer
from fastapi import HTTPException , Depends



SECRET_KEY = "my_secret_key_1234"
ALGORITHM = "HS256"
ACCESS_TOKEN_TIME_MIN = 30

o2auth_schemes = OAuth2PasswordBearer(tokenUrl = "login")


pwd_context = CryptContext(
    schemes = ['bcrypt'],
    deprecated = "auto"
)

def hash_password(password : str):
    return pwd_context.hash(password)

def verify_password(plain_password : str , hashed_password : str):
    return pwd_context.verify(
        plain_password,
        hashed_password
    )

def create_access_token(data : dict):
    to_encode = data.copy()

    expire = datetime.now(timezone.utc) + timedelta(minutes = ACCESS_TOKEN_TIME_MIN)

    to_encode.update({"exp" : expire})

    encoded_jwt = jwt.encode(
            to_encode,
            SECRET_KEY,
            algorithm = ALGORITHM
    )

    return encoded_jwt

def decode_access_token(token : str):
    payload = jwt.decode(
        token,
        SECRET_KEY,
        algorithms = [ALGORITHM]
    )

    return payload

def get_current_user(
    token: str = Depends(o2auth_schemes)
):
    print("TOKEN RECEIVED:", token)

    try:
        payload = decode_access_token(token)

        print("PAYLOAD:", payload)

        email = payload.get("sub")

        print("EMAIL:", email)

        if not email:
            raise HTTPException(
                status_code=401,
                detail="Invalid token"
            )

        return email

    except JWTError as e:
        print("JWT ERROR:", e)

        raise HTTPException(
            status_code=401,
            detail="Invalid or expired token"
        )