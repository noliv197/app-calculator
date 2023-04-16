from datetime import datetime
from app import schemas
from app.api.models import models
from sqlalchemy.orm import Session
from fastapi import Depends, status, APIRouter
from app.api.database.database import get_db
from app.oauth2 import require_user

router = APIRouter()

@router.post('/', status_code=status.HTTP_201_CREATED, response_model=schemas.DilutionResponse)
def create_dilution(dilution: schemas.CreateDilutionSchema, db: Session = Depends(get_db), owner_id: str = Depends(require_user)):
    dilution.user_id = owner_id
    new_dilution = models.Dilution(**dilution.dict())
    new_dilution.created_at = datetime.now()
    new_dilution.calculate_dilution()
    db.add(new_dilution)
    db.commit()
    db.refresh(new_dilution)
    return new_dilution

@router.get('/', response_model=schemas.ListDilutionResponse)
def get_activity(start_date: str, end_date: str, db: Session = Depends(get_db), limit: int = 10, page: int = 1, user_id: str = Depends(require_user)):
    skip = (page - 1) * limit

    query = db.query(models.Dilution).filter( 
        models.Dilution.created_at.between(str(start_date), str(end_date)),
        models.Dilution.user_id == user_id).order_by(
        models.Dilution.created_at.desc()).limit(limit).offset(skip)
    dilutions = query.all()
    return {'status': 'success', 'results': len(dilutions), 'dilutions': dilutions}