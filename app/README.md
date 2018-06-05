#M101JS
https://university.mongodb.com/courses/M101JS/about

Instructions for build and run:
```bash
docker build -t my101app .
docker run -p 8000:8000 --name m101app --mount type=bind,src="$(pwd)",dst=/app my101app
```

