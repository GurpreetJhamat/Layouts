var first = document.getElementById('fname');
var last = document.getElementById('lname');
var phone = document.getElementById('phone');
var message = document.getElementById('message');



function validateForm(){
    if(first.value == ""){
        alert('Please provide first name');
        return false
    }

    if(last.value == ""){
        alert('Please provide last name');
        return false
    }

    
    if(phone.value == ""){
        alert('Please provide phone number');
        return false
    }

    if(message.value == ""){
        alert('Please provide a message');
        return false
    }
alert('Form submitted')
    return true;
}