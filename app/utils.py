from passlib.context import CryptContext
import random
import string    
from random_word import RandomWords

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


def hash_password(password: str):
    return pwd_context.hash(password)


def verify_password(password: str, hashed_password: str):
    return pwd_context.verify(password, hashed_password)

def generate_password():
    return ''.join(random.choice(string.ascii_uppercase + string.digits) for _ in range(12))

def generate_recovery_words():
    r = RandomWords()
    reset_words = ', '.join([r.get_random_word()for _ in range(5)])
    return reset_words
