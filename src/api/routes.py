"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Audio, Tipo_de_meditacion, Calendar
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
def get_feeling():
    all_meditation_type = Calendar.query.all()
    all_meditation_type = list(map(lambda x: x.serialize(), all_meditation_type))
    response_body = all_meditation_type
    return jsonify(response_body), 200


@api.route('/feeling', methods=['POST'])
@jwt_required()
def post_feeling():
    user_id = get_jwt_identity()
    data = request.get_json()
    user = User.query.filter_by(id=user_id).first()
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
