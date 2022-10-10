const form = document.getElementById('form');
const username = document.getElementById('username'); 
const email = document.getElementById('email');
const phone = document. getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
// const gender = document.getElementById('gender');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();
  })
  const validate = () => {
const usernameVal = username.value.trim();   
const emailVal =  email.value.trim();
const phoneVal = phone.value.trim();
const passwordVal = password.value.trim();
const cpasswordVal= cpassword.value.trim();
// const genderVal =  gender.value.trim();  


  if(usernameVal === "" ){
   setErrorMsg(username, 'username cannot be blank');
   }    else if (usernameVal. length < 5 ){
   setErrorMsg(username, 'username min 5 char');
   }
   else{
    setSuccessMsg(username);
   }

   if(emailVal === "" ) {
   setErrorMsg(email, 'email cannot be blank');
   } 
   
   else{
    setSuccessMsg(email);
   }

   if(phoneVal === ""){
    setErrorMsg(phone, "phonenumber cannot be blank");
  } else if (phoneVal.length != 10) {
    setErrorMsg(phone, "Must be 10 digits");
}
else {
    setSuccessMsg(phone);
   }

   if(password === ""){
    setErrorMsg(password,"password cannot be blank");
   } else if (cpasswordVal.length <= 5){
    setErrorMsg(password,"Minimum 6 char");
   } else{
    setSuccessMsg(password)
  }
  if(cpassword === "" ){
    setErrorMsg(cpassword, 'confirm password cannot be blank');
    }    else if (password != cpasswordVal){
    setErrorMsg(cpassword, 'password are not matching');
    }
    else{
     setSuccessMsg(cpassword);
    }
  }
  function setErrorMsg( input , errormsgs){
    const formControl = input.parentElemenet;
    const small = formControl.querySelector('small');
    formControl.className="form-control error";
    small.innertext = errormsgs;
 }
  function setSuccessMsg(input) {
    const formControl= input.parentElemenet;
    formControl.className="form-control success";
  }
