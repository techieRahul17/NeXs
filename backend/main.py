from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import users, projects

app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users.router)
app.include_router(projects.router)

@app.get("/")
def read_root():
    return {"message": "Nexus Backend API with MongoDB"}
