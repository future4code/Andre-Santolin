//Exercício 1

function inverteArray(array) {
   let arrayInvertido = [];
   for(let i = array.length - 1; i >= 0; i-- ) {
       arrayInvertido.push(array[i])
     }
        return arrayInvertido
}

//Exercício 2

function retornaNumerosParesElevadosADois (array) {
   let novoArray = [];
for(let i = 0; i < array.length; i++) {
if(array[i] % 2 === 0) {
      novoArray.push(array[i] * array[i])
    }
  }
 return novoArray
}

//Exercício 3

function retornaNumerosPares (array) {
   let pares = [];
 for(let i = 0; i < array.length; i++) {
 if(array[i] % 2 === 0) {
      pares.push(array[i])
    }
  }
  return pares
}

//Exercício 4

function retornaMaiorNumero(array) {
   let maiorNumero = array[0];
   for (let i = 0; i < array.length; i++) {
   if(maiorNumero < array[i]) {
      maiorNumero = array[i]
   }
   }
   return maiorNumero 
}
   

//Exercício 5

function retornaQuantidadeElementos (array) {
   let quantidadeElementos = array.length 

   return quantidadeElementos
}

//Exercício 6

function retornaExpressoesBooleanas() {

 const booleano1 = true
 const booleano2 = false
 const booleano3 = !booleano2 
 const booleano4 = !booleano3 
 let novoArray = []

 function Resposta(bo1, bo2, bo3, bo4){
   let resp = bo1 && bo2 && !bo4
      novoArray.push(resp)
   resp = (bo1 && bo2) || !bo3
      novoArray.push(resp)
   resp = (bo2 || bo3) && (bo4 || bo1)
      novoArray.push(resp)
    resp = !(bo2 && bo3) || !(bo1 && bo3)
      novoArray.push(resp)
   resp =  !(bo1) && !(bo3) || (!bo4 && bo3 && bo3)
      novoArray.push(resp)
 }
 Resposta(booleano1, booleano2, booleano3, booleano4,)
 return novoArray

}
//Exercício 7

function retornaNNumerosPares(n) {
   const novoArray = [];
 for(let number = 0; novoArray.length < n; number++) {
  if(number % 2 === 0) {
    novoArray.push(number)
  }
 }
 return novoArray
}

// Exercício 8

function checaTriangulo(a, b, c) {
   if(a !== b && b !== c) {
      return'Escaleno'
     } else if(a === b && b === c) {
       return'Equilátero'
      } else {
        return'Isósceles'
      }
}

// Exercício 9

function comparaDoisNumeros(num1, num2) {
 let maiorNumero;
 let menorNumero;
 let maiorDivisivelporMenor;

 if(num1 > num2) {
    maiorNumero = num1;
    menorNumero = num2;
 } else {
    maiorNumero = num2;
    menorNumero = num1;
  }

  maiorDivisivelporMenor = maiorNumero % menorNumero === 0;

  const diferenca = maiorNumero - menorNumero;

  return {
    maiorNumero: maiorNumero,
    maiorDivisivelporMenor: maiorDivisivelporMenor,
    diferenca: diferenca
  }
}

// Exercício 10

function segundoMaiorEMenor(array) {
 let menor = Infinity
 let maior = 0
 let segundoMenor = Infinity
 let segundoMaior = 0
 let indiceMenor = 0
 let indiceMaior = 0
 let novoArray = []

 for(let i of array) {
  if(i < menor) {
     menor = i
     indiceMenor = array.indexOf(menor)
  } 
  if(i > maior) {
     maior = i
     indiceMaior = array.indexOf(maior)
     }
  }
   array.splice(indiceMaior, 1)
   array.splice(indiceMenor, 1)

  for(let i of array) {
   if(i < segundoMenor) {
     segundoMenor = i
  }
  if(i > segundoMaior) {
     segundoMaior = i
  }
 }
  novoArray.push(segundoMaior)
  novoArray.push(segundoMenor)

  return novoArray
}


//Exercício 11

function ordenaArray(array) {
 
  array.sort((a, b) => a - b);

  return array  
 
}

// Exercício 12

function filmeFavorito() {
   const movie = {
   nome: 'O Diabo Veste Prada',
   ano: 2006,
   diretor: 'David Frankel',
   atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci'] 
   }
   return movie   
}

// Exercício 13

function imprimeChamada() {
   const movie = {
   nome: 'O Diabo Veste Prada',
   ano: 2006,
   diretor: 'David Frankel',
   atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci'] 
   }

   let atoresConcat = ""
 for(let i = 0; i < movie.atores.length; i++) {
  if(i === movie.atores.length - 1) {
    atoresConcat += movie.atores[i]
  } else {
     atoresConcat += movie.atores[i] + ", "
    }
  }  
  return `Venha assistir ao filme ${movie.nome}, de ${movie.ano}, dirigido por ${movie.diretor} e estrelado por ${atoresConcat}.`
}

