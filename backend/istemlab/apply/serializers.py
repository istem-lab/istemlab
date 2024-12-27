from rest_framework import serializers, viewsets, routers

from apply.models import Apply
# serializers.py
class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Apply
        fields = '__all__'