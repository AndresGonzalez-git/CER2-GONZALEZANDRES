# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),  # Ruta a la página principal
    path('catalogo/', views.catalogo, name='catalogo'),  # Ruta al catálogo
    path('solicitud_reciclaje/', views.solicitud_reciclaje, name='solicitud_reciclaje'),  # Ruta a solicitud de reciclaje
]
