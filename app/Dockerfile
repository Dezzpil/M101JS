FROM node:8.11.2-alpine

ADD . /app
WORKDIR /app

RUN npm install -g supervisor
RUN npm install

EXPOSE 8000

CMD ["supervisor", "--watch", ".", "--restart-verbose", "app.js"]
#CMD sh