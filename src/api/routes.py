"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Audio, Tipo_de_meditacion
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


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


## src: "https://res.cloudinary.com/dgn3hxolh/video/upload/v1672924137/ES_Dancing_Pink_Orbs_-_369_cjldxl.mp3",
## title: "Meditación 1",
## id: 1,