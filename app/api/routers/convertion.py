from datetime import datetime, date
from app import schemas
from app.api.models import models
from sqlalchemy.orm import Session
from fastapi import Depends, HTTPException, status, APIRouter, Response
from app.api.database.database import get_db
from app.oauth2 import require_user
from sqlalchemy.dialects import postgresql

router = APIRouter()

@router.post('/', status_code=status.HTTP_201_CREATED, response_model=schemas.ConvertionResponse)
def create_convertion(convertion: schemas.CreateConvertionSchema, db: Session = Depends(get_db), owner_id: str = Depends(require_user)):
    convertion.user_id = owner_id
    new_convertion = models.Convertion(**convertion.dict())
    new_convertion.created_at = datetime.now()
    new_convertion.calculate_value()
    db.add(new_convertion)
    db.commit()
    db.refresh(new_convertion)
    return new_convertion