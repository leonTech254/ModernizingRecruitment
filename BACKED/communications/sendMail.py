from flask_mail import Message

class emails:
    def InterviewInvitation(template,receiver):
         from mainApp import mail
         msg = Message(subject='LEONTEQSECURITY - Interview Invitation',
                  sender='info@leonteqsecurity.com',
                  recipients=[receiver],
                  html=template)
         mail.send(msg)
    