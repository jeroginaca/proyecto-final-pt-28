"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Audio, Tipo_de_meditacion, Journal, Calendar, Objetivos
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

@api.route('/get_tasks', methods=['GET'])
@jwt_required()
def get_tasks():
    user_id = get_jwt_identity()
    get_all_tasks = Objetivos.query.filter_by(user_id=user_id).order_by(Objetivos.id.desc()).all()
    get_all_tasks = list(map(lambda x: x.serialize(), get_all_tasks))
    response_body = get_all_tasks
    return jsonify(response_body), 200

@api.route('/new_task', methods=['POST'])
@jwt_required()
def insert_obj():    
    user_id = get_jwt_identity()
    data = request.get_json()
    task_name = data["task"]
    task_done = data["done"]
    date = data["date"]
    print(data)
    new_task = Objetivos(user_id=user_id, task=task_name, done=task_done, date=date)
    print(new_task)
    db.session.add(new_task)
    db.session.commit()

    return jsonify({"new_task": new_task.serialize()}), 200

@api.route('/edit_task', methods=['PUT'])
@jwt_required()
def edit_task():    
    user_id = get_jwt_identity()
    data = request.get_json()
    task_name = data["task"]
    task_done = data["done"]
    id = data["id"]
    task=Objetivos.query.get(id)
    task.task=task_name
    task.done=task_done
    db.session.commit()

    return jsonify({"task": task.serialize()}), 200

@api.route('/remove_task', methods=['DELETE'])
@jwt_required()
def remove_task():    
    user_id = get_jwt_identity()
    data = request.get_json()
    id = data["id"]
    task=Objetivos.query.get(id)

    db.session.delete(task)
    db.session.commit()

    return jsonify({"task": "task deleted"}), 200

@api.route('/get_note', methods=['GET'])
@jwt_required()
def get_note():
    user_id = get_jwt_identity()
    get_all_notes = Journal.query.filter_by(user_id=user_id).all()
    get_all_notes = list(map(lambda x: x.serialize(), get_all_notes))
    response_body = get_all_notes
    return jsonify(response_body), 200

@api.route('/insert_note', methods=['POST'])
@jwt_required()
def insert_note():       
    user_id = get_jwt_identity()
    data = request.get_json()
    note_body = data["notes"]
    color_body = data["color"]
    date = data["date"]

    new_note = Journal(user_id=user_id, notes=note_body, color=color_body, date=date)
    
    db.session.add(new_note)

    db.session.commit()
    return jsonify({"new_note": new_note.serialize()}), 200

@api.route('/update_note', methods=['PUT'])
@jwt_required()
def update_note():
        user_id = get_jwt_identity()       
        data = request.get_json()
        note_id = data["note_id"]
        note_body = data["notes"]
        color_body = data["color"]
        note = Journal.query.get(note_id)
        note.notes = note_body
        note.color = color_body
    
       
        db.session.commit()
        return jsonify({"note": note.serialize()}), 200

@api.route('/delete_note', methods=['DELETE'])
@jwt_required()
def delete_note():
        data = request.get_json()       
        note_id = data["note_id"]

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


@api.route('/feeling', methods=['GET'])
@jwt_required()
def get_feeling():
    user_id = get_jwt_identity()
    get_all_colors = Calendar.query.filter_by(user_id=user_id).all()
    get_all_colors = list(map(lambda x: x.serialize(), get_all_colors))
    response_body = get_all_colors
    return jsonify(response_body), 200

@api.route('/feeling', methods=['POST'])
@jwt_required()
def post_feeling():
    user_id = get_jwt_identity()
    data = request.get_json()
    user = User.query.filter_by(id=user_id).first()
    calendar = Calendar.query.filter_by(user_id=user.id,date=data['date']).first()
    if calendar:
        calendar.feeling = data['feeling']
        db.session.commit()
    else:
        calendar = Calendar(user_id=user.id,feeling=data['feeling'],date=data['date'])
        db.session.add(calendar)
        db.session.commit()
   

    return jsonify({}), 200


@api.route('/meditacion', methods=['GET'])
def get_meditation_type():
    all_meditation_type = Tipo_de_meditacion.query.all()
    all_meditation_type = list(map(lambda x: x.serialize(), all_meditation_type))
    response_body = all_meditation_type
    return jsonify(response_body), 200


## src: "https://res.cloudinary.com/dgn3hxolh/video/upload/v1672924137/ES_Dancing_Pink_Orbs_-_369_cjldxl.mp3",
## title: "Meditación 1",
## id: 1,
