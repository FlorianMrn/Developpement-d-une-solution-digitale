from django.shortcuts import render
from .serializers import HistoriqueSerializer
from .models import Historique
from rest_framework import viewsets


# Create your views here.
class HistoriqueView(viewsets.ModelViewSet):
    serializer_class = HistoriqueSerializer
    queryset = Historique.objects.all()


