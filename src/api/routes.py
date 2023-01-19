"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Audio, Tipo_de_meditacion
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
import datetime

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/get_note', methods=['GET'])
def get_note(id):
        notes = Note.query.filter_by(note_type_id=id)
        data = list(map(lambda x: x.serialize(), notes))
        return jsonify(data), 200

@api.route('/insert_note', methods=['POST'])
def insert_note():       
        user_id = request.json.get("user_id", None)
        notes = request.json.get("notes", None)
        color = request.json.get("color", None)

        new_note = Journal(user_id=user_id, notes=notes, color=color)
       
        db.session.add(new_note)
        db.session.commit()
        return jsonify({"new_note": new_note.serialize()}), 200

@api.route('/update_note', methods=['POST'])
def update_note():       
        note_id = request.json.get("note_id", None)
        notes = request.json.get("notes", None)
        color = request.json.get("color", None)

        note = Journal.query.get(note_id)
        note.notes = notes
        note.color = color
       
        db.session.commit()
        return jsonify({"note": note.serialize()}), 200

@api.route('/delete_note', methods=['DELETE'])
def delete_note():       
        note_id = request.json.get("note_id", None)

        note = Journal.query.get(note_id)
       
        db.session.delete(note)
        db.session.commit()
        return jsonify({"message": "Nota eliminada"}), 200


@api.route('/guardar_meditacion', methods=['POST'])
def guardar_meditacion():
        url = request.json.get("url", None)
        id = request.json.get("id", None)
        title = request.json.get("title", None)
        meditation_type_id = request.json.get("meditation_type_id", None)
        meditation_type = request.json.get("meditation_type", None)

        new_audio = Audio(url=url, id=id, title=title, meditation_type_id=meditation_type_id, meditation_type=meditation_type)

        db.sesion.add(new_audio)
        db.sesion.commit()
        return jsonify({"new_audio": "new_audio"}), 200

@api.route('/recibir_meditacion', methods=['GET'])
def recibir_meditacion():
        all_meditation_type = Tipo_de_meditacion.query.all()
        all_meditation_type = list(map(lambda x: x.serialize(), all_meditation_type))
        response_body = all_meditation_type
        return jsonify(response_body), 200

@api.route('/audios-by-type/<id>', methods=['GET'])
def get_audios_by_type(id):
        audios = Audio.query.filter_by(meditation_type_id=id)
        data = list(map(lambda x: x.serialize(), audios))
        return jsonify(data), 200


@api.route('/signup', methods=['POST'])
def create_user():    
    data = request.get_json()
    user = User(email_address=data['email_address'],password=data['password'],name=data['first_name'],last_name=data['last_name'],birth_date=data['birth_date'], date=datetime.datetime.today())
    db.session.add(user)
    db.session.commit()
    token = create_access_token(identity=user.id)

    return jsonify({"message":"el usuario se ha creado con exito", "user": user.serialize(), "token": token}), 200

@api.route('/login', methods=['POST'])
def login_user():
    data = request.get_json()
    user = User.query.filter_by(email_address=data['email'],password=data['password']).first()
    token = create_access_token(identity=user.id)

    return jsonify({"message":"el usuario se ha logeado con exito", "user": user.serialize(), "token": token}), 200

@api.route('/private', methods=['POST'])
@jwt_required()
def handle_private():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)

    return jsonify({"message":"el usuario es quien dice ser", "user": user.serialize()}), 200

@api.route('/meditacion', methods=['GET'])
def get_meditation_type():
    all_meditation_type = Tipo_de_meditacion.query.all()
    all_meditation_type = list(map(lambda x: x.serialize(), all_meditation_type))
    response_body = all_meditation_type
    return jsonify(response_body), 200


## src: "https://res.cloudinary.com/dgn3hxolh/video/upload/v1672924137/ES_Dancing_Pink_Orbs_-_369_cjldxl.mp3",
## title: "Meditación 1",
## id: 1,
