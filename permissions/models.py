from django.contrib.auth.models import Permission
from django.db import models


class Permissions(models.Model):
    name = models.CharField(max_length=40, blank=True, null=True)

    def __str__(self):
        return ''
