import graphene

from graphene_django.types import DjangoObjectType
from django.contrib.auth.models import Permission
# from .models import Family, Location, Product, Transaction


class PermissionType(DjangoObjectType):
    class Meta:
        model = Permission


class Query(graphene.AbstractType):
    all_permissions = graphene.List(PermissionType)

    def resolve_all_permissions(self, args, context, info):
        return Permission.objects.all()
