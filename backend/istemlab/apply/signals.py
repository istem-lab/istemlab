
from email.message import EmailMessage
from django.core.mail import send_mail
from django.db.models.signals import post_save
from django.dispatch import receiver
from apply.models import Apply
from decouple import config

# signals.py
@receiver(post_save, sender=Apply)
def application_created(sender, instance, created, **kwargs):
    try:
        if created:
            print(f"New application created: {instance}")
            # Send email to admin with the resume attached
            email = EmailMessage(
                subject="New Application Received",
                body=(
                    f"A new application has been submitted.\n\n"
                    f"Name: {instance.name}\n"
                    f"Email: {instance.email}\n"
                    f"Role: {instance.role}\n"
                    f"Level: {instance.level}\n"
                    f"Message: {instance.message}"
                ),
                from_email=config('DEFAULT_FROM_EMAIL'),
                to=[config('EMAIL_HOST_USER')],
            )
            if instance.resume:
                email.attach_file(instance.resume.path)
            email.send()

            # Send email to applicant
            send_mail(
                subject="Application Received",
                message=(
                    f"Thank you for your application, {instance.name}.\n\n"
                    f"We have received your application for the role of {instance.role} at the {instance.level} level. "
                    "We will review your application and get back to you soon."
                ),
                from_email=config('DEFAULT_FROM_EMAIL'),
                recipient_list=[instance.email],
            )
    except:
        print("exception occured !") 