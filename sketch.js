
var canvas;
var gameState, contestantCount, database, quiz, question, contestant;

function setup(){
  database = firebase.database()
  canvas = createCanvas(850,400);
  quiz = new Qiuz()
  quiz.getState()
  quiz.start()
}


function draw(){
  background("pink");
  
}
