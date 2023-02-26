from datetime import datetime, date
from app import schemas
from app.api.models import models
from sqlalchemy.orm import Session
from fastapi import Depends, HTTPException, status, APIRouter, Response
from app.api.database.database import get_db
from app.oauth2 import require_user
from sqlalchemy.dialects import postgresql

router = APIRouter()

@router.post('/', status_code=status.HTTP_201_CREATED, response_model=schemas.ActivityResponse)
def create_activity(activity: schemas.CreateActivitySchema, db: Session = Depends(get_db), owner_id: str = Depends(require_user)):
    activity.user_id = owner_id
    new_activity = models.Activity(**activity.dict())
    db.add(new_activity)
    db.commit()
    db.refresh(new_activity)
    return new_activity

@router.get('/', response_model=schemas.ListActivityResponse)
def get_activity(start_date: str, end_date: str, db: Session = Depends(get_db), limit: int = 10, page: int = 1, search: str = '', user_id: str = Depends(require_user)):
    skip = (page - 1) * limit

    print(start_date, end_date)
    query = db.query(models.Activity).filter(
        models.Activity.activity.contains(search), 
        models.Activity.created_at.between(str(start_date), str(end_date)),
        models.Activity.user_id == user_id).order_by(
        models.Activity.created_at.desc()).limit(limit).offset(skip)
    
    print(query.statement.compile(dialect=postgresql.dialect()))
 
    activities = query.all()
    return {'status': 'success', 'results': len(activities), 'activities': activities}