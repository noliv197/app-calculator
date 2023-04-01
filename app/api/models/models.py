from app.api.database.database import Base
from sqlalchemy import TIMESTAMP, Column, ForeignKey, String, text, Integer, Float
import pint


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
    
    def change_password(self,new_password):
        self.password = new_password

class Activity(Base):
    __tablename__ = 'activities'
    id = Column(Integer, primary_key=True, nullable=False)
    user_id = Column(ForeignKey("users.id"), nullable=False)
    title = Column(String)
    activity = Column(String)
    created_at = Column(TIMESTAMP(timezone=True),
                        nullable=False, server_default=text("now()"))
    
class Convertion(Base):
    __tablename__ = 'convertions'
    id = Column(Integer, primary_key=True, nullable=False)
    type = Column(String, nullable=False)
    from_ = Column(String, nullable=False)
    to = Column(String, nullable=False)
    value = Column(Float, nullable=False)
    value_from = Column(Float, nullable=False)
    user_id = Column(ForeignKey("users.id"), nullable=False)
    created_at = Column(TIMESTAMP(timezone=True),
                        nullable=False, server_default=text("now()"))
    
    def calculate_value(self):
        ureg = pint.UnitRegistry()
        q = self.value_from * ureg.parse_expression(self.from_)
        q_end = q.to(ureg.parse_expression(self.to))
        self.value = q_end.magnitude
        return self.value

class Dilution(Base):
    __tablename__ = 'dilutions'
    id = Column(Integer, primary_key=True, nullable=False)
    c1 = Column(Float, nullable=True)
    v1 = Column(Float, nullable=True)
    c2 = Column(Float, nullable=True)
    v2 = Column(Float, nullable=True)
    user_id = Column(ForeignKey("users.id"), nullable=False)
    created_at = Column(TIMESTAMP(timezone=True),
                        nullable=False, server_default=text("now()"))
    
    def calculate_dilution(self):
        if not self.c1:
            self.c1 = (self.c2 * self.v2) / self.v1
        elif not self.v1:
            self.v1 = (self.c2 * self.v2) / self.c1
        elif not self.c2:
            self.c2 = (self.c1 * self.v1) / self.v2
        elif not self.v2:
            self.v2 = (self.c1 * self.v1) / self.c2