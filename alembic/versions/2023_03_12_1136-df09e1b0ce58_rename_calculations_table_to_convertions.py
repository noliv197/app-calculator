"""Rename calculations table to convertions

Revision ID: df09e1b0ce58
Revises: 3238558141e7
Create Date: 2023-03-12 11:36:59.025056

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'df09e1b0ce58'
down_revision = '3238558141e7'
branch_labels = None
depends_on = None


def upgrade():
    op.rename_table('calculations', 'convertions')


def downgrade():
    op.rename_table('convertions', 'calculations')
