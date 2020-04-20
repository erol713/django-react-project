from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('welcome', views.welcome, name='welcome'),
    path('upload', views.upload, name='upload'),
    path('tech', views.tech, name='tech'),

]
