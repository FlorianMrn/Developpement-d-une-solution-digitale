from django.contrib.auth.models import AbstractUser
from django.db import models
import uuid
from django.utils.translation import ugettext_lazy as _
from .managers import CustomUserManager

# Create your models here.
class CustomUser(AbstractUser):
    username = None
    email = models.EmailField(_('email address'), unique=True)
    portefeuille = models.UUIDField(editable=False, default=uuid.uuid4)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return self.email

    class Meta:
        db_table = 'authentication_customuser'