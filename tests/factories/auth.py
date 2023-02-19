import factory
from app.models import User


class UserFactory(factory.Factory):
    class Meta:
        model = User

    id = factory.Faker('uuid4')
    username = factory.Faker("user_name")
    email = factory.Faker("email")
    password = factory.Faker("password")


class LoginPayloadFactory(factory.Factory):
    class Meta:
        model = dict

    username = factory.Faker("user_name")
    password = factory.Faker("password")
