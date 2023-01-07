"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Users, Audio
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/meditacion', method=['GET'])
def get_audio():

    if request.method == 'GET':
        all_audios = Audios.query.all()
        all_audios = list(map(lambda x: x.serialize(), all_audios))
        response_body = all_audios
        return jsonify(response_body), 200