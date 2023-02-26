from datetime import datetime
from typing import List
from pydantic import BaseModel, EmailStr, constr


class UserBaseSchema(BaseModel):
    name: str
    email: EmailStr

    class Config:
        orm_mode = True


class CreateUserSchema(UserBaseSchema):
    password: constr(min_length=8)
    passwordConfirm: str


class LoginUserSchema(BaseModel):
    email: EmailStr
    password: constr(min_length=8)


class UserResponse(UserBaseSchema):
    id: int
    created_at: datetime
    updated_at: datetime


class FilteredUserResponse(UserBaseSchema):
    id: int


class ActivityBaseSchema(BaseModel):
    title: str
    activity: str
    user_id: int | None = None
    created_at: datetime

    class Config:
        orm_mode = True


class CreateActivitySchema(ActivityBaseSchema):
    pass


class ActivityResponse(ActivityBaseSchema):
    id: int
    user_id: int
    created_at: datetime

class ListActivityResponse(BaseModel):
    status: str
    results: int
    activities: List[ActivityResponse]