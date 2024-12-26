from rest_framework.routers import DefaultRouter
from contact.views import ContactViewSet


router = DefaultRouter()
router.register(r'', ContactViewSet)

urlpatterns = router.urls