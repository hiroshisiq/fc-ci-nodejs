FROM node:16-alpine

WORKDIR /opt/src

COPY . /opt/src/

RUN npm install && \
    npm install nodemon -g

CMD [ "nodemon",  "app/server.js"]