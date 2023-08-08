from flask import Flask, request, jsonify,render_template,send_from_directory,make_response
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from dotenv import load_dotenv
import os
from Models.db import db
import base64
load_dotenv()
from Models.model import Application,Admin,Job,ApprovedApplication,Interview
from werkzeug.utils import secure_filename
from datetime import date,datetime
import bcrypt
import jwt
from werkzeug.security import check_password_hash,generate_password_hash
from Securty.jwtservice import token
from communications.sendMail import emails
from flask_mail import Mail
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get("sqlite_path")
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)
app.config.from_pyfile("config.py")
mail = Mail(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['MIME_TYPES'] = {'js': 'application/javascript'}

CORS(app, resorces={r'/*': {"orgins": '*'}})

@app.route('/')
def serve_vue_app():
    return send_from_directory(app.static_folder, 'dist/index.html')

@app.route('/<path:path>')
def serve_vue_app_routes(path):
    return send_from_directory(app.static_folder, path)



def create_default_admin():
    admin = Admin.query.filter_by(username='admin').first()
    if not admin:
        password = 'admin123'  # Replace with the actual password
        hashed_password =generate_password_hash(password)
        default_admin = Admin(username='admin', password=hashed_password, account_creation_date=date.today())
        db.session.add(default_admin)
        db.session.commit()


# Application Management Module
@app.route('/applications', methods=['POST'])
def submit_application():
    data = request.form
    print(data)
    job_seeker_email = data['email']
    job_posting_name= data['Jobtitle']
    job_seeker_name = data['name']
    resume_data = request.files['resume']
    cover_letter = data['coverLetter']
    # Extract original file name from the uploaded resume
    resume_filename = secure_filename(request.files['resume'].filename)  
    print(resume_filename)
    resume_data.save(os.path.join(os.environ.get("server_path"), resume_filename))
    # Create and save the application in the database
    new_application = Application(job_posting_name=job_posting_name,job_seeker_email=job_seeker_email,job_seeker_name=job_seeker_name,cover_letter=cover_letter,resume=resume_filename)
    db.session.add(new_application)
    db.session.commit()

    return jsonify({'message': 'Application submitted successfully'})


@app.route('/login/', methods=['POST'])
def login():
    data = request.get_json()
    username = data['username']
    password = data['password']
    admin = Admin.query.filter_by(username=username).first()
    if admin:
        if check_password_hash(admin.password, password):
                usernametoken=token.generateKey(admin.username)
                response_data = {
            'message': 'Login successful',
            'token': usernametoken
                }
                return make_response(jsonify(response_data), 200)
        else:
            return make_response(jsonify(message='Invalid password'), 401)
    else:
        return make_response(jsonify(message='Admin not found'), 404)
    
@app.route("/admin/auth/",methods=['GET'])
@token.token_required
def admin_auth(user):
    return user


@app.route('/jobs/add', methods=['POST'])
def add_job():
    contents=request.get_json()
    job_title = contents['jobTitle']
    job_location = contents['jobLocation']
    job_description = contents['jobDescription']

    job = Job(job_title=job_title, job_location=job_location, job_description=job_description)
    db.session.add(job)
    db.session.commit()

    return jsonify(job.to_dict()), 201


@app.route('/jobs/', methods=['GET'])
def get_jobs():
    jobs = Job.query.all()
    job_list = [job.to_dict() for job in jobs]
    return jsonify(job_list), 200

@app.route('/applications', methods=['GET'])
def get_applications():
    applications = Application.query.all()
    application_list = [application.to_dict() for application in applications]
    return jsonify(application_list)

@app.route('/approve_application', methods=['POST'])
def approve_application():
    data = request.get_json()  # Get the JSON data from the request
    job_seeker_name = data.get('job_seeker_name')
    job_seeker_email = data.get('job_seeker_email')
    job_posting_name = data.get('job_posting_name')
    resume = data.get('resume')
    cover_letter = data.get('cover_letter')
    approved_application = ApprovedApplication(
        job_seeker_name=job_seeker_name,
        job_seeker_email=job_seeker_email,
        job_posting_name=job_posting_name,
        resume=resume,
        cover_letter=cover_letter
    )
    db.session.add(approved_application)
    db.session.commit()
    return jsonify({'message': 'Application approved successfully'})


@app.route('/interviews', methods=['POST'])
def create_interview():
    data = request.get_json()
    applicant_id = data['applicant_id']
    interview_date = datetime.strptime(data['interview_date'], '%Y-%m-%d').date()
    interview_time = datetime.strptime(data['interview_time'], '%H:%M').time()
    location = data['location']
    interviewers = data['interviewers']
    additional_info = data['additional_info']

    # Create Interview object and save to the database
    interview = Interview(applicant_id=applicant_id,
                          interview_date=interview_date,
                          interview_time=interview_time,
                          location=location,
                          interviewers=interviewers,
                          additional_info=additional_info)
    db.session.add(interview)
    db.session.commit()

    email_html = render_template('sendEmailInterview.html',
                                 candidate_name=applicant_id,
                                 interview_date=interview_date,
                                 interview_time=interview_time,
                                 interview_location=location,
                                 contact_email='JosephKamau5328@gmail.com',
                                 your_name='JOSEPH KAMAU',
                                 confirmation_link='https://leonteqsecurity.com'
                                 )

    # Create and send the email message
    emails.InterviewInvitation(template=email_html,receiver=applicant_id)

    return jsonify({'message': 'Interview created successfully. Invitation email sent.'}), 200


if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        db.session.commit()
        create_default_admin()
        
    app.run(host="0.0.0.0", port=5008, debug=True)
