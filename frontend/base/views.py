from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
import json
from base.scrpits.dp import dpsum
from base.scrpits.dpw import dpword
from django.http import JsonResponse


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
    return JsonResponse(response, safe=False)


def dpw(request):
    response = dpword(request)
    return JsonResponse(response, safe=False)


def reportUpload(request):
    return render(request, 'base/tech/reportUpload.html', {})
