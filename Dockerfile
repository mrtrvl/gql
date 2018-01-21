FROM node:latest
RUN MKDIR /graph/app
WORKDIR /graph/app
RUN npm install nodemon -g
COPY package.json /graph/app
COPY package-lock.json /graph/app
RUN npm install
COPY . /graph/app
CMD ["nodemon", "app.js"]
EXPOSE 4000
VOLUME /graph/app
