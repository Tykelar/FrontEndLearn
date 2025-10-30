Objetos ao serem atribuidos com outro objeto apontam pra referência em memória do 1º, primitivas são alocados novos em memória com o valor do primeiro:

x = {value: 10}
let y = x
x.value = 20
o valor de y.value vai ser 20 tambem, porque aponta pra x