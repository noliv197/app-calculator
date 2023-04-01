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

class ChangePasswordRequest(BaseModel):
    email: EmailStr
    current_password: constr(min_length=8)
    new_password: constr(min_length=8)

class ChangePasswordResponse(BaseModel):
    email:EmailStr
    current_password:str
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

class ConvertionBaseSchema(BaseModel):
    type: str
    from_: str
    to: str
    value_from: float
    user_id: int | None = None

    class Config:
        orm_mode = True

class CreateConvertionSchema(ConvertionBaseSchema):
    pass

class ConvertionResponse(ConvertionBaseSchema):
    id: int
    user_id: int
    created_at: datetime
    value: float

class ListConvertionResponse(BaseModel):
    status: str
    results: int
    convertions: List[ConvertionResponse]


class DilutionBaseSchema(BaseModel):
    c1: float | None = None
    v1: float | None = None
    c2: float | None = None
    v2: float | None = None
    user_id: int | None = None

    class Config:
        orm_mode = True

class CreateDilutionSchema(DilutionBaseSchema):
    pass

class DilutionResponse(DilutionBaseSchema):
    id: int
    user_id: int
    c1: float
    v1: float
    c2: float
    v2: float
    created_at: datetime

class ListDilutionResponse(BaseModel):
    status: str
    results: int
    dilutions: List[DilutionResponse]