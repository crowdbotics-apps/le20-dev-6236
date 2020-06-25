from rest_framework import authentication
from users.models import Register
from .serializers import RegisterSerializer
from rest_framework import viewsets


class RegisterViewSet(viewsets.ModelViewSet):
    serializer_class = RegisterSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Register.objects.all()
