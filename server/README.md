## Sparrow backend

## Requirements

-   Python

-   Redis

-   docker-compose if using with docker

### Setup

1. Start redis daemon : `sudo systemctl start redis`
   or start redis daemon in docker : `docker run -p 6379:6379 -d redis:5`
2. For now I've added login_required decorator to view but there is no authentication yet soe we are going to need to create a super user : `python manage createsuperuser`
3. Start the server with `python manage.py runserver`
4. Login to your superuser at `localhost:8000/admin`
5. Go to `localhost:8000/chat`
6. If you want to you can create another superuser login to it on another session and chat between the users

## Virtualenv

In the server directory, run:

    ./createvenv_dev.sh
    source .venv/bin/activate

## Dependencies

1. redis (our in-memory database for storing messages) (only needed if you dont use docker)

## NPM dependencies
1. Install Parcel: `npm install -g parcel-bundler`
2. Run project with parcel: `parcel index.html`
3. Install babel dependencies: `npm install --save-dev @babel/core @babel/plugin-proposal-class-properties @babel/preset-react`
4. Install react: `npm install --save react react-dom`