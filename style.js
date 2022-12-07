    
let form =document.getElementById('form');
let validName = document.getElementById("validName")
let validEmail = document.getElementById("validEmail")
let validAddress = document.getElementById("validAddress")
let validResult = document.getElementById("validResult")
form.addEventListener('submit', submitData)
function submitData(event){
    event.preventDefault();
    let name = form['name'].value;
    let email = form['email'].value;
    let address = form['address'].value;
    let result = form['result'].value;

    if( name.trim() == ""){
        error = "Name is required"
     }
 
     else if(name.lenght < 10){
     error = "Invalid name"
     }
 
 
     else{
         validName.innerHTML = name
         error = ""
     }
     document.getElementById("nameError").innerHTML = error;

     if(email.trim() == ""){
        error ="Email is required"
        validEmail= ""
    }

    else if(email.includes("@") == false || email.includes(".") == false){
        error= "Invalid email"
        validEmail =""
    }

    else{
          validEmail.innerHTML = email
         
   }
  document.getElementById("emailError").innerHTML= error;



  if( address.trim() == ""){
    error = "Admitted is required"
 }

 else if(address.lenght > 10){
 error = "Invalid admitted"
 }


 else{
     validAddress.innerHTML = address
     error = ""
 }
 document.getElementById("addressError").innerHTML = error;


 if( result.trim() == ""){
    error = "Result is required"
 }

 else if(result.lengh  > 10){
 error = "Invalid Result"
 }


 else{
     validResult.innerHTML = result
     error = ""
 }
 document.getElementById("resultError").innerHTML = error;

    }