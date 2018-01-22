FROM node:latest

RUN mkdir /app

WORKDIR /app

RUN npm install -g nodemon

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install

EXPOSE 4000

VOLUME /app
