let number = parseInt(prompt("Enter a Digit: "));

if (isNaN(number)) {
  alert("Enter a Digit");
} 

else {
  for (let input = 1; input <= 10; input++) {
    let result = number * input;
    alert(`${number} x ${input} = ${result}`);
  }
}