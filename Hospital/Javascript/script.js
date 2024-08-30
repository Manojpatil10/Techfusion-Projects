var validateForm=()=>{
  event.preventDefault();

  var name = document.myForm.username.value;
  var emailData = document.myForm.email.value;
  var subjectData = document.myForm.subject.value;
  var textareaData = document.myForm.textarea.value;

  if((name.length!=0 && emailData.length!=0) && (subjectData.length!=0 && textareaData.length!=0)){
      // event.preventDefault();
      document.getElementById('successMessage').style.display="block";
      document.myForm.submit();
    }
    else{
      document.getElementById('alertMessage').style.display="block";
  }

}