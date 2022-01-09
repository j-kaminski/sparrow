### Setup

1.Start redis daemon : `sudo systemctl start redis`
  or start redis daemon in docker : `docker run -p 6379:6379 -d redis:5`
2.Start the server with `python manage.py runserver`



## Dependencies (python)
1.django
2.channels
3.channels_redis

## Dependencies
1.redis (our in-memory database for storing messages) (only needed if you dont use docker)
