from django.db import models


# Create your models here.
class Roles(models.Model):
    name = models.CharField(max_length=30)
    website = models.URLField()

    def __str__(self):
        return self.name
