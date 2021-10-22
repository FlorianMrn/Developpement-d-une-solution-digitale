from .views import obtainCryptosListings, CryptosView
from django.urls import path

urlpatterns = [
    path('listings/', obtainCryptosListings, name="obtains_cryptos"),
    path('change/', CryptosView.as_view(), name="save_cryptos"),
]