### Setup

1. Start redis daemon : `sudo systemctl start redis`
  or start redis daemon in docker : `docker run -p 6379:6379 -d redis:5`
2. For now I've added login_required decorator to view but there is no authentication yet soe we are going to need to create a super user : `python manage createsuperuser`
3. Start the server with `python manage.py runserver`
4. Login to your superuser at `localhost:8000/admin`
5. Go to `localhost:8000/chat`
6. If you want to you can create another superuser login to it on another session and chat between the users

## Dependencies (python) (will create script to set up python automatically eventually)
1. django
2. channels
3. channels_redis

## Dependencies
1. redis (our in-memory database for storing messages) (only needed if you dont use docker)
