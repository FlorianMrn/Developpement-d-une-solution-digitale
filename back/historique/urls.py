from django.urls import path
from .views import HistoriqueFollowAddView, HistoriqueFollowSupprView

urlpatterns = [
    path('followadd/', HistoriqueFollowAddView.as_view() , name="save_historique"),
    path('followsuppr/', HistoriqueFollowSupprView.as_view() , name="save_historique"),
]