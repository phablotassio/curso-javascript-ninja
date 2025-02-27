/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var generateRandomNumber = function(){

   return Math.floor(Math.random() * 100);
}

var foo = [1, 10, 18, 21, 27];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

var fooFunction = function (arg){
    
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(fooFunction(foo)[1]) // 10;

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
var fooFunction = function (arg, index){
    
    return arg[index];
}


/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var values = [true, "Bad", 1, function(){}, []];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log(fooFunction(values, 1));
console.log(fooFunction(values, 2));
console.log(fooFunction(values, 3));
console.log(fooFunction(values, 4));
console.log(fooFunction(values, 5));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

var book = function(bookName){

    var book = {"1984" : {"autor" : "George Orwell", "quantidadePaginas" : 328, "editora" : "Penguin Books"},
                "O imbecil coletivo" : {"autor" : "Olavo de Carvalho", "quantidadePaginas" : 632, "editora" : "Books"},
                "Animal farm" : {"autor" : "George Orwell", "quantidadePaginas" : 112, "editora" : "Penguin Books"}
                };
    
    if(!bookName){
       return  book; 
    }

    return book[bookName] ? book[bookName] : "O livro "+ bookName + " nao esta cadastrado";
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(book()); 

/*
{ '1984':
   { autor: 'George Orwell',
     quantidadePaginas: 328,
     editora: 'Penguin Books' },
  'O imbecil coletivo':
   { autor: 'Olavo de Carvalho',
     quantidadePaginas: 632,
     editora: 'Books' },
  'Animal farm':
   { autor: 'George Orwell',
     quantidadePaginas: 112,
     editora: 'Penguin Books' } }
*/

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] "
*/

var bookName = "1984";

console.log("O livro "+ bookName + " tem " + book(bookName).quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
bookName = "O imbecil coletivo";
console.log("O autor do livro "+ bookName + " é " + book(bookName).autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."

*/

bookName = "Animal farms";
var bookTemp = book(bookName);

console.log( typeof bookTemp !== "string" ? "O livro "+ bookName + " foi publicado pela editora " + bookTemp.editora : book(bookName));
