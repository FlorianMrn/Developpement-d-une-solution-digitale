from django.urls import path
from .views import HistoriqueFollowAddView, HistoriqueFollowSupprView, HistoriqueObtainView

urlpatterns = [
    path('followadd/', HistoriqueFollowAddView.as_view() , name="save_add_historique"),
    path('followsuppr/', HistoriqueFollowSupprView.as_view() , name="save_suppr_historique"),
    path('obtain/', HistoriqueObtainView.as_view() , name="obtain_historique"),
]