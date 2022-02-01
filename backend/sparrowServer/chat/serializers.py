from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Message


class MessageSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    sender = serializers.ReadOnlyField(source='owner.username')
    content = serializers.CharField(required=True, allow_blank=False, max_length=256)

    def create(self, validated_data):
        """
        Create and return a new message instance, given the validated data
        """
        return Message.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.content = validated_data.get('content', instance.content)
        return instance


class UserSerializer(serializers.HyperlinkedModelSerializer):
    messages = serializers.PrimaryKeyRelatedField(many=True, queryset=Message.objects.all())

    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']
