// Desafio Semana #1

// Declarar uma variável chamada `myvar`, sem valor.
var myvar;

// Após declarada, atribua o valor 10 à variável `myvar`.
myvar = 10;

// Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.
var soma = 15 + 8;

// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.
soma += 1;

// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.

soma *= 3;

// Qual é o valor da variável `soma` até aqui?
console.log('Valor da variavel soma é ', soma);

// Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.
var souninja = true;

// Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.
var comida = ['arroz', 'feijao', 'ovo'];

// Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.
console.log(comida[1]);

// Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).
console.log('Myvar é igual a soma ?', myvar === soma);

// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.
console.log('Myvar é maior ou igual a soma ?',myvar <= soma);

// Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.
function divisao(x, y){
    return x / y;
}

// Invoque a função criada acima, passando os parâmetros 10 e 2.
console.log('O resultado da divisao entre 10 e 2 é', divisao(10,2));