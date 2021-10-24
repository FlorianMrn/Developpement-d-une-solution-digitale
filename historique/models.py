from django.db import models
from authentication.models import CustomUser
from datetime import datetime, time

# Create your models here.
class Historique(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    value = models.FloatField(blank=False, default='')
    portefeuille = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.date)

    def item_pubdate(self, item):
        return datetime.combine(item.posted, time())

