//Criando a nossa própria função tocaSomPom();
function tocaSomPom() {
  document.querySelector("#som_tecla_pom").play();
}

//Criando uma referência constante para a lista de teclas.
const listaDeTeclas = document.querySelectorAll(".tecla");

//Acessar um tecla específica da lista e acessar suas propriedades
listaDeTeclas[0].onclick = tocaSomPom;
