from rest_framework import serializers
from .models import Apply
# serializers.py
class ApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Apply
        fields = '__all__'