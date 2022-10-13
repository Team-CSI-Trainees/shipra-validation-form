const form = document.getElementById('form');
const username = document.getElementById('username'); 
const email = document.getElementById('email');
const phone = document. getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
// const gender = document.getElementById('gender');
   
  //add event
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
  })

  // var userCheck = /^[A-Za-z. ]{3,25}$/;
  // var passwordCheck = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,18}$/;
  // var emailCheck = /^[a-zA-Z0-9_.]{3,}[@][a-zA-Z]{3,}[.]{1}[A-Za-z.]{2,8}$/;
  // var phoneCheck = /^[6-9]{10}$/;
  
  
   
  
  


  //define the validate function
  const validate = () => {
const usernameVal = username.value.trim();   
const emailVal =  email.value.trim();
const phoneVal = phone.value.trim();
const passwordVal = password.value.trim();
const cpasswordVal= cpassword.value.trim();
// const genderVal =  gender.value.trim();  
   
   
  //username
  if(usernameVal === "" ){
   setErrorMsg(username, 'username cannot be blank');
   }    else if (usernameVal.length < 5 ){
   setErrorMsg(username, 'username min 5 char');
   }
   else{
    setSuccessMsg(username);
   }

    //email
   if(emailVal === "" ) {
   setErrorMsg(email, 'email cannot be blank');
  //  } else if ( !isEmail(emailVal)){
  //   setErrorMsg(emailVal, 'Not a valid Email');
   }
   else{
    setSuccessMsg(email);
   }
    
   //phone number
   if(phoneVal === ""){
    setErrorMsg(phone, "phonenumber cannot be blank");
  } else if (phoneVal.length  !== 10) {
    setErrorMsg(phone, "Must be 10 digits");
  }
    else {
    setSuccessMsg(phone);
   }

   //password
   if(passwordVal === ""){
    setErrorMsg(password,"password cannot be blank");
   } else if (passwordVal.length <= 5){
    setErrorMsg(password,"Minimum 6 char");
   } else{
    setSuccessMsg(password);
  }

   //confirm password
  if(cpasswordVal === "" ){
    setErrorMsg(cpassword, 'confirm password cannot be blank');
    }    else if (passwordVal != cpasswordVal){
    setErrorMsg(cpassword, 'password are not matching');
    }
    else{
     setSuccessMsg(cpassword);
    }
  }

  //function 
  function setErrorMsg( input , errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className="form-control error";
    small.innerHTML = errormsgs;
 }
  function setSuccessMsg(input) {
    const formControl= input.parentElement;
    formControl.className="form-control success";
  }

