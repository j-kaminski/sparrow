# chat/urls.py
from django.urls import path

from .views import index, room, UserList, UserDetail



app_name = 'chat'

urlpatterns = [
    path('', index, name='index'),
    path('<str:room_name>/', room, name='room'),
    path('users/', UserList.as_view()),
    path('users/<int:pk>/', UserDetail.as_view()),
]
