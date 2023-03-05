# pull the official docker image
FROM node:16.15.0 

# set work directory
WORKDIR /app/front

# copy project
COPY . .

# install dependencies
RUN npm install

RUN useradd -u 1001 calculator
USER calculator