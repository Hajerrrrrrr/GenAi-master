from django.urls import path
from . import views

urlpatterns = [
    path('', views.chat_view, name='chatbot'),  # Associe la vue chat_view à la racine de l'URL de l'application
]
