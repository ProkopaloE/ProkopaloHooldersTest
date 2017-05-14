# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render_to_response, redirect
from django.contrib import auth
from django.middleware import csrf



def login(request):
	args={}
	args.update(csrf(request))
	if request.POST:
		username = request.POST.get('username',"")
		password = request.POST.get('password',"")
		user = auth.authenticate(username=username,password=password)
		if user is not None:
			auth.login(request,user)
			return redirect('/1/')
		else: 
			args['login_error']="Il n'y a pas utilisateur"
			return render_to_response('login.html',args)
	else:
		return render_to_response('login.html',args)

def logout(request):
	auth.logout(request)
	return redirect("/1/")

