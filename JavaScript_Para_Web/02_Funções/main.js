//play(); - Método tenta iniciar a reprodução da mídia.

//Criando a nossa própria função tocaSomPom();
function tocaSomPom() {
  document.querySelector("#som_tecla_pom").play();
}

//Adicionando a função tocaSomPom no botão tecla_pom.
document.querySelector(".tecla_pom").onclick = tocaSomPom;
