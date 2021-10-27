from .models import Historique
from django.http import JsonResponse
from rest_framework.views import APIView
from cryptos.models import Cryptos
from authentication.models import CustomUser
from django.core import serializers
from django.http import HttpResponse


# Create your views here.
class HistoriqueFollowAddView(APIView):
    def post(self, request):
        id = request.data.get('id')
        name = request.data.get('name')
        quantite = request.data.get('quantite')
        prix = request.data.get('prix')
        portefeuille = CustomUser.objects.get(id=id)
        last_histo = Historique.objects.filter(portefeuille=id).order_by('-date').first()

        if last_histo:
            value = (quantite * prix) + last_histo.value
            historique = Historique(value=value, portefeuille=portefeuille)
            historique.save()
            return JsonResponse('Historique ajouté !', safe=False)
        if not last_histo:
            value = quantite * prix
            historique = Historique(value=value, portefeuille=portefeuille)
            historique.save()
            return JsonResponse('Historique ajouté !', safe=False)

class HistoriqueFollowSupprView(APIView):
    def post(self, request):

        id = request.data.get('id')
        quantite = request.data.get('quantite')
        name = request.data.get('name')
        crypto = Cryptos.objects.filter(portefeuille=id, name=name).first()
        prix = crypto.prix
        portefeuille = CustomUser.objects.get(id=id)

        last_histo = Historique.objects.filter(portefeuille=id).order_by('-date').first()
        value = last_histo.value - (quantite * prix)
        historique = Historique(value=value, portefeuille=portefeuille)
        historique.save()
        return JsonResponse('Historique ajouté !', safe=False)

class HistoriqueObtainView(APIView):
    def post(self, request):
        id = request.data.get('id')
        historique = Historique.objects.filter(portefeuille=id).order_by('-date').values()
        return JsonResponse({"data" : list(historique)}, safe=False)

