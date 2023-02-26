from app.api.database.database import Base
from sqlalchemy import TIMESTAMP, Column, ForeignKey, String, text, Integer


class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True, nullable=False)
    name = Column(String,  nullable=False)
    email = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)
    created_at = Column(TIMESTAMP(timezone=True),
                        nullable=False, server_default=text("now()"))
    updated_at = Column(TIMESTAMP(timezone=True),
                        nullable=False, server_default=text("now()"))

class Activity(Base):
    __tablename__ = 'activities'
    id = Column(Integer, primary_key=True, nullable=False)
    user_id = Column(ForeignKey("users.id"), nullable=False)
    title = Column(String)
    activity = Column(String)
    created_at = Column(TIMESTAMP(timezone=True),
                        nullable=False, server_default=text("now()"))

