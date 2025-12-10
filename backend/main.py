from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
try:
    from .routers import users, projects
except ImportError:
    import sys
    import os
    # Add project root to sys.path to allow imports from 'backend' package
    sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    from backend.routers import users, projects

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

if __name__ == "__main__":
    uvicorn.run("backend.main:app", host="127.0.0.1", port=8000, reload=True)
