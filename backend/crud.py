from . import schemas, auth
from .database import user_collection, project_collection
from bson import ObjectId

async def get_user_by_email(email: str):
    user = await user_collection.find_one({"email": email})
    if user:
        # Convert _id to string for Pydantic compatible mapping if not handled elsewhere
        user["_id"] = str(user["_id"])
        return user
    return None

async def create_user(user: schemas.UserCreate):
    hashed_password = auth.get_password_hash(user.password)
    user_dict = user.dict()
    user_dict["hashed_password"] = hashed_password
    del user_dict["password"]
    
    result = await user_collection.insert_one(user_dict)
    new_user = await user_collection.find_one({"_id": result.inserted_id})
    new_user["_id"] = str(new_user["_id"])
    return new_user

async def create_project(project: schemas.ProjectCreate, user_id: str):
    project_dict = project.dict()
    project_dict["owner_id"] = user_id
    
    result = await project_collection.insert_one(project_dict)
    new_project = await project_collection.find_one({"_id": result.inserted_id})
    new_project["_id"] = str(new_project["_id"])
    return new_project

async def get_projects_by_user(user_id: str):
    projects = []
    async for project in project_collection.find({"owner_id": user_id}):
        project["_id"] = str(project["_id"])
        projects.append(project)
    return projects
