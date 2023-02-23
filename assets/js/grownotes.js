//* pega o formulario
const formulario = document.querySelector('form');

//*verifica se a descrição está preenchida no blur do campo
formulario.descricao.addEventListener("blur", () => {
    if(formulario.descricao.value === ""){
        formulario.descricao.classList.add("review")
        return
    }
        else{
            formulario.descricao.classList.remove("review");
        }
    });

//* Função para limpar os campos do formulário
const limpaCampos = () => {
        formulario.descricao.value = "";
        formulario.detalhamento.value = "";
        formulario.descricao.focus();
}

//* Função para criar a nota na tela
const criaNotaNaTela = (descricao, detalhamento) => {
    //criar um elemento tr
    const tr = document.createElement("tr");
    //criar um elemento td para a descrição
    const tdDescricao = document.createElement("td");
    //criar um elemento td para o detalhamento
    const tdDetalhamento = document.createElement("td");
    //criar um elemento td para o botão de editar e excluir
    const tdBtn = document.createElement("td");
    //criar um elemento button para o botão de editar
    const btnEditar = document.createElement("button");
    //criar um elemento button para o botão de excluir
    const btnExcluir = document.createElement("button");
    //colocar o texto do botão de editar
    btnEditar.textContent = "Editar";
    //colocar o texto do botão de excluir
    btnExcluir.textContent = "Excluir";
    //colocar a descrição no td
    tdDescricao.textContent = descricao;
    //colocar o detalhamento no td
    tdDetalhamento.textContent = detalhamento;
    //colocar o botão de editar no td
    tdBtn.appendChild(btnEditar);
    //colocar o botão de excluir no td
    tdBtn.appendChild(btnExcluir);
    //colocar o td da descrição na tr
    tr.appendChild(tdDescricao);
    //colocar o td do detalhamento na tr
    tr.appendChild(tdDetalhamento);
    //colocar o td dos botões na tr
    tr.appendChild(tdBtn);
    //colocar a tr na tabela
    document.querySelector("tbody").appendChild(tr);
}

//* Função para remover nota da página e do localStorage adicionando o evento de click em todos os botão de excluir
const removeNota = () => {
        //pega todos os botões de excluir
        const btnsExcluir = document.querySelectorAll("tbody button:nth-child(2)");
        //adiciona o evento de click em todos os botões de excluir
        btnsExcluir.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                //pega a descrição da nota
                const descricao = e.target.parentNode.parentNode.firstChild.textContent;
                //pega o detalhamento da nota
                const detalhamento = e.target.parentNode.parentNode.firstChild.nextSibling.textContent;
                //pega as notas do localStorage
                const notas = JSON.parse(localStorage.getItem("notas"));
                //remove a nota do array
                notas.forEach((nota, index) => {
                    if(nota.descricao === descricao && nota.detalhamento === detalhamento){
                        notas.splice(index, 1);
                    }
                })
                //adiciona o array de notas no localStorage
                localStorage.setItem("notas", JSON.stringify(notas));
                //remove a nota da página
                e.target.parentNode.parentNode.remove();
                //coloca o foco no campo descrição
                formulario.descricao.focus();
            })
        })
}

//* Função para editar nota da página e do localStorage adicionando o evento de click em todos os botão de editar
const editaNota = () => {
        //pega todos os botões de editar
        const btnsEditar = document.querySelectorAll("tbody button:nth-child(1)");
        //adiciona o evento de click em todos os botões de editar
        btnsEditar.forEach((btn) => {
            btn.addEventListener("click", (e) => {
                //pega a descrição da nota
                const descricao = e.target.parentNode.parentNode.firstChild.textContent;
                //pega o detalhamento da nota
                const detalhamento = e.target.parentNode.parentNode.firstChild.nextSibling.textContent;
                //pega as notas do localStorage
                const notas = JSON.parse(localStorage.getItem("notas"));
                //remove a nota do array
                notas.forEach((nota, index) => {
                    if(nota.descricao === descricao && nota.detalhamento === detalhamento){
                        //adiciona o valor da descrição no campo descrição
                        formulario.descricao.value = nota.descricao;
                        //adiciona o valor do detalhamento no campo detalhamento
                        formulario.detalhamento.value = nota.detalhamento;
                        //remove a nota do array
                        notas.splice(index, 1);
                    }
                })
                //adiciona o array de notas no localStorage
                localStorage.setItem("notas", JSON.stringify(notas));
                //remove a nota da página
                e.target.parentNode.parentNode.remove();
                //coloca o foco no campo descrição
                formulario.descricao.focus();
            })
        })
}

//* Função para adicionar nota na página e no localStorage
const addNota = () => {
    //verifica se a descrição está preenchida no click do botão
    if(formulario.descricao.value === ""){
        //adiciona a classe review no campo descrição
        formulario.descricao.classList.add("review")
        return
    } else {
            //remove a classe review no campo descrição
            formulario.descricao.classList.remove("review");
        }
    //captura o valor da descrição e do detalhamento
    const descricao = formulario.descricao.value;
    const detalhamento = formulario.detalhamento.value;
    //chama a função para criar a nota na tela
    criaNotaNaTela(descricao, detalhamento);

    //* Função para criar a nota no localStorage
    const criaNotaNoLocalStorage = (descricao, detalhamento) => {
        //cria um objeto com a descrição e o detalhamento
        const nota = {
            descricao,
            detalhamento
        }
        //verifica se já existe notas no localStorage
        if(localStorage.getItem("notas") === null || localStorage.getItem("notas") === ""){
            //cria um array de notas
            const notas = [];
            //adiciona a nota no array
            notas.push(nota);
            //adiciona o array de notas no localStorage
            localStorage.setItem("notas", JSON.stringify(notas));
        } else {
            //pega as notas do localStorage
            const notas = JSON.parse(localStorage.getItem("notas"));
            //adiciona a nota no array
            notas.push(nota);
            //adiciona o array de notas no localStorage
            localStorage.setItem("notas", JSON.stringify(notas));
        }
    }
    //chama a função para criar a nota no localStorage
    criaNotaNoLocalStorage(descricao, detalhamento);
    //chama a função para remover nota da página e do localStorage
    removeNota();
    //chama a função para editar nota da página e do localStorage
    editaNota();
    //chama a função para limpar os campos do formulário
    limpaCampos();
}

//* Função para carregar notas do localStorage
const carregaNotas = () => {
    //pega as notas do localStorage
    const notas = JSON.parse(localStorage.getItem("notas")) || [];
    notas.forEach((nota) => {
        //separa a descrição e o detalhamento
        const descricao = nota.descricao;
        const detalhamento = nota.detalhamento;
        //chama a função para criar a nota na tela
        criaNotaNaTela(descricao, detalhamento);
    })}
//chama a função para carregar notas do localStorage
carregaNotas();

//* Escuta o evento de click no botão de adicionar nota
formulario.salvar.addEventListener("click", addNota)

//* Escuta o enter no campo detalhamento
formulario.detalhamento.addEventListener("keyup", (e) => {
    if(e.key === "Enter"){
        addNota();
    }
})

//chama a função para remover nota da página e do localStorage
removeNota();

//chama a função para editar nota da página e do localStorage
editaNota();