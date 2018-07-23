from graphene_django.types import DjangoObjectType
from authentication.models import Account
from graphene import relay, Field


class UserType(DjangoObjectType):
    class Meta:
        model = Account
        only_fields = ['id', 'username', 'first_name', 'last_name', 'email']



class Query(object):
    #all_users = graphene.List(UserType)
    user = Field(UserType)

    #def resolve_all_users(self, args):
    #    return Account.objects.all()

    def resolve_user(self, args):
        return Account.objects.get(username=args.context.user.username)
