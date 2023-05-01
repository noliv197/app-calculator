from app import schemas, utils
from app.api.database.database import get_db
from app.api.models import models
from pydantic import EmailStr
from sqlalchemy.orm import Session
from fastapi import APIRouter, Request, Response, status, Depends, HTTPException
from app.utils import generate_recovery_words

def create_new_user(payload: schemas.CreateUserSchema, db: Session = get_db):
    # Check if user already exist
    user = db.query(models.User).filter(
        models.User.email == EmailStr(payload.email.lower())).first()
    if user:
        raise HTTPException(status_code=status.HTTP_409_CONFLICT,
                            detail='Account already exist')
    # Compare password and passwordConfirm
    if payload.password != payload.passwordConfirm:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail='Passwords do not match')
    #  Hash the password
    payload.password = utils.hash_password(payload.password)
    del payload.passwordConfirm
    payload.email = EmailStr(payload.email.lower())
    payload_dict = payload.dict()
    payload_dict['reset_words'] = generate_recovery_words()
    new_user = models.User(**payload_dict)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

def find_user_by_email(email, db: Session = get_db):
    user = db.query(models.User).filter(
        models.User.email.ilike(email)).first()
    return user

def find_user_by_id(id, db: Session = get_db):
    user = db.query(models.User).filter(models.User.id == id).first()
    return user

def delete_user(user, db: Session = get_db):
    db.delete(user)
    db.commit()