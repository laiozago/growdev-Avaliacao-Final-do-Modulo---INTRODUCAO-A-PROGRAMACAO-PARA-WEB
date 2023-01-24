const btnSalvar = document.querySelector('#btn-salvar');

let numeroDeLinhas = document.querySelectorAll('tr').length;//esse contador tem que passar a contar quantas linhas existem
//função para criar item na tabela
function criaItem(posicao,descricao,detalhamento) {
    //seleciona a tabela
    const tabela = document.querySelector('#tabela')
    //cria linha
    const novaLinha = document.createElement('tr')
    // adiciona id na linha
    novaLinha.setAttribute("id", `linha${numeroDeLinhas}`);
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
    //coloca id nos botoes
    btnApagar.setAttribute("id", "btn-apagar");
    btnEditar.setAttribute("id", "btn-editar");
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
    //função para apagar item da lista com o click do botao apagar
    btnApagar.addEventListener("click", function(event) {
    btnApagar.parentNode.parentNode.remove()
})
}
//escuta evento de click no botao salvar
btnSalvar.addEventListener("click", function(event){
    event.preventDefault()
    const inputDescricao = document.querySelector('#input-descricao');
    const inputDetalhamento = document.querySelector('#input-detalhamento');
    if (!inputDescricao.value) {
        inputDescricao.classList.add('input-descricao')
    }else {
        inputDescricao.classList.remove('input-descricao')
        criaItem(numeroDeLinhas,inputDescricao.value, inputDetalhamento.value)
    }
    // const numeroUltimoItem = document.querySelector('#tabela').children[1].children.length
}); 

