from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('welcome', views.welcome, name='welcome'),
    path('upload', views.upload, name='upload'),
    path('uploadDownload', views.uploadDownload, name='uploadDownload'),
    path('tech', views.tech, name='tech'),
    path('test', views.test, name='test'),
    path('reportUpload', views.reportUpload, name='reportUpload'),

    path('dp', views.dp),
    path('dpw', views.dpw)



]
