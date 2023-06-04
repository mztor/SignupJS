
function saveDetails() {
  //validate all inputs first
  var message = "";
  //if validation fails, function returns the
  // data that needs to be checked by the user

  message = message + validateEmail();
  message = message + validateUsername();
  message = message + validateTitle();
  message = message + validateName();
  message = message + validateGender();
  message = message + validateAddress();
  message = message + validateMobile();
  message = message + validateDob();
  message = message + validateCreditCard();
  message = message +  validatePassword();
  message = message + validateSecurityQ();


  if (message == "") {
    alert("Validation passed!");
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  } else {
    if (message[0] == ",") {
      message = message.replace(/^,/, '');
    }
    message = message.trim();

    alert("Invalid " + message + " entered.");
  }
}

function validateEmail() {

  //Peter Mawere
  var x = document.getElementById("email").value;
  let symbolCheck = x.includes("@" && ".com");
  if (x == "" && symbolCheck == false) {
    return "Email";
  }
  while (x != "" && symbolCheck == true) {
    return "";
  }

}

function validateUsername() {
  //after validation, if no issues, return ""
  //otherwise, return " username"
  //remember to include leading space!
  //Giuseppe
  return "";
}

function validateTitle() {
  // ZIAD WAS HERE BIG DOGGGG
  return "";
}
function validateName() {
  // Pi Was Here
  return "";
}

function validateGender() {
  var gender = document.getElementById('genders').value;
  if (gender == "enter"){
    return "gender";
  }
  else {
    return "";
  }
}

function validateAddress() {
  return "";
}

function validateMobile() {
  return "";
}
function validateDob() {
  //Joshu was here
  return "";
}

function validatePassword() {
  //harry epic code also ziad is silly
  return "";
}

function validateCreditCard() {
  //Isaac is here :)
  return "";
}

function validateSecurityQ() {
  var message = "";
  var question = document.getElementById("secQ1").value;
  var answer = document.getElementById("secA1").value;
  var maxAnswerLength = 50

  // checks security question has option selected
  if (question == "") {
    message += ", security question";
  }
  // checks security answer has a string entered and that it is an appropriate length
  if (answer == "" || answer.length > maxAnswerLength) {
    message += ", security answer";
  }

  return message;
}
