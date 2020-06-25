from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import RegisterViewSet

router = DefaultRouter()
router.register("register", RegisterViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
