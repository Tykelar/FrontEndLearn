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
/*-----------------------------------------------------------------*/
/*
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
*/
/*-----------------------------------------------------------------*/
//Constructor Function

//esta função é definida com primeira letra maiuscula
//this é referencia para o object que está a executar esta peça de código, por default this aponta para um objeto global (tipo a window)
function Circle(radius) {
        this.radius = radius;

        let defaultLocation = {x:0, y: 0} //usamos let pra que estas propriedades sejam scoped e não se possam aceder a partir de fora

        this.draw = function() {
                let x, y;
                
                this.radius

                console.log('draw');
        };

        Object.defineProperty(this, 'defaultLocation',{ //getter - funcao usada pra ler uma propriedade
                get: function() {
                        return defaultLocation;
                },
                set: function(value) { //setter - funcao usada pra alterar uma propriedade
                        if(!value.x || !value.y)
                                throw new Error('Invalid Location');
                        defaultLocation = value;
                },
        });
}
/*-----------------------------------------------------------------*/
const circle = new Circle(10); 
// Quando usamos o "new", estamos a criar um novo objeto e a atribuir-lhe o this e retorna automaticamente o objeto da função, esquecer o new quebra o uso da função e gera bugs
circle.draw();

/*-----------------------------------------------------------------*/


Circle.call({}, 1,2,3) //o primeiro argumento pass o this
Circle.apply


circle.location = {
        x: 1,
        y: 1
} //atribuibos um object como propriedade do object
/*-----------------------------------------------------------------*/

const propertyName= 'center location' 
circle[propertyName] = {x: 1} // Bracket notation: Util para quando a variavel possa ser alterada no futuro ou quando o nome tem espaços/carateres invalidos
/*-----------------------------------------------------------------*/

for (let key in circle){
        if (typeof circle[key] !== 'function')
        console.log(key, circle[key]) // Estamos a dar print das propriedades do objeto e do valor dessas propriedades com a bracked notation
}/*-----------------------------------------------------------------*/

const keys = Object.keys(circle); //faz o mesmo que o for anterior mas nao distingue propriedades de métodos
console.log(keys)
/*-----------------------------------------------------------------*/

if('radius' in circle){  //verificar se existe um método especifico
       console.log('Circle has a radius') 
}

//