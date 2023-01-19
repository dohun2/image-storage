from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

class Login(BaseModel):
    name :str
    password :str 

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def printHello():
    return  "python fastapi 8000 포트 입니다.. gg "

@app.post("/login")
def login(login :Login):
    # return "id : "+id +"password : "+password 
    # data = jsonable_encoder(login)

    return login

# @app.post("/login")
# def login(id: str = FastAPI(..., embed=True) ):
#     # return "id : "+id +"password : "+password 

#     return login
    
