class Quiz {
  constructor() {
    this.title = createElement('h1');
    this.answer1 = createElement('h2');
    this.answer2 = createElement('h2');
  }

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })

  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }

  async start() {
    if (gameState === 0) {
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if (contestantCountRef.exists()) {
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play() {
    //escribe aquí el código para cambiar el color de fondo
    if (gameState !== 0) {
      // Si el estado del juego es diferente a 0 entonces:
      background("white");
    }

    //escribe el código para mostrar un encabezado que indique el resultado del Cuestionario
    
    //Titulo para decir el resultado
    this.title.html("El resultado de la encuesta es...");
    this.title.position(550, 0);

    //llama aquí a getContestantInfo( )
    Contestant.getPlayerInfo();

    //escribe la condición para comprobar si contestantInfor no está indefinido
    if (allContestants !== undefined) {
      fill(Azul);
      textSize(20);
      text("*NOTA: ¡El concursante que respondió correctamente está resaltado en color verde!", positionX, positionNota);
    }

    //escribe el código para resaltar al concursante que respondió correctamente

    // Posicion que cambia 
    var position = 300;

    //Bucle for para allContestants
    for (var plr in allContestants) {
      //respuesta correcta
      var correctAns = "5";
      //Aumenta la respuesta +30 para poener el siguiente resultado
      position += 30;
      //Si la respuesta correcta es igual a la respuesta del contestant
      if (correctAns === allContestants[plr].answer) {
        //rellena de verde el texto
        fill(Verde);
      } else {
        // Si es lo contrario O diferente se rellena de Rojo
        fill(Rojo);
      }
      //Texto para mostrar el nombre y resultado de los contestants
      text(allContestants[plr].name + ": " + allContestants[plr].answer, positionX, position);
    }

  }

}
