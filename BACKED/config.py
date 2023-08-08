from dotenv import load_dotenv
import os
load_dotenv()
MAIL_SERVER = os.environ.get("mail_server")
MAIL_PORT = os.environ.get("mail_port")
MAIL_USE_SSL =False
MAIL_USERNAME = os.environ.get("mail_username")
MAIL_PASSWORD = os.environ.get("mail_password")
MAIL_USE_TLS=True



UPLOAD_FOLDER=os.environ.get("server_path")
