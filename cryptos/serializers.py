from rest_framework import serializers
from .models import Cryptos


class CryptosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cryptos
        fields = '__all__'