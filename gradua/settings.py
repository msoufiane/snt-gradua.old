import os
from datetime import timedelta

ENVIRONMENT = os.environ.get('DJANGO_ENV', 'dev')
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', 'DJANGO_SECRET_KEY_NOT_FOUND')
ALLOWED_HOSTS = ['*'] if ENVIRONMENT == 'dev' else ['gradua.sentad.com']
# DEBUG = ENVIRONMENT == 'dev'
DEBUG = True
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))

STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATIC_URL = '/static/'
STATICFILES_DIRS = [os.path.join(BASE_DIR, "assets"), ]

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, "frontend/public"), ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'gradua.context_processors.global_settings',
                'django.contrib.messages.context_processors.messages',
            ],
            'debug': DEBUG,
        },
    },
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

INSTALLED_APPS = [
    'django.contrib.contenttypes',
    'django.contrib.staticfiles',
    'django.contrib.messages',
    'django.contrib.sessions',
    'django.contrib.auth',

    'django_countries',
    'graphene_django',
    'rest_framework',
    'webpack_loader',
    'corsheaders',
    'guardian',
    'taggit',
    'knox',

    'authentication',
    'permissions',
    'roles',
]

AUTHENTICATION_BACKENDS = (
    'django.contrib.auth.backends.ModelBackend',
    'guardian.backends.ObjectPermissionBackend',
)

AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator', },
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator', },
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator', },
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator', },
]
AUTH_USER_MODEL = 'authentication.Account'


REST_FRAMEWORK = {
    'UNAUTHENTICATED_USER': None,
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
    'PAGE_SIZE': 10,
    'page_size_query_param': 'page_size',
    'max_page_size': 10000,
    'DEFAULT_RENDERER_CLASSES': (
        'rest_framework.renderers.JSONRenderer',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES': ('knox.auth.TokenAuthentication',),
    'DEFAULT_FILTER_BACKENDS': ('django_filters.rest_framework.DjangoFilterBackend',)
}

REST_KNOX = {
  'SECURE_HASH_ALGORITHM': 'cryptography.hazmat.primitives.hashes.SHA512',
  'AUTH_TOKEN_CHARACTER_LENGTH': 64,
  'TOKEN_TTL': timedelta(hours=10),
  'USER_SERIALIZER': 'knox.serializers.UserSerializer',
}

WEBPACK_LOADER = {
    'DEFAULT': {
            'BUNDLE_DIR_NAME': '/',
            'STATS_FILE': os.path.join(BASE_DIR, 'webpack-stats.%s.json' % ENVIRONMENT),
        }
}

IPWARE_META_PRECEDENCE_ORDER = (
    'HTTP_X_FORWARDED_FOR', 'X_FORWARDED_FOR',  # <client>, <proxy1>, <proxy2
    'HTTP_CLIENT_IP',
    'HTTP_X_REAL_IP',
    'HTTP_X_FORWARDED',
    'HTTP_X_CLUSTER_CLIENT_IP',
    'HTTP_FORWARDED_FOR',
    'HTTP_FORWARDED',
    'HTTP_VIA',
    'REMOTE_ADDR',
)

IPWARE_PRIVATE_IP_PREFIX = (
       '0.',  # messages to software
       '10.',  # class A private block
       '100.64.',  '100.65.',  '100.66.',  '100.67.',  '100.68.',  '100.69.',
       '100.70.',  '100.71.',  '100.72.',  '100.73.',  '100.74.',  '100.75.',
       '100.76.',  '100.77.',  '100.78.',  '100.79.',  '100.80.',  '100.81.',
       '100.82.',  '100.83.',  '100.84.',  '100.85.',  '100.86.',  '100.87.',
       '100.88.',  '100.89.',  '100.90.',  '100.91.',  '100.92.',  '100.93.',
       '100.94.',  '100.95.',  '100.96.',  '100.97.',  '100.98.',  '100.99.',
       '100.100.', '100.101.', '100.102.', '100.103.', '100.104.', '100.105.',
       '100.106.', '100.107.', '100.108.', '100.109.', '100.110.', '100.111.',
       '100.112.', '100.113.', '100.114.', '100.115.', '100.116.', '100.117.',
       '100.118.', '100.119.', '100.120.', '100.121.', '100.122.', '100.123.',
       '100.124.', '100.125.', '100.126.', '100.127.',  # carrier-grade NAT
       '169.254.',  # link-local block
       '172.16.', '172.17.', '172.18.', '172.19.',
       '172.20.', '172.21.', '172.22.', '172.23.',
       '172.24.', '172.25.', '172.26.', '172.27.',
       '172.28.', '172.29.', '172.30.', '172.31.',  # class B private blocks
       '192.0.0.',  # reserved for IANA special purpose address registry
       '192.0.2.',  # reserved for documentation and example code
       '192.168.',  # class C private block
       '198.18.', '198.19.',  # reserved for inter-network communications between two separate subnets
       '198.51.100.',  # reserved for documentation and example code
       '203.0.113.',  # reserved for documentation and example code
       '255.255.255.',  # reserved for broadcast
   ) + (
       '::',  # Unspecified address
       '::ffff:', '2001:10:', '2001:20:'  # messages to softwarewr
       '2001:db8:',  # reserved for documentation and example code
       'fc00:',  # IPv6 private block
       'fe80:',  # link-local unicast
       'ff00:',  # IPv6 multicast
   )

GRAPHENE = {
    'SCHEMA': 'gradua.schema.schema'
}
# CORS_ORIGIN_ALLOW_ALL = True
WSGI_APPLICATION = 'gradua.wsgi.application'
ROOT_URLCONF = 'gradua.urls'
LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'
USE_I18N = True
USE_L10N = True
USE_TZ = True