from django.shortcuts import render

def ourClients(request):
    return render(request,'ourClients/ourClients.html')