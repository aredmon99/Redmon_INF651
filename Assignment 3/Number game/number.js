const generatednum = Math.floor(Math.random() * 10) + 1;
let guess = parseInt(prompt("Guess a number between 1 and 10:"));

while (guess !== generatednum) {
  guess = parseInt(prompt("Incorrect hehe. Guess again:"));
}