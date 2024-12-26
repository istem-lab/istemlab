from django.contrib import admin
from django.db import models

from contact.models import Contact
# Register your models here.
# admin.py
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'subject')
    search_fields = ('name', 'email', 'subject')

admin.site.register(Contact, ContactAdmin)