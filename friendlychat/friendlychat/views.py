from django.http import HttpResponse,HttpResponseRedirect
from django.shortcuts import render ,redirect
def loginhome(request):
    try:
        return render(request,'login.html')
       
    except:
        pass

def main(request):
    return render(request,'main.html')
def register(request):
    return render(request,'register.html')