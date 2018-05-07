import graphene
from permissions.schema import Query as permissionsQuery
from roles.schema import Query as rolesQuery


class Query(
    rolesQuery,
    permissionsQuery,
    graphene.ObjectType
):
    pass


schema = graphene.Schema(query=Query)