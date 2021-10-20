from authentication.models import CustomUser
from cryptos.models import Cryptos

def save_historique_every_day():
    import pdb;
    pdb.set_trace()
    all_user = CustomUser.objects.all()
    all_cryptos = Cryptos.objects.all()
    print(all_cryptos)
