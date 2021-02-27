// EXERCICIOS DE LOOPS OU LAÇOS

//EXERCICIO 1 DE INTERPRETAÇÃO DE CODIGO

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// ele executa uma série de processos até que o ultimo valor a ser somado na variavel seja <5
// ele soma o valor + o indice, resultado final é 10

//EXERCICIO 2 DE INTERPRETAÇÃO DE CODIGO

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

//ele vai procurar na lista de numeros os numeros maiores que 18 e vai imprimir no console
// for of não acessa o indice da lista

// DESAFIOS

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "0"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
//o resultado seriam 4 linhas e cada linha tem uma quantidade de 0 respectivo a linha correspondente, no caso
// 0
// 00
// 000
// 0000

//EXERCICIO 1 DE PRATICA DE ESCRITA

// a.
//let arrayOriginal = [10, 20, 30, 40, 50, 60, 70, 80]

//for(let numero of arrayOriginal){
//  console.log(numero)
// }

//b.
//let arrayOriginal = [10, 20, 30, 40, 50, 60, 70, 80]

//for(let numero of arrayOriginal){
//console.log(numero / 10)
// }

// c.
// const arrayOriginal =  [30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// const novoArray = []
// for(let num of arrayOriginal) {
//     if(num % 2 === 0) {
//         novoArray.push(num)
//     }
// }
// console.log(novoArray)

// d.
// const arrayOriginal =  [30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// const novoArray = []
// for(let i = 0; i < arrayOriginal.length; i++) {
//     novoArray.push(`O elemento do index ${i} é ${arrayOriginal[i]}.`)
// }
// console.log(novoArray)

//e.
// const arrayOriginal =  [30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// let maior = 0
// let menor = Infinity

//  for (let i = 0; i < arrayOriginal.length; i++) {
//      const elemento = arrayOriginal[i]
//      const elemento1= arrayOriginal[i]
//      if (elemento > maior) {
//         maior = elemento
//      } if (elemento1 < menor){
//      menor = elemento1
//     }
//  }
//  console.log(`O maior numero é ${maior} e o menor é ${menor}`)
