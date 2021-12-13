class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Introduce Aquí Tu Nombre...");
    this.input2 = createInput("Introduce el Número de la Opción Correcta..");
    this.button = createButton('Enviar');
    this.question = createElement('h2');
    this.option1 = createElement('h3');
    this.option2 = createElement('h3');
    this.option3 = createElement('h3');
    this.option4 = createElement('h3');
    this.option5 = createElement('h3');
    this.option6 = createElement('h3');
    this.option7 = createElement('h3');
  }

  hide() {
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    // this.question.hide();
    // this.option1.hide();
    // this.option2.hide();
    // this.option3.hide();
    // this.option4.hide();
  }

  display() {
    this.title.html("EXTREME QUIZ!");
    this.title.position(600, 0);

    this.question.html("Pregunta: ¿Cuál de estas opciones corresponde al dialogo correcto de Iron-Man antes de morir en Avengers END-GAME? ");
    this.question.position(40, 70);
    this.option1.html("1: Adios Mundo ");
    this.option1.position(150, 110);
    this.option2.html("2: Ganamos... ");
    this.option2.position(150, 130);
    this.option3.html("3: Lo siento Peter... ");
    this.option3.position(150, 150);
    this.option4.html("4: Soy Tony Stark");
    this.option4.position(150, 170);
    this.option5.html("5: Yo soy Iron Man ");
    this.option5.position(150, 190);
    this.option6.html("6: Tu perdiste Thanos! ");
    this.option6.position(150, 210);
    this.option7.html("7: Regresaré...");
    this.option7.position(150, 230);

    this.input1.position(465, 380);
    this.input2.position(710, 380);
    this.button.position(650, 380);

    this.button.mousePressed(() => {
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      // this.question.hide();
      // this.option1.hide();
      // this.option2.hide();
      // this.option3.hide();
      // this.option4.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount += 1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);

    });
  }
}
