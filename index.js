const chalk = require('chalk');
var readlineSync = require('readline-sync');

var userName = readlineSync.question("What is your name?");
console.log(chalk.cyan(("\nWelcome to Literature trivia " + userName.toUpperCase())));

var score = 0;

var playflag = readlineSync.question("\nAre you ready to play?");

var questionArray = [
  {
    question: "\nThe Girl with the Dragon Tattoo was originally published in which language?\na) Swedish\nb) Norweigian\nc) Danish\nd) English\n",
    answer: "a"
  },
  {
    question: "\nName That Book: Chronologically, this novel comes first in C. S. Lewis’s Chronicles of Narnia series.\na) The Lion, the Witch and the Wardrobe\nb) The Voyage of the Dawn Treader\nc) The Magician’s Nephew\nd) The Silver Chair\n",
    answer: "a"
  },
  {
    question: "\nSir Arthur Conan Doyle’s Sherlock Holmes made his first appearance in print with which novel?\na) The Sign of the Four\nb) The Valley of Fear\nc) The Hound of the Baskervilles\nd) A Study in Scarlet\n",
    answer: "d"
  },
  {
    question: "\nTrue or False: “Agatha Christie” is a pen name.\na) True\nb) False\n",
    answer: "b"
  },
  {
    question: "\nWhich one of the following was not one of The Three Musketeers?\na) Aramis\nb) Athos\nc) D\' Artagnan\nd) Porthos\n",
    answer: "c"
  }

]

function play(question,answer){
  var userAnswer=readlineSync.question(chalk.cyan(question));
  if(userAnswer.toLowerCase()===answer){
    console.log(chalk.green("You are Correct!\n"));
    score=score+100;
    console.log("Your current score is "+ score + "\n");
    }
  else{
    console.log(chalk.red("That is Incorrect!\n"));
    score=score-50;
    console.log("Your current score is "+ score + "\n");
  }
}

var highScore=[
  {
    name:"Vivek",
    score:500
  },
  {
    name:"Ayushi",
    score:350
  }
];


function leaderboard(score){
if(score>350){
console.log("Congratulations "+ userName.toUpperCase()+"!! You have made it to the top of the leaderboard.\n");
console.log(chalk.bgRed("Here are our top performers\n"));
console.log(userName)
for(i=0;i<highScore.length;i++){
  console.log(highScore[i].name);
}
}
else{
  console.log("Nice try "+userName.toUpperCase()+".But you need to score higher to enter the Leaderboard.\n");
  console.log(chalk.bgRed("Here are our top performers\n"));
  for(i=0;i<highScore.length;i++){
  console.log(highScore[i]);
  }
}

}


if(playflag.toLowerCase() === "yes"){
  console.log(chalk.red("\nHere are the Rules!\n"))
  console.log("There are 5 questions with multiple options present as answers. \nType your answer as a,b,c or d. \nCorrect answer gets you" + chalk.cyan(' +100 ') + "points.\nIncorrect answer gets you"  + chalk.red(' -50 ') + "points.\n")

  for(var i=0;i<questionArray.length;i++){
  play(questionArray[i].question,questionArray[i].answer);
  }
  console.log(chalk.green("Congratulations!! You have completed the quiz.\n"));
  console.log(chalk.bgMagenta("Your final score is "+score));
  leaderboard(score)
 }
else{
  console.log(chalk.red("No problem! See you next time."))
}




