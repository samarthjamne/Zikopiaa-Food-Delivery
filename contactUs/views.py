from django.shortcuts import render

def contactUs(request):
    return render(request,'contactUs/contactUs.html')