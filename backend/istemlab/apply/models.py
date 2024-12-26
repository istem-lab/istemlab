from django.db import models
from django.core.validators import FileExtensionValidator
# Create your models here.
class Apply(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=50)
    level = models.CharField(max_length=50)
    resume = models.FileField(upload_to='resumes/', validators=[
        FileExtensionValidator(allowed_extensions=['pdf'])
    ])
    message = models.TextField()

    def __str__(self):
        return self.name
    
    
