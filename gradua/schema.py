import graphene
from permissions.schema import Query as permissionsQuery
from roles.schema import Query as rolesQuery
from authentication.schema import Query as usersQuey


class Query(
    rolesQuery,
    permissionsQuery,
    usersQuey,
    graphene.ObjectType
):
    pass


schema = graphene.Schema(query=Query)