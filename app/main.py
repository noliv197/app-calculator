from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config import settings
from app.api.routers import convertion, user, activity, dilution

app = FastAPI()

origins = [
    settings.CLIENT_ORIGIN,
    '*'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(user.router, tags=['Users'], prefix='/api/users')
app.include_router(activity.router, tags=['Activities'], prefix='/api/activities')
app.include_router(convertion.router, tags=['Calculations'], prefix='/api/convertions')
app.include_router(dilution.router, tags=['Calculations'], prefix='/api/dilutions')


@app.get('/api/healthchecker')
def root():
    return {'message': 'Hello World'}

