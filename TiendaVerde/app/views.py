# views.py
from django.shortcuts import render
from django.contrib.auth.decorators import login_required

# Vista para la página de inicio
def index(request):
    return render(request, 'index.html')

# Vista para la página de catálogo
def catalogo(request):
    return render(request, 'catalogo.html')

# Vista para la página de solicitud de reciclaje (requiere iniciar sesión)
@login_required
def solicitud_reciclaje(request):
    return render(request, 'solicitud_reciclaje.html')
