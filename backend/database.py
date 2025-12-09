import motor.motor_asyncio
import os

MONGO_DETAILS = "mongodb://localhost:27017"

client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_DETAILS)

database = client.nexus_db

user_collection = database.get_collection("users")
project_collection = database.get_collection("projects")
