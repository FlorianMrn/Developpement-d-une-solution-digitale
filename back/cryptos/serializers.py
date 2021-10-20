from rest_framework import serializers
from .models import Cryptos


class CryptosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cryptos
        fields = ('name', 'quantite', 'portefeuille')