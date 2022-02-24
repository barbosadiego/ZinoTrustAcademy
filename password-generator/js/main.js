const empty = "";
const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*=-_";

const pLenght = document.getElementById('p-length');
const upperCase = document.getElementById('p-uppercase');
const lowerCase = document.getElementById('p-lowercase');
const pNumber = document.getElementById('p-number');
const pSymbol = document.getElementById('p-symbol');
const submit = document.getElementById('submit');
const password = document.getElementById('password');

submit.addEventListener('click', () => {
  let initialPassword = empty;
  (upperCase.checked) ? initialPassword += uCase : '';
  (lowerCase.checked) ? initialPassword += lCase : '';
  (pNumber.checked) ? initialPassword += number : '';
  (pSymbol.checked) ? initialPassword += symbol : '';

  password.value = generatePassword(pLenght.value, initialPassword);
})

function generatePassword(length, initialPassword){
  let pass = '';
  for(let i = 0; i < length; i++){
    pass += initialPassword.charAt(Math.floor(Math.random() * initialPassword.length));
  }
  return pass;
}

// Copy password to clipboard

const copy = document.getElementById('copy');

copy.addEventListener('click', () => {
  if(!password.value){
    alert('Please generate a password.');
  } else {
    password.select();
    document.execCommand("copy");
    alert('Password has been copied to clipboard.')
  }
});
