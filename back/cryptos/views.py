from django.shortcuts import render
from requests import Session
from requests.exceptions import ConnectionError, Timeout, TooManyRedirects
import json
from django.http import JsonResponse
import os
from rest_framework import permissions
from rest_framework.views import APIView
from cryptos.models import Cryptos
from authentication.models import CustomUser
import json


class CryptosView(APIView):

   def put(self, request):

        id = request.data.get('id')
        name = request.data.get('name')
        quantite = request.data.get('quantite')
        prix = request.data.get('prix')
        crypto = Cryptos.objects.filter(portefeuille=id, name=name).first()

        if crypto:
            crypto.quantite += quantite
            crypto.save()
            return JsonResponse('Cryptos ajoutées !', safe=False)
        if not crypto:
            portefeuille = CustomUser.objects.get(id=id)
            crypto = Cryptos(name=name, quantite=quantite, prix=prix, portefeuille=portefeuille)
            crypto.save()
            return JsonResponse('Cryptos ajoutées !', safe=False)

   def delete(self, request):

       id = request.data.get('id')
       name = request.data.get('name')
       quantite = request.data.get('quantite')
       crypto = Cryptos.objects.filter(portefeuille=id, name=name).first()

       if crypto:
           positif = (crypto.quantite - quantite) >= 0
           if positif:
               crypto.quantite -= quantite
               crypto.save()
               return JsonResponse({'message': 'Cryptos supprimées', 'follow': True}, safe=False)
           return JsonResponse({ 'message': 'Pas de assez de cryptos dans le portefeuille.', 'follow': False}, safe=False)
       if not crypto:
           return JsonResponse({'message': 'Aucune crypto de ce type dans le portefeuille.', 'follow': False}, safe=False)


def obtainCryptosListings(self):
    permission_classes = [permissions.AllowAny]
    authentication_classes = []

    url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'
    parameters = {
    'start':'1',
    'limit':'5',
    'convert':'EUR'
    }
    headers = {
    'Accepts': 'application/json',
    'X-CMC_PRO_API_KEY': str('1494f20f-9d06-4974-a2b8-f3618a8c6a51'),
    }

    session = Session()
    session.headers.update(headers)

    try:
        response = session.get(url, params=parameters)
        data = json.loads(response.text)
        return JsonResponse(data, safe=False)
    except (ConnectionError, Timeout, TooManyRedirects) as e:
        return JsonResponse(e, safe=False)
