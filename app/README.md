#M101JS Homework

https://university.mongodb.com/courses/M101JS/about

In the course, you will build an ecommerce site, backed by MongoDB.


Instructions for build and run Docker Container:
```bash
docker build -t m101js .
docker run -p 8000:8000 --name m101app --mount type=bind,src="$(pwd)",dst=/app m101js
```

