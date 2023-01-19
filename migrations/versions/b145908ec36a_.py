"""empty message

Revision ID: b145908ec36a
Revises: 7bdc79cf5c3c
Create Date: 2023-01-19 19:53:32.301356

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b145908ec36a'
down_revision = '7bdc79cf5c3c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('journal', schema=None) as batch_op:
        batch_op.drop_column('title')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('journal', schema=None) as batch_op:
        batch_op.add_column(sa.Column('title', sa.VARCHAR(length=120), autoincrement=False, nullable=False))

    # ### end Alembic commands ###
