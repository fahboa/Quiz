const prompt = require("prompt-sync")();

console.log("Welcome to computer hardware quiz");

let correctAnswers = 0;
const totalQuestions = 3;

const answer1 = prompt("what is the brain of the computer? ");
const correctAnswer1 = "CPU";

 if (answer1.toUpperCase() === correctAnswer1) {
     console.log("you got it correct!")
     correctAnswers++;
 } else (
     console.log("you got it wrong...")
 )
 
 const answer2 = prompt("what is better a 3090ti or a 4060? ");
const correctAnswer2 = "3090ti";

 if (answer2.toLowerCase() === correctAnswer2) {
     console.log("you got it correct!")
     correctAnswers++;
 } else (
     console.log("you got it wrong...")
 )
 
 const answer3 = prompt("what is the recommended amount of RAM in 2023? ");
 const correctAnswer3 = "16gb";
 
  if (answer3.toLowerCase() === correctAnswer3) {
      console.log("you got it correct!")
      correctAnswers++;
  } else (
      console.log("you got it wrong...")
  )
const percent = Math.round((correctAnswers / totalQuestions) * 100);

  console.log("you got", correctAnswers, "questions correct!")
  console.log("you score", percent.toString(), "%");

