import pytest
from fastapi import FastAPI
from fastapi.testclient import TestClient

import sys
import os
# Allow to import from app dir
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))) 


from app.api.models.models import Base
from app.api.database.database import get_db
from app.api.routers import user
from app.utils import hash_password

from pytest_postgresql import factories
from pytest_postgresql.janitor import DatabaseJanitor
from sqlalchemy import create_engine, select
from sqlalchemy.orm.session import Session
from sqlalchemy.sql import text
from app.oauth2 import AuthJWT


test_db = factories.postgresql_proc(port=None, dbname="test_db")

def start_application():
    app = FastAPI()
    app.include_router(user.router)
    return app

@pytest.fixture(scope="function")
def client(app: FastAPI, db_session: Session):
    """
    Create a new FastAPI TestClient that uses the `db_session` fixture to override
    the `get_db` dependency that is injected into routes.
    """
    def _get_test_db():
        try:
            yield db_session
        finally:
            pass
    app.dependency_overrides[get_db] = _get_test_db
    with TestClient(app) as client:
        yield client

@pytest.fixture(scope="function")
def db_session(test_db):
    """Session for SQLAlchemy."""
    pg_host = test_db.host
    pg_port = test_db.port
    pg_user = test_db.user
    pg_password = test_db.password
    pg_db = test_db.dbname

    with DatabaseJanitor(
        pg_user, pg_host, pg_port, pg_db, test_db.version, pg_password
    ):
        connection_str = f"postgresql+psycopg2://{pg_user}:@{pg_host}:{pg_port}/{pg_db}"
        engine = create_engine(connection_str)
        with Session(bind=engine, expire_on_commit=False) as session:
            yield session


@pytest.fixture(scope="function")
def app(db_session):
    """
    Create a fresh database on each test case.
    """
    Base.metadata.create_all(db_session.bind)  # Create the tables.
    _app = start_application()
    yield _app
    #Base.metadata.drop_all(db_session.bind)

@pytest.fixture(scope="function")
def user_created(db_session):
    db_session.execute(text(f'''INSERT INTO public.users
                        ("name", email, "password", created_at, updated_at)
                        VALUES('John', 'john@mail.com', '{hash_password('secret_password')}', now(), now());'''))

@pytest.fixture(scope="function")
def register_payload():
    yield {
            "name": "John",
            "email": "john@mail.com",
            "password": "secret_password",
            "passwordConfirm": "secret_password"
            }
    

