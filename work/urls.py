from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home, name = 'home'),
    path('about', views.about, name = 'about'),
    path('academics', views.academics, name = 'academics'),
    path('admissions', views.admissions, name = 'admissions'),
    path('contact', views.contact, name = 'contact'),
    path('courses', views.courses, name = 'courses'),
    path('scholarship', views.scholarship, name = 'scholarship'),
    path('gallery', views.gallery, name = 'gallery'),
    path('contact-us', views.contact_us, name = 'contact-us'),
    path('apply', views.apply_admission, name = 'apply'),
]