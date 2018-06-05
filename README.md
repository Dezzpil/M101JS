#M101JS Homework

https://university.mongodb.com/courses/M101JS/about

In the course, you will build an ecommerce site, backed by MongoDB.

Instructions for up docker-compose from https://github.com/docker/compose/issues/1049#issuecomment-212238105:
```bash
docker-compose rm --all &&
docker-compose pull &&
docker-compose build --no-cache &&
docker-compose up -d --force-recreate
```

Then check:
```
http://127.0.0.1:8000/ -> Successfully connected to server
http://127.0.0.1:27017/ -> It looks like you are trying to access MongoDB over HTTP on the native driver port.
```

Instructions for build and run Docker Container:
```bash
cd app
docker build -t m101js .
docker run -p 8000:8000 --name m101app --mount type=bind,src="$(pwd)",dst=/app m101js
```

