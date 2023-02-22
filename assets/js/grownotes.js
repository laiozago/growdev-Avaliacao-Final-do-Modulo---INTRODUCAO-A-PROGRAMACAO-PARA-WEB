//* pega o formulario
const formulario = document.querySelector('form');

//* Função para adicionar nota na página e no localStorage

const addNota = () => {
    console.log("Adicionando nota");
}

//* Escuta o evento de click no botão de adicionar nota
formulario.salvar.addEventListener("click", addNota)