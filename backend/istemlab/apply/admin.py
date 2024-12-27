from django.contrib import admin

from apply.models import Apply

# Register your models here.
class ApplyAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'role', 'level', 'resume')
    search_fields = ('name', 'email')
    list_filter = ('role', 'level')

admin.site.register(Apply, ApplyAdmin)
