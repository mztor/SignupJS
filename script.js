
function saveDetails() {
  //validate all inputs first
  let valid = true;

  valid = validateEmail();
  valid = validateUsername();
  valid = validateName();
  valid = validateGender();
  valid = validateAddress();
  valid = validateMobile();
  valid = validateDob();
  valid = validateCreditCard();


  if (valid == true) {
    alert("Validation passed!");
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  }
}

function validateEmail() {
  return true;
}

function validateUsername() {
  return true;
}

function validateName() {
  return true;
}

function validateGender() {
  return true;
}

function validateAddress() {
  return true;
}

function validateMobile() {
  return true;
}
function validateDob() {
  return true;
}

function validateCreditCard() {
  return true;
}
