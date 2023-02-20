//*código para a página de grownotes
//pega o botão de salvar
const btnSalvar = document.querySelector('#btn-salvar');
let numeroDeLinhas;

//*chama a função para carregar os itens do LocalStorage ao carregar a página
carregaItens()

//*função para salvar no LocalStorage
const salvaNoLocalStorage = (posicao, descricao, detalhamento) => {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    let item = { posicao, descricao, detalhamento };
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
}

//*função para criar item na tabela
const criaItem = (posicao,descricao,detalhamento) => {
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
    //salva no LocalStorage
    salvaNoLocalStorage(posicao, descricao, detalhamento);
    //limpa os campos de imput
    const inputDescricao = document.querySelector('#input-descricao');
    const inputDetalhamento = document.querySelector('#input-detalhamento');
    inputDescricao.value = ''
    inputDetalhamento.value = ''
    //adiciona 1 ao contador de linhas
    numeroDeLinhas++
    //função para apagar item da lista com o click do botao apagar
    btnApagar.addEventListener("click", function(event) {
        const id = event.target.parentNode.parentNode.getAttribute("id");
        document.querySelector(`#${id}`).remove();
        //remove do LocalStorage
        let items = JSON.parse(localStorage.getItem('items')) || [];
        items = items.filter(item => item.posicao != posicao)
        localStorage.setItem('items', JSON.stringify(items));
    })

    //*função para editar item da lista com o click do botao editar
    const editaItem = () => {
        let btnEditar = document.querySelectorAll('#btn-editar');
        btnEditar.forEach(btn => {
        btn.addEventListener("click", function(event) {
            const id = event.target.parentNode.parentNode.getAttribute("id");
            const linha = document.querySelector(`#${id}`);
            const celDescricao = linha.querySelector('td:nth-child(2)');
            const celDetalhamento = linha.querySelector('td:nth-child(3)');
            const inputDescricao = document.querySelector('#input-descricao');
            const inputDetalhamento = document.querySelector('#input-detalhamento');
            inputDescricao.value = celDescricao.textContent;
            inputDetalhamento.value = celDetalhamento.textContent;
            linha.remove();
            //remove do LocalStorage
            let items = JSON.parse(localStorage.getItem('items')) || [];
            items = items.filter(item => item.posicao != id.slice(4))
            localStorage.setItem('items', JSON.stringify(items));
        })
    })
}

    //*chama a função para editar item da lista com o click do botao editar
    editaItem();
}

//*função para carregar os itens do LocalStorage
const carregaItens = () => {
    //confere o que está na tela
    const tabela = document.querySelector('#tabela')
    //se houver linhas, remove todas
    if (tabela.rows.length > 1) {
        for (let i = tabela.rows.length - 1; i > 0; i--) {
            tabela.deleteRow(i);
        }
    }
    //carrega os itens do LocalStorage
    let items = JSON.parse(localStorage.getItem('items')) || [];
    items.forEach(item => {
        criaItem(item.posicao, item.descricao, item.detalhamento)
    })
}

//*escuta evento de click no botao salvar
btnSalvar.addEventListener("click", function(event){
    event.preventDefault()
    //conta quantas linhas existem
    numeroDeLinhas = document.querySelectorAll('tr').length;
    const inputDescricao = document.querySelector('#input-descricao');
    const inputDetalhamento = document.querySelector('#input-detalhamento');
    if (!inputDescricao.value) {
        inputDescricao.classList.add('input-descricao')
    }else {
        inputDescricao.classList.remove('input-descricao')
        criaItem(numeroDeLinhas,inputDescricao.value, inputDetalhamento.value)
    }
}); 

//todo: mudar o localStorage para um banco de dados para poder ter mais de um usuário e cada usuário ter seu próprio banco de dados

//usuarios = [{login: "teste", senha: "teste", notas: [{posicao: 1, descricao: "teste", detalhamento: "teste"}]}]