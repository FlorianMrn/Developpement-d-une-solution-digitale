from django.shortcuts import render
from requests import Request, Session
from requests.exceptions import ConnectionError, Timeout, TooManyRedirects
import json
from django.http import JsonResponse
import os
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, permissions, viewsets
from .serializers import CryptosSerializer
from .models import Cryptos

class CryptosView(viewsets.ModelViewSet):
    serializer_class = CryptosSerializer
    queryset = Cryptos.objects.all()


def obtainCryptosListings(self):

    url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'
    parameters = {
    'start':'1',
    'limit':'5',
    'convert':'EUR'
    }
    headers = {
    'Accepts': 'application/json',
    'X-CMC_PRO_API_KEY': str(os.getenv('API_CRYPTOS_KEY')),
    }

    session = Session()
    session.headers.update(headers)

    try:
        response = session.get(url, params=parameters)
        data = json.loads(response.text)
        return JsonResponse(data)
    except (ConnectionError, Timeout, TooManyRedirects) as e:
        return JsonResponse(e)
