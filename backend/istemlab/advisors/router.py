from rest_framework.routers import DefaultRouter
from .views import AdvisorViewSet

router = DefaultRouter()
router.register(r'', AdvisorViewSet)

urlpatterns = router.urls