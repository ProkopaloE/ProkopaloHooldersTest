# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http.response import HttpResponse
from django.shortcuts import render_to_response, redirect
from django.template.loader import get_template
from django.template import Context
from ProfilApp.models import Profil
from django.contrib import auth

# Create your views here.

def profil(request):
	username= auth.get_user(request).username
	if username:
		return render_to_response('profil.html',{'User':Profil.objects.get(username = username),'username': username})
	else:
		return render_to_response('profil.html',{'username': username})

def changeEmail(request):
	newEmail = request.GET.get('email', None)	
	username= auth.get_user(request).username
	newEmail = request.GET.get('email', None)
	profil = Profil.objects.get(username = username)
	profil.email = newEmail
	profil.save()
	return redirect("/")
	