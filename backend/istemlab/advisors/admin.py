from django.contrib import admin
from .models import Advisor
# Register your models here.
class AdvisorAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'expertise')
    search_fields = ('name', 'email', 'expertise')

admin.site.register(Advisor, AdvisorAdmin)