//EXERCICIOS AULA 12 CONDICIONAIS

//EXERCICIO 1 DE INTERPRETAÇÃO DE CODIGO

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if(numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }
// o programa pega o numero que o usuario digita e se o resto da divisão por 2 for 0 ele imprime a mensagem no console passou no teste
// se ele não for 0 ele cai no else que imprime no console ''nao passou no teste''

//EXERCICIO 2 DE INTERPRETAÇÃO DE CODIGO

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// o programa pede ao usuario uma fruta, caso seja laranja, maçã, uva ou pera ele tem um preço pré determinado
// caso seja outra fruta o valor vai ser 5,00, ele imprime no console a fruta e o valor
// a mensagem no console se a fruta for Maçã será '' O preço da fruta Maçã é R$ 2.25"
//Ele apareceria o valor do default

//EXERCICIO 3 DE INTERPRETAÇÃO DE CODIGO

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

//a primeira linha esta perguntando ao usuario pra digitar um numero e transformando o a resposta que vem em string pra um Number.
// se digitar 10 o console imprime a mensagem '' esse numero passou no teste'' 
//se for -10 o código da erro por que o valor tem que ser maior que 0
//o erro do console é justificado por que o escopo filho não compartilha informações com escopo pai, e o console.log está no escopo pai, ja a variavel no escopo filho.

//EXERCICIO 4 DE ESCRITA DE CODIGO

// let idadeUsuario = Number(prompt("Qual a sua idade?"))

// if(idadeUsuario >= 18){
//     console.log("Você pode dirigir")
// } else {
//     console.log("Você não pode dirigir.")
// }

//EXERCICIO 5 DE ESCRITA DE CODIGO

// let turnoDoDia = prompt("Olá, por favor digite o turno que você estuda, se for Matutino utilize um (M) se for Vespértino um (V) se for Noturno um (N).")

// if (turnoDoDia === "M"){
//     console.log("Bom dia!!")
// }
//     else if (turnoDoDia === "V"){
//     console.log("Boa tarde!!")
// }
//     else if (turnoDoDia === "N") {
//         console.log("Boa noite!!")
// } else {
//     console.log("Não conseguimos identificar sua resposta.")
// }

//EXERCICIO 6 DE ESCRITA DE CODIGO

// let turnoDoDia = prompt("Olá, por favor digite o turno que você estuda, se for Matutino utilize um (M) se for Vespértino um (V) se for Noturno um (N).")

// switch (turnoDoDia){
//     case "M":
//     console.log("Bom dia!!")
//     break
//     case "V":
//     console.log("Boa tarde!!")
//     break
//     case "N":
//      console.log("Boa noite!!")
//      break
//      default:
//     console.log("Não conseguimos identificar sua resposta!")
//     break

// }

//EXERCICIO 7 DE ESCRITA DE CODIGO

// let generoFilme = prompt("Qual o gênero do filme?")
// let preçoFilme = Number(prompt("Qual o valor do filme?"))

// if (generoFilme === "Fantasia" && preçoFilme <= 15){
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme!")
// }

//EXERCICIO DESAFIO 1

// let generoFilme = prompt("Qual o gênero do filme?")
// let preçoFilme = Number(prompt("Qual o valor do filme?"))

// if (generoFilme === "Fantasia" && preçoFilme <= 15){
//     let snack = prompt("Qual snack que você quer comprar?")
//     console.log("Bom filme! com", snack)
// } else {
//     console.log("Escolha outro filme!")
// }

