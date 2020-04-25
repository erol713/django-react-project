from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
import json
from base.scrpits.dp import dpsum


def home(request):
    return render(request, 'base/index.html', {})


def welcome(request):
    return render(request, 'base/logIn/welcome.html', {})


def upload(request):
    return render(request, 'base/uploadData/uploadData.html', {})


def uploadDownload(request):
    return render(request, 'base/uploadData/uploadDownload.html', {})


def tech(request):
    return render(request, 'base/tech/techPanel.html', {})


def test(request):
    return render(request, 'base/test.html', {})


def dp(request):
    response = dpsum(request)
    return HttpResponse({response})


def reportUpload(request):
    return render(request, 'base/tech/reportUpload.html', {})
