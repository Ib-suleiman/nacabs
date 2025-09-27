from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.core.mail import send_mail, EmailMessage
from django.contrib import messages

# Create your views here.

def home(request):
    return render(request, 'work/index.html')
    # return HttpResponse("<h1>Hello NACABS</h1>")

def about(request):
    return render(request, 'work/about.html')

def academics(request):
    return render(request, 'work/academics.html')


def admissions(request):
    return render(request, 'work/admissions.html')

def courses(request):
    return render(request, 'work/courses.html')

def contact(request):
    return render(request, 'work/contact.html')

def gallery(request):
    return render(request, 'work/gallery 2.html')

def scholarship(request):
    return render(request, 'work/scholarship.html')

def contact_us(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        message = request.POST.get('message')

        full_message = f"""
        New message from NACABS Contact Form:

        Name: {name}
        Email: {email}
        Phone: {phone}

        Message:
        {message}
        """

        send_mail(
            subject=f"New Contact Form Submission from {name}",
            message=full_message,
            from_email='ibrahimsuleiman77@gmail.com',
            recipient_list=['ibrahimsuleiman77@gmail.com', 'ibsuleiman123@gmail.com'],
        )

        messages.success(request, "Your message has been sent successfully!")
        return redirect('contact')  # Redirect back to the contact page

    return render(request, 'work/contact.html')


def apply_admission(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        program = request.POST.get('program')
        uploaded_file = request.FILES.get('document')
        question_comment = request.POST.get('question/comment')


        full_message = f"""
        New Application from NACABS:

        Name: {name}
        Email: {email}
        Program: {program}

        Message:
        {question_comment}
        """

        email_message = EmailMessage(
            subject=f"New Admission Application from {name}",
            body=full_message,
            from_email='ibrahimsuleiman77@gmail.com',
            to=['ibrahimsuleiman77@gmail.com'],
        )

        # Attach the file if uploaded
        if uploaded_file:
            email_message.attach(
                uploaded_file.name,
                uploaded_file.read(),
                uploaded_file.content_type
            )

        email_message.send()  # Send the email

        messages.success(request, "Your application has been sent successfully!")
        return redirect('admissions')

    return render(request, 'work/admissions.html')