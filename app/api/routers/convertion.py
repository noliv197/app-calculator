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

@router.get('/', response_model=schemas.ListConvertionResponse)
def get_activity(start_date: str, end_date: str, db: Session = Depends(get_db), limit: int = 10, page: int = 1, search: str = '', user_id: str = Depends(require_user)):
    skip = (page - 1) * limit

    if search == '':
        query = db.query(models.Convertion).filter(
        models.Convertion.created_at.between(str(start_date), str(end_date)),
        models.Convertion.user_id == user_id).order_by(
        models.Convertion.created_at.desc()).limit(limit).offset(skip) 
    
    else:
        query = db.query(models.Convertion).filter(
            models.Convertion.type.ilike(search), 
            models.Convertion.created_at.between(str(start_date), str(end_date)),
            models.Convertion.user_id == user_id).order_by(
            models.Convertion.created_at.desc()).limit(limit).offset(skip) 
    convertions = query.all()
    return {'status': 'success', 'results': len(convertions), 'convertions': convertions}