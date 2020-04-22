from django.shortcuts import render, get_object_or_404
import pandas as pd
import numpy as np
from django.http import HttpResponse
import json


def home(request):
    return render(request, 'base/index.html', {})


def welcome(request):
    return render(request, 'base/logIn/welcome.html', {})


def upload(request):
    return render(request, 'base/uploadData/uploadData.html', {})


def tech(request):
    return render(request, 'base/tech/techPanel.html', {})


def test(request):
    return render(request, 'base/test.html', {})


def submit(request):
    info = request.POST['info']

    df = pd.read_excel(
        'reports/Vivacom - Data Protector/Report/Vivacom Data Protector Deployment Table.xlsx')

    df = df[1:]  # take the data less the header row
    new_header = df.iloc[0]  # grab the first row for the header
    df.columns = new_header
    df = df[1:]
    df = pd.DataFrame(df)
    df = df.reset_index(drop=True)
    df = df.rename(columns={np.nan: 'values'})
    x = df['DATA PROTECTOR'].isnull().idxmax()

    summ = df[:x]
    summ = summ[summ['DATA PROTECTOR'].notnull()]
    prod = summ[summ['Production'] != 0].drop(
        ['values', 'Non-production'], axis=1)
    nonp = summ[summ['Non-production'] !=
                0].drop(['values', 'Production'], axis=1)

    prod['Licenses'] = prod['DATA PROTECTOR']
    prod = prod.drop('DATA PROTECTOR', axis=1)

    nonp['Licenses'] = nonp['DATA PROTECTOR']

    nonp = nonp.drop('DATA PROTECTOR', axis=1)

    prod = prod.to_json()
    return HttpResponse(prod)
