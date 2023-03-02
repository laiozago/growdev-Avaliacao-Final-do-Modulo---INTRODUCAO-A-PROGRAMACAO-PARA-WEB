import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
//* pega o formulario
const formulario = document.querySelector('form');
//* função para gerar o id da nota
const gerarId = () => {
    let myuuid = uuidv4();
    //retorna o ultimoId
    return myuuid;
}

//*Pega o usuario logado
const usuarioLogado = localStorage.getItem("usuarioLogado");

//*verifica se a descrição está preenchida no blur do campo
formulario.descricao.addEventListener("blur", () => {
        if (formulario.descricao.value === "") {
            formulario
                .descricao
                .classList
                .add("review")
            return
        } else {
            formulario
                .descricao
                .classList
                .remove("review");
        }
    });

//* Função para limpar os campos do formulário
const limpaCampos = () => {
    formulario.descricao.value = "";
    formulario.detalhamento.value = "";
    formulario
        .descricao
        .focus();
    numerarLinhas();
}

//* Função para criar a nota na tela
const criaNotaNaTela = (id,descricao, detalhamento) => {
    //criar um elemento tr
    const tr = document.createElement("tr");
    //criar um elemento td para o id
    const tdId = document.createElement("td");
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
    //colocar o id no td
    tdId.textContent = id;
    //colocar a descrição no td
    tdDescricao.textContent = descricao;
    //colocar o detalhamento no td
    tdDetalhamento.textContent = detalhamento;
    //colocar o botão de editar no td
    tdBtn.appendChild(btnEditar);
    //colocar o botão de excluir no td
    tdBtn.appendChild(btnExcluir);
    //colocar o id na tr
    tr.appendChild(tdId);
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
            const descricao = e.target.parentNode.parentNode.firstChild.nextSibling.textContent;
            //pega o detalhamento da nota
            const detalhamento = e.target.parentNode.parentNode.firstChild.nextSibling.nextSibling.textContent;
            //pega o id da nota
            const id = e.target.parentNode.parentNode.firstChild.textContent;
            //pega os usuarios do localStorage
            const usuarios = JSON.parse(localStorage.usuarios)
            //pega as notas o usuario logado
            let notas;
            usuarios.forEach(usuario => {
                if (usuario.email === usuarioLogado) {
                    notas = usuario.notas;
                }
            });
            //remove a nota do array
            for (let i = notas.length - 1; i >= 0; i--) {
                const nota = notas[i];
                if (nota.descricao === descricao && nota.detalhamento === detalhamento) {
                    notas.splice(i, 1);
                }
            }
            //atualiza os usuarios no localStorage
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            //remove a nota da página
            e
                .target
                .parentNode
                .parentNode
                .remove();
            //coloca o foco no campo descrição
            formulario
                .descricao
                .focus();
        })
    })
}

// * Função para editar nota da página e do localStorage adicionando o evento de click em todos os botão de editar
const editaNota = () => {
    //pega todos os botões de editar
    const btnsEditar = document.querySelectorAll("tbody button:nth-child(1)");
    //adiciona o evento de click em todos os botões de editar
    btnsEditar.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            //pega a descrição da nota
            const descricao = e.target.parentNode.parentNode.firstChild.nextSibling.textContent;
            //pega o detalhamento da nota
            const detalhamento = e.target.parentNode.parentNode.firstChild.nextSibling.nextSibling.textContent;
            //pega o id da nota
            const id = e.target.parentNode.parentNode.firstChild.textContent;
            //remove a nota da página
            e
                .target
                .parentNode
                .parentNode
                .remove();
            //coloca a descrição e detalhamento no formulário
            formulario.descricao.value = descricao;
            formulario.detalhamento.value = detalhamento;
            //coloca o foco no campo descrição
            formulario
                .descricao
                .focus();
            //fazer a edição da nota no localStorage
            const editaNotaNoLocalStorage = (id) => {
                //pega os usuarios do localStorage
                const usuarios = JSON.parse(localStorage.usuarios)
                //pega as notas o usuario logado
                let notas;
                usuarios.forEach(usuario => {
                    if (usuario.email === usuarioLogado) {
                        notas = usuario.notas;
                    }
                });
                //remove a nota do array
                notas.forEach((nota, index) => {
                    if (nota.id === id) {
                        notas.splice(index, 1);
                    }
                })
                //atualiza os usuarios no localStorage
                localStorage.setItem("usuarios", JSON.stringify(usuarios));
            }
            //chama a função para editar a nota no localStorage
            editaNotaNoLocalStorage(id);
        })
    })
}

//* Função para adicionar nota na página e no localStorage
const addNota = () => {
    //verifica se a descrição está preenchida no click do botão
    if (formulario.descricao.value === "") {
        //adiciona a classe review no campo descrição
        formulario.descricao.classList.add("review")
        return
    }
    //remove a classe review no campo descrição
    formulario.descricao.classList.remove("review");
    //captura o valor da descrição e do detalhamento
    const descricao = formulario.descricao.value;
    const detalhamento = formulario.detalhamento.value;
    //gera um id para a nota
    const id = gerarId();
    //chama a função para criar a nota na tela
    criaNotaNaTela(id,descricao, detalhamento);
    //* Função para criar a nota no localStorage
    const criaNotaNoLocalStorage = (id,descricao, detalhamento) => {
        //cria um objeto com a descrição e o detalhamento
        const nota = {id,descricao,detalhamento}
        //coloca a descrição e detalhamento na nota
        nota.descricao = descricao;
        nota.detalhamento = detalhamento;
        nota.id = id;
        //pega os usuarios do localStorage
        const usuarios = JSON.parse(localStorage.usuarios);
        //adiciona a nota no array de notas do usuário logado
        usuarios.forEach((usuario) => {
            if (usuario.email === usuarioLogado) {
                usuario
                    .notas
                    .push(nota);
            }
        })
        //atualiza os usuários no localStorage
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }
    //chama a função para criar a nota no localStorage
    criaNotaNoLocalStorage(id,descricao, detalhamento);
    //chama a função para remover nota da página e do localStorage
    removeNota();
    //chama a função para editar nota da página e do localStorage
    editaNota();
    //chama a função para limpar os campos do formulário
    limpaCampos();
}

//* Função para carregar notas do localStorage
const carregaNotas = () => {
    //pega os usuários do localStorage
    const usuarios = JSON.parse(localStorage.getItem("usuarios"));
    // buscar em usuarios o usuario logado e chama a função para carregar as notas
    // na tela para cada uma das notas
    usuarios.forEach((usuario) => {
        if (usuario.email === usuarioLogado) {
            usuario
                .notas
                .forEach((nota) => {
                    criaNotaNaTela(nota.id,nota.descricao, nota.detalhamento);
                })
        }
    })
}

//função para numerar as linhas da tabela
const numerarLinhas = () => {
    //pega todos os tr da tabela
    const trs = document.querySelectorAll("tbody tr");
    //adiciona o número da linha em cada tr
    trs.forEach((tr, index) => {
        tr.firstChild.textContent = index + 1;
    })
}

//chama a função para carregar notas do localStorage
carregaNotas();

//* Escuta o evento de click no botão de adicionar nota
formulario.salvar.addEventListener("click", addNota)

//* Escuta o enter no campo detalhamento
formulario.detalhamento.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            addNota();
        }
    })

//chama a função para remover nota da página e do localStorage
removeNota();

//chama a função para editar nota da página e do localStorage
editaNota();

//chama a função para numerar as linhas da tabela
numerarLinhas();

//listener para saida da página
window.addEventListener("beforeunload", () => {
    localStorage.removeItem("usuarioLogado");
})


