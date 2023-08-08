from flask import jsonify, redirect, request
from functools import wraps
import jwt
from Models.model import Admin
from datetime import datetime, timedelta

secrete_key = 'leonteqsecuritny'
token_expiration = timedelta(hours=1)

class token:
    @staticmethod
    def generateKey(userId):    
        token = jwt.encode({'user': userId, 'exp': datetime.utcnow() + token_expiration}, secrete_key)
        return token.decode('utf-8')  # Convert bytes to string

    @staticmethod
    def token_required(f):
        @wraps(f)
        def decorated(*args, **kwargs):
            header = request.headers.get('Authorization')
            if not header:
                return jsonify({'message': 'denied'}), 401  # missing token

            try:
                _, token = header.split()
                data = jwt.decode(token, secrete_key)
                username = data['user']
                databaseResponse = Admin.query.filter_by(username=username).first()
                
                if not databaseResponse:
                    return jsonify({'message': 'deniedrrrr'}), 401  # user not found

                # email = databaseResponse.email
                # username = databaseResponse.username
                # dbppasshashed = databaseResponse.password
                # names = databaseResponse.fullname
            except jwt.ExpiredSignatureError:
                return jsonify({'message': 'deniedggg'}), 401  # invalid token
            except jwt.InvalidTokenError:
                return jsonify({'message': 'deniedfffd'}), 401  # invalid token

            return f(username)

        return decorated
