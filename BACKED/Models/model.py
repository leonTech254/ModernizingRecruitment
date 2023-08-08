from flask_sqlalchemy import SQLAlchemy
from Models.db import db
from datetime import datetime

class Application(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    job_seeker_name = db.Column(db.String(100))
    job_seeker_email = db.Column(db.String(100))
    job_posting_name = db.Column(db.String(100))
    resume = db.Column(db.String(100))
    cover_letter = db.Column(db.String(100))

    def __init__(self, job_seeker_name, job_seeker_email, job_posting_name, resume, cover_letter):
        self.job_seeker_name = job_seeker_name
        self.job_seeker_email = job_seeker_email
        self.job_posting_name = job_posting_name
        self.resume = resume
        self.cover_letter = cover_letter

    def to_dict(self):
        return {
            'id': self.id,
            'job_seeker_name': self.job_seeker_name,
            'job_seeker_email': self.job_seeker_email,
            'job_posting_name': self.job_posting_name,
            'resume': self.resume,
            'cover_letter': self.cover_letter
        }

        
class Admin(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)
    account_creation_date = db.Column(db.Date, nullable=False, default=datetime.now().strftime('%d-%m-%Y'))

    def __init__(self, username, password, account_creation_date=None):
        self.username = username
        self.password = password
        if account_creation_date:
            self.account_creation_date = account_creation_date
            


class Job(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    job_title = db.Column(db.String(100), nullable=False)
    job_location = db.Column(db.String(100), nullable=False)
    job_description = db.Column(db.Text, nullable=False)
    date_added = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f"Job(id={self.id}, title={self.job_title}, location={self.job_location})"

    def to_dict(self):
        date_added_str = self.date_added.strftime('%Y-%m-%d %H:%M:%S')
        date_added_truncated = date_added_str.rsplit('.', 1)[0]  # Truncate the string after the seconds

        return {
            'id': self.id,
            'job_title': self.job_title,
            'job_location': self.job_location,
            'job_description': self.job_description,
            'date_added': date_added_truncated
        }
        

        
class ApprovedApplication(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    job_seeker_name = db.Column(db.String(100))
    job_seeker_email = db.Column(db.String(100))
    job_posting_name = db.Column(db.String(100))
    resume = db.Column(db.String(100))
    cover_letter = db.Column(db.String(100))

    def __init__(self, job_seeker_name, job_seeker_email, job_posting_name, resume, cover_letter):
        self.job_seeker_name = job_seeker_name
        self.job_seeker_email = job_seeker_email
        self.job_posting_name = job_posting_name
        self.resume = resume
        self.cover_letter = cover_letter

    def to_dict(self):
        return {
            'id': self.id,
            'job_seeker_name': self.job_seeker_name,
            'job_seeker_email': self.job_seeker_email,
            'job_posting_name': self.job_posting_name,
            'resume': self.resume,
            'cover_letter': self.cover_letter
        }


class Interview(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    applicant_id = db.Column(db.Integer, db.ForeignKey('approved_application.id'), nullable=False)
    interview_date = db.Column(db.Date, nullable=False)
    interview_time = db.Column(db.Time, nullable=False)
    location = db.Column(db.String(100), nullable=False)
    interviewers = db.Column(db.String(200), nullable=False)
    additional_info = db.Column(db.Text)

    def __init__(self, applicant_id, interview_date, interview_time, location, interviewers, additional_info=None):
        self.applicant_id = applicant_id
        self.interview_date = interview_date
        self.interview_time = interview_time
        self.location = location
        self.interviewers = interviewers
        self.additional_info = additional_info

    def to_dict(self):
        return {
            'id': self.id,
            'applicant_id': self.applicant_id,
            'interview_date': self.interview_date.strftime('%Y-%m-%d'),
            'interview_time': self.interview_time.strftime('%H:%M:%S'),
            'location': self.location,
            'interviewers': self.interviewers,
            'additional_info': self.additional_info
        }
