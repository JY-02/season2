from typing import Type

from django.db.models import Model
from rest_framework import serializers


def createSerializer(
    model_class: Type[Model], name_suffix="Serializer"
) -> Type[serializers.ModelSerializer]:
    class Meta:
        model = model_class
        fields = "__all__"

    serializer_name = f"{model_class.__name__}{name_suffix}"
    serializer_class = type(serializer_name, (serializers.ModelSerializer,), {"Meta": Meta})

    return serializer_class
