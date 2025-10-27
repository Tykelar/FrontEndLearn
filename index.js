//  objeto com behaviour (1 ou mais metodos), nao devemos fazer isto porque torna mau o reuso
/*const circle = {
        radius: 1,
        location: {
                x: 1,
                y: 1
        },
        draw: function() {
                console.log('draw');
        }
};*/

//soluções:

//Factory Function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);

//Constructor Function

//esta função é definida com primeira letra maiuscula
//this é referencia para o object que está a executar esta peça de código, por default this aponta para um objeto global
function Circle(radius) {
        this.radius = radius;
        this.draw = function() {
                console-log('draw');
        }
}

const another = new Circle(1); // Quando usamos o "new", estamos a criar um novo objeto e a atribuir-lhe o this e retorna automaticamente o objeto da função