"""Add reset_words colum to users

Revision ID: c3db53623010
Revises: d02f7c29dc98
Create Date: 2023-05-01 12:22:09.717051

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c3db53623010'
down_revision = 'd02f7c29dc98'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('reset_words', sa.String(), nullable=False))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'reset_words')
    # ### end Alembic commands ###
