from rest_framework import viewsets
from contact.models import Contact
from contact.serializers import ContactSerializer

# Create your views here.
class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    http_method_names = ['post']