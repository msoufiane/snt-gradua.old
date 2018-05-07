from django.contrib.contenttypes.models import ContentType
from graphene_django.types import DjangoObjectType
from django.contrib.auth.models import Permission
import graphene


class PermissionType(DjangoObjectType):
    class Meta:
        model = Permission


class PermissionsType(DjangoObjectType):
    class Meta:
        model = ContentType


class Query(object):
    all_permissions = graphene.List(PermissionsType)
    # all_permissions = graphene.List(PermissionType)

    def resolve_all_permissions(self, args):
        return ContentType.objects.filter(
            model__in=[
                'roles',
                'permissions',
                'account',
            ]
        )

    #def resolve_all_permissions(self, args):
    #    return Permission.objects.all()
