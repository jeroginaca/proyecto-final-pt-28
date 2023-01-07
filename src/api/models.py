from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    avatar = db.Column(db.String(120))
    email_address = db.Column(db.String(120), unique=True, nullable=False)
    name = db.Column(db.String(120), nullable=False)
    last_name = db.Column(db.String(120), nullable=False)
    date = db.Column(db.DateTime, nullable=False)
    birth_date = db.Column(db.DateTime, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    
    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return{
            "id": self.id,
            "avatar": self.avatar,
            "email_address": self.email_address,
            "name": self.name,
            "last_name": self.last_name,
            "date": self.date,
            "birth_date": self.birth_date,
            "password": self.password
        }

class Calendar(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    user= db.relationship('User', backref='calendar', lazy=True) 
    feeling = db.Column(db.String(120), nullable=False)
    date = db.Column(db.DateTime, nullable=False)
    
    def serialize(self):
        return{
            "id": self.id,
            "user_id": self.user_id,
            "feeling": self.feeling,
            "date": self.date
        }

class Journal(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    user= db.relationship('User', backref='journal', lazy=True) 
    title = db.Column(db.String(120), nullable=False)
    notes = db.Column(db.String(120), nullable=False)
    color = db.Column(db.String(120), nullable=False)
    date = db.Column(db.DateTime, nullable=False)
    
    def serialize(self):
        return{
            "id": self.id,
            "user_id": self.user_id,
            "title": self.title,
            "notes": self.notes,
            "color": self.color,
            "date": self.date
        }

class Objetivos(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    user= db.relationship('User', backref='objetivos', lazy=True) 
    task = db.Column(db.String(120), nullable=False)
    done = db.Column(db.Boolean, nullable=False)
    date = db.Column(db.DateTime, nullable=False)
    
    def serialize(self):
        return{
            "id": self.id,
            "user_id": self.user_id,
            "task": self.task,
            "done": self.done,
            "date": self.date
        }    


class Meditacion(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    user= db.relationship('User', backref='meditacion', lazy=True) 
    audio_id = db.Column(db.Integer, db.ForeignKey("audio.id"), nullable=False)
    audio = db.relationship('Audio', backref='meditacion', lazy=True) 
    date = db.Column(db.DateTime, nullable=False)

    def serialize(self):
        return{
            "id": self.id,
            "user_id": self.user_id,
            "id_audio": self.id_audio
        }



class Audio(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(250), nullable=False)
    title = db.Column(db.String(120), nullable=False)
    meditation_type_id = db.Column(db.Integer, db.ForeignKey("tipo_de_meditacion.id"), nullable=False) # Se va a guardar el tipo de meditación
    meditation_type = db.relationship('Tipo_de_meditacion', backref='audio', lazy=True) # lo vamos a ver con el fichero de router. con audio.meditation_type vamos a obtener todo los datos de la meditación.
    
    def serialize(self):
        return{
            "id": self.id,
            "url": self.url,
            "title": self.title,
            "meditation_type": self.meditation_type
        }

class Tipo_de_meditacion(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    
    def serialize(self):
        return{
            "id": self.id,
            "name": self.name
        }