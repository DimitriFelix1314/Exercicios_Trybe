//submit 
function handleSubmit(event) {
  event.preventDefault();
  const validation = textInputValidation();
  if (validation === false) {
    alert('Invalid data');
  } else {
    alert('Everything right! Thank you for participate.');
  }
}

window.onload = function() {
  const submitButton = document.querySelector('#submitButton');
  submitButton.addEventListener('click', handleSubmit);
};

//if click in agreement the botton will work
function enableSubmit() {
  const submitButton = document.querySelector('#submitButton');
  const agreement = document.querySelector('#agreement');
  submitButton.disabled = !agreement.checked;
}

window.onload = function() {
  const submitButton = document.querySelector('#submitButton');
  submitButton.addEventListener('click', handleSubmit);
  const agreement = document.querySelector('#agreement');
  agreement.addEventListener('change', enableSubmit);
};

//confirming about characters
function textInputValidation() {
  const email = document.querySelector('#email').value.length;
  const invalidEmail = email < 10 || email > 70;

  const name = document.querySelector('#fullName').value.length;
  const invalidName = name < 5 || name > 50;

  const reason = document.querySelector('#why').value.length;
  const invalidReason = reason > 500;

  if (invalidEmail || invalidName || invalidReason) {
    return false;
  } else {
    return true;
  }
}