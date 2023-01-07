"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Users, Audio, Tipo_de_meditacion
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/meditacion', methods=['GET'])
def get_meditation_type():
    all_meditation_type = Tipo_de_meditacion.query.all()
    all_meditation_type = list(map(lambda x: x.serialize(), all_meditation_type))
    response_body = all_meditation_type
    return jsonify(response_body), 200


## src: "https://res.cloudinary.com/dgn3hxolh/video/upload/v1672924137/ES_Dancing_Pink_Orbs_-_369_cjldxl.mp3",
## title: "Meditación 1",
## id: 1,