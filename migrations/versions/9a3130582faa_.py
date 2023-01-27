"""empty message

Revision ID: 9a3130582faa
Revises: 1d3a0c965479
Create Date: 2023-01-27 18:34:05.721649

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9a3130582faa'
down_revision = '1d3a0c965479'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('journal', schema=None) as batch_op:
        batch_op.alter_column('notes',
               existing_type=sa.VARCHAR(length=2000),
               type_=sa.String(length=5000),
               existing_nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('journal', schema=None) as batch_op:
        batch_op.alter_column('notes',
               existing_type=sa.String(length=5000),
               type_=sa.VARCHAR(length=2000),
               existing_nullable=False)

    # ### end Alembic commands ###