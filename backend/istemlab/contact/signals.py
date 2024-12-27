from django.dispatch import receiver

from contact.admin import Contact
from django.db.models.signals import post_save
from django.core.mail import send_mail
from decouple import config
@receiver(post_save, sender=Contact)
def contact_created(sender, instance, created, **kwargs):
    if created:
        print(f"New contact message received: {instance}")
        # Send email to admin
        send_mail(
            subject=f"New Contact Message: {instance.subject}",
            message=(
                f"Name: {instance.name}\n"
                f"Email: {instance.email}\n"
                f"Subject: {instance.subject}\n"
                f"Message: {instance.message}"
            ),
            from_email=instance.email,
            recipient_list=[config('EMAIL_HOST_USER')],
        )
        # Send confirmation email to the sender
        send_mail(
            subject="Your message has been received",
            message=(
                f"Hello {instance.name},\n\n"
                f"Thank you for reaching out to us with the subject '{instance.subject}'.\n"
                "We have received your message and will respond as soon as possible.\n\n"
                "Best regards,\nThe Team"
            ),
            from_email=config('EMAIL_HOST_USER'),
            recipient_list=[instance.email],
        )