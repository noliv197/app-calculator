import pytest
from fastapi import FastAPI
from fastapi.testclient import TestClient

import sys
import os
# Allow to import from app dir
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))) 


from app.api.models.models import Base
from app.api.database.database import get_db
from app.api.routers import user, activity, convertion, dilution
from app.utils import hash_password

from pytest_postgresql import factories
from pytest_postgresql.janitor import DatabaseJanitor
from sqlalchemy import create_engine, select
from sqlalchemy.orm.session import Session
from sqlalchemy.sql import text

from app.config import settings 
from tests.utils.users import authentication_token_from_email 


test_db = factories.postgresql_proc(port=None, dbname="test_db")

def start_application():
    app = FastAPI()
    app.include_router(user.router, prefix = "/api/users")
    app.include_router(activity.router, prefix = "/api/activities")
    app.include_router(convertion.router, prefix = "/api/convertions")
    app.include_router(dilution.router, prefix = "/api/dilutions")
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
def user_created(register_payload, db_session: Session):
    insert = db_session.execute(text(f'''INSERT INTO public.users
                        ("name", email, "password", created_at, updated_at)
                        VALUES('{register_payload['name']}', '{register_payload['email']}', '{hash_password(register_payload['password'])}', now(), now()) RETURNING id;'''))
    user_id = insert.fetchone()[0]
    yield user_id

@pytest.fixture(scope="function")
def register_payload():
    yield {
            "name": "John",
            "email": "john@mail.com",
            "password": "secret_password",
            "passwordConfirm": "secret_password"
            }
    

@pytest.fixture(scope="function")
def normal_user_token_headers(client: TestClient, db_session: Session):
    return  authentication_token_from_email(
        client=client, email=settings.TEST_USER_EMAIL, db=db_session
    )

@pytest.fixture(scope="function")
def activity_created(db_session):
    insert = db_session.execute(text(f'''INSERT INTO public.activities
                                    (user_id, title, activity, created_at)
                                    VALUES(1, 'test activity', 'this is a test activity \n by john', '2023-11-30') RETURNING id;'''))
    activity_id = insert.fetchone()[0]
    yield activity_id