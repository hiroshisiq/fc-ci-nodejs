FROM node:16-alpine

WORKDIR /opt/app

COPY ./app /opt/app/

RUN npm install && \
    npm install nodemon -g

CMD [ "nodemon",  "app.js"]