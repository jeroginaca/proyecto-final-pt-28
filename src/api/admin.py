  
import os
from flask_admin import Admin
from .models import db, User, Calendar, Meditacion, Journal, Objetivos, Audio, Tipo_de_meditacion
from flask_admin.contrib.sqla import ModelView

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='4Geeks Admin', template_mode='bootstrap3')

    class AudioModelView(ModelView):
        column_list = ['id', 'url', 'title', 'meditation_type']

    class JournalModelView(ModelView):
        column_list = ['id', 'user', 'notes', 'color', 'date']

    class ObjetivosModelView(ModelView):
        column_list = ['id', 'user', 'task', 'done', 'date']

    class MeditacionModelView(ModelView):
        column_list = ['id', 'user', 'audio', 'date']

    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    admin.add_view(ModelView(Calendar, db.session))
    admin.add_view(MeditacionModelView(Meditacion, db.session))
    admin.add_view(JournalModelView(Journal, db.session))
    admin.add_view(ObjetivosModelView(Objetivos, db.session))
    admin.add_view(AudioModelView(Audio, db.session))
    admin.add_view(ModelView(Tipo_de_meditacion, db.session))

    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))