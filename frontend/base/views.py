from django.shortcuts import render, get_object_or_404


def home(request):
    return render(request, 'base/index.html', {})


def welcome(request):
    return render(request, 'base/logIn/welcome.html', {})


def upload(request):
    return render(request, 'base/uploadData/uploadData.html', {})
