# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Profil(models.Model):
	class Meta:
		db_table="profil"
	username = models.CharField(max_length = 200)
	imageName = models.CharField(max_length=200,default ="usersPics/no-img.png")
	nom = models.CharField(max_length = 200)
	prenom = models.CharField(max_length = 200)
	email = models.CharField(max_length = 200)
	birthDate = models.DateField()
	telephone = models.CharField(max_length = 12,blank =True,null=True)
	telephonePortable = models.CharField(max_length = 12,blank =True,null=True)
	adresse = models.CharField(max_length = 200)
	ville = models.CharField(max_length = 200)
	codePostal = models.IntegerField()
	site = models.CharField(max_length = 200,blank =True,null=True)
	description = models.CharField(max_length = 1000)
	linkedIn = models.CharField(max_length = 200,blank =True,null=True)
	facebook = models.CharField(max_length = 200,blank =True,null=True)
	twitter = models.CharField(max_length = 200,blank =True,null=True)
	Interet = models.CharField(max_length = 100)