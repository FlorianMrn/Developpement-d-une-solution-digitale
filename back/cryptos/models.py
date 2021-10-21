from django.db import models
from authentication.models import CustomUser

# Create your models here.
class Cryptos(models.Model):
    name = models.CharField(max_length=170, blank=False, default='')
    quantite = models.FloatField(blank=False, default='')
    portefeuille = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'cryptos_cryptos'
