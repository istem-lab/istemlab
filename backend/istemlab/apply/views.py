from django.shortcuts import render
from rest_framework import serializers, viewsets, routers
from rest_framework.views import APIView
from apply.models import Apply
from apply.serializers import ApplicationSerializer
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework import status
# Create your views here.
class ApplicationViewSet(viewsets.ModelViewSet):
    queryset = Apply.objects.all()
    serializer_class = ApplicationSerializer
    http_method_names = ['post']