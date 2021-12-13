var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;

// Numeros Mágicos:

// numero de altura del canvas
var alturaVentana = 1300;
// numero de ancho del canvas
var anchuraVentana = 400;
// color azul en var
var Azul = "Blue";
// color rojo en var
var Rojo = "Red";
// color verde en var
var Verde = "Green";
//positionX en var (para Question.js)
var positionX = 130;
//position de la nota en var (para Question.js)
var positionNota = 290;

function setup() {
  canvas = createCanvas(alturaVentana, anchuraVentana);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw() {
  background("orange");
  if (contestantCount === 2) {
    quiz.update(1);
  }
  if (gameState === 1) {
    clear();
    quiz.play();
  }
}
