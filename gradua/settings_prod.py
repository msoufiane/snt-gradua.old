from gradua.settings_common import *
import dj_database_url
import os


ALLOWED_HOSTS = ['gradua.sentad.com']
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
DEBUG = True

INSTALLED_APPS = [
    'django.contrib.contenttypes',
    'django.contrib.staticfiles',

    'corsheaders',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]


DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}
DATABASES['default'].update(dj_database_url.config(conn_max_age=500))

CORS_ORIGIN_WHITELIST = (
    'google.com',
    'hostname.example.com',
    'localhost:8000',
    '127.0.0.1:9000'
)

STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
