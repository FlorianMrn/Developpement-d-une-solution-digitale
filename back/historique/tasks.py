

from authentication.models import CustomUser
query = CustomUser.objects.all()
print(query)