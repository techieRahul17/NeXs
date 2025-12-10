import motor.motor_asyncio
import os
from dotenv import load_dotenv

load_dotenv()

MONGO_DETAILS = os.getenv("MONGO_URI", "mongodb://localhost:27017/NEXUS3")

client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_DETAILS)

database = client.NEXUS3

user_collection = database.get_collection("users")
project_collection = database.get_collection("projects")
