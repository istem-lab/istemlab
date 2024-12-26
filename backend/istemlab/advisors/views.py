from django.shortcuts import render
from rest_framework import viewsets
from .serializers import AdvisorSerializer
from .models import Advisor
# Create your views here.
class AdvisorViewSet(viewsets.ModelViewSet):
    queryset = Advisor.objects.all()
    serializer_class = AdvisorSerializer
    http_method_names = ['post']