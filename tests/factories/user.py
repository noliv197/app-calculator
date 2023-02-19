import factory
from app.models import User


class UserFactory(factory.Factory):
    class Meta:
        model = User

    #id = factory.Faker('uuid4')
    name = factory.Faker("name")
    email = factory.Faker("email")
    password = factory.Faker("password")


