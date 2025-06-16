let password;
let confirmpass;

do {
  password = prompt("Please enter your secret password:");
  }
while (!password);

do {
  confirmpass = prompt("Please re-enter your secret password:");

  if (confirmpass !== password) {
    alert("INCORRECT PASSWORD, TRY AGAIN.");
  }

} while (confirmpass !== password);

alert("Password confirmed!");
