from fastapi import APIRouter, Depends
from typing import List
from .. import schemas, crud
from .users import get_current_user

router = APIRouter(
    prefix="/projects",
    tags=["projects"]
)

@router.post("/", response_model=schemas.Project)
async def create_project(
    project: schemas.ProjectCreate,
    current_user: schemas.User = Depends(get_current_user)
):
    return await crud.create_project(project=project, user_id=current_user["_id"])

@router.get("/", response_model=List[schemas.Project])
async def read_projects(
    current_user: schemas.User = Depends(get_current_user)
):
    return await crud.get_projects_by_user(user_id=current_user["_id"])
