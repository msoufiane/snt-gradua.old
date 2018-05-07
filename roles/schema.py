from graphene_django.types import DjangoObjectType
from .models import Roles
import graphene


class RolesType(DjangoObjectType):
    class Meta:
        model = Roles


class Query(object):
    all_roles = graphene.List(RolesType)

    def resolve_all_roles(self, args):
        return Roles.objects.all()
