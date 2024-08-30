var validate=()=>{
  event.preventDefault();

  // var myFormData={
  //   firstName : document.myform.firstName.value,
  //   lastName : document.myform.firstName.value,
  //   email : document.myform.firstName.value,
  //   subjectData : document.myform.subject.value,
  //   textareaData : document.myform.textarea.value,
  // }
  // console.log(myFormData);

  var firstNameData = document.myform.firstName.value;
  var lastNameData = document.myform.lastName.value;
  var emailData = document.myform.email.value;
  var subjectData = document.myform.subject.value;
  var textareaData = document.myform.textarea.value;
  
  if((firstNameData.length!=0 && lastNameData.length!=0) && (subjectData!=0 && textareaData!=0)){
    document.myform.submit();
  }
  else{
    alert("Enter the required details");
  }

  // if(myFormData.firstName.length<=0 || myFormData.lastName.length<=0){
  //   alert("Enter the required details");
  // }
  // else{
  //   document.myform.submit();
  // }
  
  let indexOfOccurance = emailData.indexOf("@gmail.com");
  // let indexOfOccurance = myFormData.email.search("@gmail.com");
  // console.log(indexOfOccurance);
  if(indexOfOccurance>=0){
    document.myform.submit();
  }
  else{
    alert("please enter the valid email");
  }

} 