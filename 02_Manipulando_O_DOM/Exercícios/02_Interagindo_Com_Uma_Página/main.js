// Crie uma função anônima que retorne a frase "Fui clicado". Esta função será aplicada em conjunto de um evento de clique.

const botao = document.querySelector("#calcular");
const resultado = document.querySelector(".resultado");

botao.addEventListener("click", (event) => {
  resultado.innerHTML = "Fui clicado.";
});
