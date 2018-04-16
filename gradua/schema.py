import graphene

import roles.schema


class Query(roles.schema.Query, graphene.ObjectType):
    # This class extends all abstract apps level Queries and graphene.ObjectType
    pass


schema = graphene.Schema(query=Query)