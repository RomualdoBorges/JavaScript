// Como vimos nesta aula, usamos a estrutura de repetição for, para percorrer uma lista de forma mais otimizada, onde em sua declaração criamos a variável contadora da repetição, a condição de interrupção das repetições e a condição de incrementação da variavel contadora.

// Faça um script que percorra a lista de teclas do AluraFone, e ao clicar em qualquer tecla do teclado, imprima o valor no campo Digite seu telefone.
const listaDeTeclas = document.querySelectorAll("input[type=button]");
const inputTel = document.querySelector("input[type=tel]");

for (indice = 0; indice < listaDeTeclas.length; indice++) {
  const tecla = listaDeTeclas[indice];

  tecla.onclick = function () {
    inputTel.value = inputTel.value + tecla.value;
  };
}
