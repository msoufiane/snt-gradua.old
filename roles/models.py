from django.contrib.contenttypes.models import ContentType
from django.contrib.auth.models import Permission
from django.db import models


class Roles(models.Model):
    name = models.CharField(max_length=40, blank=True, null=True)
    description = models.CharField(max_length=40, blank=True, null=True)
    permissions = models.ManyToManyField(Permission)
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
