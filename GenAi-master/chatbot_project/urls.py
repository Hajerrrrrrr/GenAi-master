from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),  # Page d'administration
    path('chatbot/', include('chatbot.urls')),  # Cette ligne inclut les URLs de l'app chatbot
]
