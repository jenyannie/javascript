function validate(){ 
	var name = document.myForm.name.value;
	var email = document.myForm.email.value;
	var password = document.myForm.password.value;
	var phno = document.myForm.phno.value;

	var letters = /^[A-Za-z]+$/;
	var match = letters.test(document.myForm.name.value);

	var regex= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
	var pattern = regex.test(document.myForm.email.value);

	
	
	if (name=="" || email == "" || password =="" || phno =="" ){
		// alert("name required");
		// document.myForm.name.focus();
		document.getElementById("msg").innerHTML = "**All fields are required"
		return false;
	} 
	if (name.length < 3){
      document.getElementById("error1").innerHTML = "Name must be atleast 3 characters long";
      return false;
   }
    // if(!isNaN(name)){
    //     alert("enter only characters");
    //     document.myForm.name.select();
    //     return false;
    // }

   if(!match){
      document.getElementById("error1").innerHTML ="enter only characters for name";
      return false;
   }

	
   if(!pattern){
      document.getElementById("error2").innerHTML ="enter valid email";
      return false;
   }

    // if (password =="" || password ==null){
    //     alert("password required");
    //     document.myForm.password.focus();
    //     return false;
    // }
   if(password.length < 6){
	   document.getElementById("error3").innerHTML = "Password must be atleast 6 characters long";
	   return false;
   }

   if(isNaN(phno)){
      document.getElementById("error4").innerHTML = "enter valid phno";
      return false;
   }
   if(phno.length < 10){
	   document.getElementById("error4").innerHTML = "Phno must be atleast 10 characters long";
      return false;
   }
   

}

	