function validation(){
  var form = document.getelementId("form");
  var email = document.getelementId("email").value;
  var text = document.getelementId("error");
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a_zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.match(validRegex)){
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerhtml = "Your Email Address is Valid";
    text.style.color = "#00ff00";
  }
  else{
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Please provide a valid Email Address";
    text.style.color = "hsl(354, 100%, 66%)";
  }
  if (email.match(validRegex)){
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerhtml = "Your Email Address is Valid";
    text.style.color = "#00ff00";
  }