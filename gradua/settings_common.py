import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'DJANGO_SECRET_KEY_NOT_FOUND')


# CORS_ORIGIN_ALLOW_ALL = True
WSGI_APPLICATION = 'gradua.wsgi.application'
ROOT_URLCONF = 'gradua.urls'
LANGUAGE_CODE = 'en-us'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATIC_URL = '/static/'
# Extra places for collectstatic to find static files.
STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'static'),
)
TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True