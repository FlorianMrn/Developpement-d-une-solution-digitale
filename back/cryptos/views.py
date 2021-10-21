from django.shortcuts import render
from requests import Session
from requests.exceptions import ConnectionError, Timeout, TooManyRedirects
import json
from django.http import JsonResponse
import os
from rest_framework import viewsets
from .serializers import CryptosSerializer
from rest_framework.views import APIView
from cryptos.models import Cryptos
from authentication.models import CustomUser
from rest_framework import status
from authentication.serializers import CustomUserSerializer
from rest_framework.response import Response
import json


class CryptosView(APIView):

   def put(self, request):

        id = request.data.get('id')
        name = request.data.get('name')
        quantite = request.data.get('quantite')
        crypto = Cryptos.objects.filter(portefeuille=id, name=name).first()

        if crypto:
            crypto.quantite += quantite
            crypto.save()
            return JsonResponse('Cryptos ajoutées', safe=False)
        if not crypto:
            portefeuille = CustomUser.objects.get(id=id)
            crypto = Cryptos(name=name, quantite=quantite, portefeuille=portefeuille)
            crypto.save()
            return JsonResponse('Cryptos ajoutées', safe=False)

   def delete(self, request):

       id = request.data.get('id')
       name = request.data.get('name')
       quantite = request.data.get('quantite')
       crypto = Cryptos.objects.filter(portefeuille=id, name=name).first()

       if crypto:
           positif = crypto.quantite - quantite
           if positif >= 0:
               crypto.quantite -= quantite
               crypto.save()
               return JsonResponse('Cryptos supprimées', safe=False)
           return JsonResponse('Pas de assez de cryptos dans le portefeuille', safe=False)
       if not crypto:
           return JsonResponse('Aucune crypto de ce type dans le portefeuille', safe=False)


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
