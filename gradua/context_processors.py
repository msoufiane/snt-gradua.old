import os


def global_settings(request):
    return {
        'DEV_MODE': os.environ.get('DJANGO_ENV', 'dev') == 'dev'
    }
