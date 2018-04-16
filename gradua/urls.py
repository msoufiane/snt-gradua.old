from django.views.generic import TemplateView
from django.conf.urls import include, url
from django.conf import settings

from graphene_django.views import GraphQLView

urlpatterns = [
    url(r'^graphql', GraphQLView.as_view(graphiql=True)),
    url(r'^', TemplateView.as_view(template_name="index.html")),
]

if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
        url(r'^__debug__/', include(debug_toolbar.urls)),
    ] + urlpatterns
