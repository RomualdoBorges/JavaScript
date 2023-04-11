// Declare a função tocaSomClap, e desenvolva dentro dela o código necessário para dar play no áudio do som clap.

function tocaSomClap() {
  document.querySelector("#som_tecla_clap").play();
}

//Adicionando a função tocaSomPom no botão tecla_pom.
document.querySelector(".tecla_clap").onclick = tocaSomClap;
