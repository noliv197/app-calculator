# Dockerfile

# pull the official docker image
FROM python:3.10.6

# set work directory
WORKDIR /app

# set env variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies
COPY requirements.txt .

RUN apt update && apt install libpq-dev python3-dev postgresql postgresql-contrib -y 

RUN pip install -r requirements.txt

RUN useradd -u 1000 calculator

# copy project
COPY . .

RUN rm -rf easylab

USER calculator