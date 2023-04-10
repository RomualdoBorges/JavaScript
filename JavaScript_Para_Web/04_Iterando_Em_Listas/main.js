//Criando a nossa própria função tocaSom() com um parâmetro para informar o id do elemento Audio.
function tocaSom(idElementAudio) {
  document.querySelector(idElementAudio).play();
}

//Criando uma referência constante para a lista de teclas.
const listaDeTeclas = document.querySelectorAll(".tecla");

// //Criando uma referência variável de contador.
// let contador = 0;

// //Criando uma estrutura de repetição While (enquanto).
// while (contador < listaDeTeclas.length) {
//   const tecla = listaDeTeclas[contador];
//   const instrumento = tecla.classList[1];

//   //Template String
//   const idAudio = `#som_${instrumento}`;

//   //Criando uma função anônima
//   tecla.onclick = function () {
//     tocaSom(idAudio);
//   };

//   contador = contador + 1;
// }

//Criando uma estrutura de repetição for (para).
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1];
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  };
}
