from django.contrib.auth.models import AbstractUser
from django.db import models
import uuid
from django.utils.translation import ugettext_lazy as _
from .managers import CustomUserManager

# Create your models here.
class CustomUser(AbstractUser):
    username = None
    email = models.EmailField(_('email address'), unique=True)
    portefeuille = models.CharField(max_length=12, blank=False, unique=True, default=uuid.uuid4)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return self.email