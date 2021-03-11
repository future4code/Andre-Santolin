
let arrayDePosts = []

//capturando valores dos elementos do html

const tituloPost = document.getElementById('titulo-post')
const autor = document.getElementById('autor-post')
const conteudo = document.getElementById('conteudo-post')
const imagem = document.getElementById('imagem-post')

//objeto

const todoPost = {
    titulo: tituloPost.value,
    autor: autor.value,
    conteudo: conteudo.value,
    imagem: imagem.value
}

//array

arrayDePosts.push(todoPost)
i = 0

//imprime no console
console.log(todoPost)
console.log(arrayDePosts)

//função apagar inputs

function apagaInput() {
    tituloPost.value = "" 
    autor.value = ""
    conteudo.value = ""
    imagem.value = ""       
}

//adiciona uma div no html com os posts
function adicionaPost() {
    const containerDePost = document.getElementById("container-de-posts")
    containerDePost.innerHTML += `<div><h1>${tituloPost.value}</h1> <h3>${autor.value}</h3> <p>${conteudo.value}</p></div>`
     if (imagem.value.includes('.png') || imagem.value.includes('.jpg')){
        containerDePost.innerHTML += `<img src=${imagem.value}>`
} else {
    alert ("Nenhuma imagem foi adicionada")
}
apagaInput()
}

//função aperta o botão
function Enter(evento){
    adicionaPost()
}
console.log(imagem)