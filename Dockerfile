FROM node:16-alpine

WORKDIR /opt/web

COPY . /opt/web

RUN npm install && \
    npm install nodemon -g

CMD [ "nodemon",  "src/app/server.js"]