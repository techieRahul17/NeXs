from pydantic import BaseModel, Field
from typing import List, Optional
from bson import ObjectId

class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid objectid")
        return ObjectId(v)

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type="string")

class ProjectBase(BaseModel):
    title: str
    type: str
    budget: str
    timeline: str
    description: str

class ProjectCreate(ProjectBase):
    pass

class Project(ProjectBase):
    id: Optional[str] = Field(alias="_id")
    owner_id: str

    class Config:
        populate_by_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}

class UserBase(BaseModel):
    email: str
    name: str
    company: str

class UserCreate(UserBase):
    password: str

class User(UserBase):
    id: Optional[str] = Field(alias="_id")
    # projects: List[Project] = [] # Handling relations in NoSQL is different, simplifying for now

    class Config:
        populate_by_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str] = None
