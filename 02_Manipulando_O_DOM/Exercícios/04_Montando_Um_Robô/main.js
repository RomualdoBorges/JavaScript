// Você irá criar um botão que, ao ser clicado, faz aparecer esta lista, e também criará um segundo botão que, ao ser clicado, faz com que a lista de cores volte a sumir.

const lista = document.querySelector("ul");

//Botão Abrir -------------------------------------
const botaoAbrir = document.querySelector("#botao");

function mostrarLista() {
  lista.setAttribute("data-lista", "mostrar");
}

botaoAbrir.addEventListener("click", mostrarLista);

//Botão Fechar-------------------------------------
const botaoFechar = document.querySelector(".close");
console.log(botaoFechar);

function fecharLista() {
  lista.setAttribute("data-lista", "esconder");
}

botaoFechar.addEventListener("click", fecharLista);
