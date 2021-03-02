
//EXERCICIO 1
function minhaFuncao(variavel) {
      return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
//a. aparece o resultado 10 e 50 no console.

function minhaFuncao(variavel) {
      return variavel * 5
}

minhaFuncao(2)
minhaFuncao(10)
//b. Não imprime no console.

//EXERCICIO 2

let arrayDeNomes = ["Darvas", "Caio", "João", "Paulinha", "Chijo"];

const outraFuncao = function (array) {
      for (let i = 0; i < 2; i++) {
            console.log(array[i])
      }
}

outraFuncao(arrayDeNomes)
//a. imprime Darvas e Caio.

let arrayDeNomes = ["Amanda", "Caio", "João", "Paulinha", "Chijo"];

const outraFuncao = function (array) {
      for (let i = 0; i < 2; i++) {
            console.log(array[i])
      }
}

outraFuncao(arrayDeNomes)
//Vai imprimir Amanda e Caio.

//EXERCICIO 3

const metodo = (array) => {
      let arrayFinal = [];

      for (let x of array) {
            if (x % 2 === 0) {
                  arrayFinal.push(x * x)
            }
      }

      return arrayFinal;
}

const metodo = (array) => {
      let arrayFinal = [];
      for (let x of array) {
            if (x % 2 === 0) {
                  arrayFinal.push(x * x)
            }
      }

      return arrayFinal;
}
//     essa função recebe um array e verifica se o resto da divisão de 2 é 0 se for ele das um push nesse elemento 
//   e coloca no arrayFinal, mas ele faz o elemento * ele mesmo e coloca no array. o nome desse função poderia ser 
//   verificaArray

//EXERCICIO 4

//a.
const dados = ("Me chamo Andre, Tenho 55 anos, Moro em Criciúma, e sou estudante.")
console.log(dados)

//b.
const infosPessoais = (nome, idade, cidade, estudante) => {
      if (estudante === true) {
            console.log(`Eu sou ${nome}, tenho ${idade}, moro em ${cidade} e sou estudante.`)
      }
      else if (estudante === false) {
            console.log(`Eu sou ${nome}, tenho ${idade}, moro em ${cidade} e não sou sou estudante.`)
      }
}

const resultado = infosPessoais("Andre", 55, "Criciuma", true)

//EXERCICIO 5

//a.
function soma(num1, num2) {
      return num1 + num2;

}

console.log('A soma é:', soma(2, 4));

//b.

function comparaNum(num1, num2) {
      return num1 > num2
}


console.log('O primeiro numero é maior que o primeiro:', comparaNum(8, 5))

//c.

function imprimeMens(mensagem) {
      for (i = 0; i < 10; i++) {
            console.log(mensagem)
      }

};

imprimeMens("Olá Aventureiros!!!");

//EXERCICIO 6

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];
//a.

function calculaQuant(arrayDeNumeros) {
      return arrayDeNumeros.length
};
console.log('Quantidade de numero no array:', calculaQuant(array));

//b.

function verificaPar(numero) {
      let numeroPar;
      if (numero % 2 === 0) {
            numeroPar = true
      } else {
            numeroPar = false
      }
      return numeroPar;

}
console.log('O numero é par:', verificaPar(8))

//c.

function calculaNumerosPares(arrayDeNumeros) {
      let numerosPares = [];
      for (const numero of arrayDeNumeros) {
            if (numero % 2 === 0) {
                  numerosPares.push(numero)
            }
      }
      return numerosPares.length
}
console.log('Quantidade de numeros pares:', calculaNumerosPares(array));

//d.

function calculaNumerosPares2(arrayDeNumeros) {
      let numerosPares = [];
      for (const numero of arrayDeNumeros) {
            if (verificaPar(numero)) {
                  numerosPares.push(numero)
            }
      }
      return numerosPares.length
}
console.log('Quantidade de pares:', calculaNumerosPares2(array));












