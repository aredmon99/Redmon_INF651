let score;
do {
  score = parseInt(prompt("Enter your score (0 - 100):"));

  if (score < 0 || score > 100) {
    alert("Invalid. Please enter a number between 0 and 100.");
  }
} while (score < 0 || score > 100);

let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score >= 60) {
  grade = "D";
} else {
  grade = "F";
}

alert(`Your grade is: ${grade}`);