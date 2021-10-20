from django.contrib import admin
from .models import Historique


# Register your models here.
class CustomHistoriqueAdmin(admin.ModelAdmin):
    model = Historique


admin.site.register(Historique, CustomHistoriqueAdmin)