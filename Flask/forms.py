from flask_wtf import Form
from wtforms import TextField, IntegerField, TextAreaField, SubmitField, RadioField, SelectField
from wtforms import validators, ValidationError

class ContactForm(Form):
  name = TextField("Name",[validators.Required("Please enter your name.")])
  Gender = RadioField('Gender', choices = [('M','Male'),('F','Female')])
  Age = IntegerField("age")
  email = TextField("Email",[validators.Required("Please enter your email address.")])
  language = SelectField('Languages', choices = [('cpp', 'C++'), ('py', 'Python')])
  submit = SubmitField("Send")