// Exercício 14

function criaRetangulo(lado1, lado2) {
   const medidaRetangulo = {
    largura: lado1,
    altura: lado2,
    perimetro: 2 * (lado1 + lado2),
    area: lado1 * lado2,
   }
return medidaRetangulo
}

// Exercício 15

function anonimizaPessoa(pessoa) {
   return {
      ...pessoa,
      nome: 'ANÔNIMO'
   }
}
// Exercício 16

const arrayDePessoas = [
  { nome: "Pedro", idade: 20 },
  { nome: "João", idade: 10 },
  { nome: "Paula", idade: 12 },
  { nome: "Artur", idade: 89 } 
]
// Exercício 16, letra A

function maioresDe18(arrayDePessoas) {
   const maiorIdade = arrayDePessoas.filter((pessoa) => {
      return pessoa.idade >= 18
     })
     return maiorIdade
}

// Exercício 16, letra B

function menoresDe18(arrayDePessoas) {
   const menorIdade = arrayDePessoas.filter((pessoa) => {
      return pessoa.idade < 18
     })
     return menorIdade
}

// Exercício 17, letra A

function multiplicaArrayPor2(array) {
   let multiplicarPor2 = [];
   for(let i = 0; i < array.length; i++) {
    { multiplicarPor2.push(array[i] * 2)
       }
     }
    return multiplicarPor2
}

// Exercício 17, letra B

function multiplicaArrayPor2S(array) {
   const retornoString = array.map((num) => {
      return(num * 2).toString()
      })
     return retornoString
}

// Exercício 17, letra C

function verificaParidade(array) {
   const parEimpar = array.map((num) => {
      if (num % 2 === 0) {
        return `${num} é par`
      } else {
        return `${num} é ímpar`
      }
    })
  
    return parEimpar
}

// Exercício 18

const pessoas = [
  { nome: "Paula", idade: 12, altura: 1.8},
  { nome: "João", idade: 20, altura: 1.3},
  { nome: "Pedro", idade: 15, altura: 1.9},
  { nome: "Luciano", idade: 22, altura: 1.8},
  { nome: "Artur", idade: 10, altura: 1.2},
  { nome: "Soter", idade: 70, altura: 1.9}
]

//Exercício 18, letra A

function retornaPessoasAutorizadas() {
   let pessoasAutorizadas = [];
   for(const pessoa of pessoas) {
     if(pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60) {
       pessoasAutorizadas.push(pessoa)
     }
   }
   return pessoasAutorizadas;
}


// Exercício 18, letra B

function retornaPessoasNaoAutorizadas() {
   let pessoasNaoAutorizadas = [];
  for(const pessoa of pessoas) {
    if(pessoa.altura < 1.5 || pessoa.idade < 14 || pessoa.idade > 60) {
      pessoasNaoAutorizadas.push(pessoa)
    }
  }
  return pessoasNaoAutorizadas;
}

//Exercício 19

const consultas = [
  { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
  { nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
  { nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
  { nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
  ]

function retornaEmailConsulta() {
   
   return consultas.map((consulta) => {
      let emailFinal = "Olá, "
  
      if (consulta.cancelada) {
        if (consulta.genero === "feminino") {
          emailFinal += "Sra. "
        } else {
          emailFinal += "Sr. "
        }
  
        emailFinal += consulta.nome + ". "
        emailFinal += "Estamos enviando esta mensagem para "
  
        if (consulta.genero === "feminino") {
          emailFinal += "lembrá-la "
        } else {
          emailFinal += "lembrá-lo "
        }
  
        emailFinal += "da sua consulta no dia " + consulta.dataDaConsulta + ". "
        emailFinal += "Por favor, acuse o recebimento deste-email."
      } else {
        if (consulta.genero === "feminino") {
          emailFinal += "Sra. "
        } else {
          emailFinal += "Sr. "
        }
  
        emailFinal += consulta.nome + ". "
        emailFinal += "Infelizmente sua consulta marcada para o dia "
        emailFinal += consulta.dataDaConsulta + " foi cancelada. "
        emailFinal += "Se quiser, pode entrar em contato conosco para remarcá-la."
      }
      return emailFinal
    });
  
}

//Exercício 20

const contas = [
  { cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
  { cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
  { cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
  { cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
  { cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
  { cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
   contas.forEach((conta) => {
      let totalDeCompras = 0
      conta.compras.forEach((valor) => {
        totalDeCompras += valor
      })
      conta.saldoTotal -= totalDeCompras
    })
    return contas
  }
