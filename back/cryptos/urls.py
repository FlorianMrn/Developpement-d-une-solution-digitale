from .views import obtainCryptosListings
from django.urls import path

urlpatterns = [
    path('listings/', obtainCryptosListings, name="obtains_cryptos"),
]