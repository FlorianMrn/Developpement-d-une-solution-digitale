from django.contrib import admin
from .models import Cryptos


# Register your models here.
class CryptosAdmin(admin.ModelAdmin):
    model = Cryptos

admin.site.register(Cryptos, CryptosAdmin)