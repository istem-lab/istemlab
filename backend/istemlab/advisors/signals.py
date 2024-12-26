from django.core.mail import send_mail
from django.dispatch import receiver
from django.db.models.signals import post_save
from .models import Advisor
from decouple import config

@receiver(post_save, sender=Advisor)
def advisor_created(sender, instance, created, **kwargs):
    try:
        if created:
            print(f"New advisor message received: {instance}")
            # Send email to admin
            send_mail(
                subject=f"New Advisor Message: Expertise in {instance.expertise}",
                message=(
                    f"Name: {instance.name}\n"
                    f"Email: {instance.email}\n"
                    f"Expertise: {instance.expertise}\n"
                    f"Message: {instance.message}"
                ),
                from_email=config('EMAIL_HOST_USER'),
                recipient_list=[config('EMAIL_HOST_USER')],
            )
            # Send confirmation email to the sender
            send_mail(
                subject="Your message has been received",
                message=(
                    f"Hello {instance.name},\n\n"
                    f"Thank you for reaching out to us as an advisor with expertise in '{instance.expertise}'.\n"
                    "We have received your message and will respond as soon as possible.\n\n"
                    "Best regards,\nIstemlab Team"
                ),
                from_email=config('EMAIL_HOST_USER'),
                recipient_list=[instance.email],
            )
    except Exception as e:
        print(e)