// const loginUsuario = document.querySelector('#login-usuario');//const para pegar o valor do email. lembra de usar o .value
// const loginSenha = document.querySelector('#login-senha'); //const para pegar o valor da senha. lembra de usar o .value
// const btnEntrar = document.querySelector('#botao-entrar')
// const cadastroEmail = document.querySelector('#cadastro-email');
// const cadastroSenha = document.querySelector('#cadastro-senha');
// const cadastroRepeteSenha = document.querySelector('#cadastro-repete-senha');
// const inputDescricao = document.querySelector('#input-descricao');
// const inputDetalhamento = document.querySelector('#input-detalhamento');
// const btnApagar = document.querySelector('#btn-apagar');
// const btnEditar = document.querySelector('#btn-entrar');
const btnSalvar = document.querySelector('#btn-salvar');
let numeroDeLinhas = 1;
btnSalvar.addEventListener("click", function(event){
    event.preventDefault()
    const inputDescricao = document.querySelector('#input-descricao');
    const inputDetalhamento = document.querySelector('#input-detalhamento');
    // const numeroUltimoItem = document.querySelector('#tabela').children[1].children.length
    criaItem(numeroDeLinhas,inputDescricao.value, inputDetalhamento.value)
  });

function criaItem(posicao,descricao,detalhamento) {
    //seleciona a tabela
    const tabela = document.querySelector('#tabela')
    //cria linha
    const novaLinha = document.createElement('tr')
    //cria as células
    const CelNumero = document.createElement("td");
    const CelDescricao = document.createElement("td");
    const CelDetalhamento = document.createElement("td");
    const CelAcao = document.createElement("td");
    //cria os botoes
    const btnApagar = document.createElement("button");
    const btnEditar = document.createElement("button");
    //coloca classe nos botoes
    btnApagar.classList.add('btn-apagar');
    btnEditar.classList.add('btn-editar');
    //coloca o conteudo dos botoes
    btnApagar.textContent = "Apagar";
    btnEditar.textContent = "Editar";
    //define o conteudo das celulas
    CelNumero.textContent = posicao
    CelDescricao.textContent = descricao;
    CelDetalhamento.textContent = detalhamento;
    CelAcao.appendChild(btnApagar);
    CelAcao.appendChild(btnEditar)
    //adiciona celulas a nova linha
    novaLinha.appendChild(CelNumero)
    novaLinha.appendChild(CelDescricao)
    novaLinha.appendChild(CelDetalhamento)
    novaLinha.appendChild(CelAcao)
    //adiciona nova linha a tabela
    tabela.appendChild(novaLinha)
    //limpa os campos de imput
    const inputDescricao = document.querySelector('#input-descricao');
    const inputDetalhamento = document.querySelector('#input-detalhamento');
    inputDescricao.value = ''
    inputDetalhamento.value = ''
    //adiciona 1 ao contador de linhas
    numeroDeLinhas++
}