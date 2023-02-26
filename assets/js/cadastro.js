//*parte do codigo para pagina de cadastro variavel para o formulario
const formulario = document.querySelector('form')

//*funcao para criar conta
const criaConta = () => {
    //*Função para verificar se o email é valido
    const validarEmail = (email) => {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return regex.test(email);
    }
    //*Função para verificar se a senha é valida
    const validarSenha = (senha) => {
        // Verifica se a senha tem pelo menos 6 caracteres
        if (senha.length < 6) {
            return alert('A senha deve ter pelo menos 6 caracteres');
        }

        // Verifica se a senha contém pelo menos um número
        if (!/[0-9]/.test(senha)) {
            return alert('A senha deve conter pelo menos um número');
        }

        // Verifica se a senha contém pelo menos uma letra maiúscula
        if (!/[A-Z]/.test(senha)) {
            return alert('A senha deve conter pelo menos uma letra maiúscula');
        }

        // Verifica se a senha contém pelo menos uma letra minúscula
        if (!/[a-z]/.test(senha)) {
            return alert('A senha deve conter pelo menos uma letra minúscula');
        }

        // Verifica se a senha contém pelo menos um caractere especial
        if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(senha)) {
            return alert('A senha deve conter pelo menos um caractere especial');
        }

        // A senha é válida
        return true;
    }

    //remove a classe review da senha e do usuario
    formulario
        .senha
        .classList
        .remove('review')
    formulario
        .repeteSenha
        .classList
        .remove('review')
    formulario
        .email
        .classList
        .remove('review')
    // verifica se as senhas sao iguais e se o usuario digitou algo no email e na
    // senha e se o email é valido e se a senha é valida
    if (formulario.senha.value === formulario.repeteSenha.value && validarEmail(formulario.email.value) && formulario.email.value && formulario.senha.value && validarSenha(formulario.senha.value)) {
        //verffica se existe a entrada de usuarios no localStorage
        if (localStorage.getItem('usuarios') === null || localStorage.getItem('usuarios') === "") {
            //cria a entrada de usuarios no localStorage
            localStorage.setItem('usuarios', JSON.stringify([]))
        }
        //verifica se o usuario ja existe
        if (JSON.parse(localStorage.getItem('usuarios')).find(usuario => usuario.email === formulario.email.value)) {
            //adiciona a classe review no email
            formulario
                .email
                .classList
                .add('review')
            //alerta que o usuario ja existe
            alert('Usuário já existe')
            //coloca o foco no email
            formulario
                .email
                .focus()
            //para a execução da função
            return
        }
        //cria um objeto com o email, senha e notas
        const usuario = {
            email: formulario.email.value,
            senha: formulario.senha.value,
            notas: []
        }
        //pega os usuarios do localStorage
        const usuarios = JSON.parse(localStorage.getItem('usuarios'))
        //adiciona o usuario no array de usuarios
        usuarios.push(usuario)
        //adiciona o array de usuarios no localStorage
        localStorage.setItem('usuarios', JSON.stringify(usuarios))
        //alerta que o usuario foi criado
        alert('Usuário criado com sucesso')
        //redireciona para a pagina de login
        window.open('index.html', "_self")
    }
    //verifica se o email não é valido e adiciona a classe review no email
    if (!validarEmail(formulario.email.value)) {
        formulario
            .email
            .classList
            .add('review')
    }
    //verifica se as senhas sao diferentes
    if (formulario.senha.value != formulario.repeteSenha.value) {
        //adiciona a classe review na senha e na senha repetida
        formulario
            .repeteSenha
            .classList
            .add('review')
    }
}
//*adiciona o evento de click no botao
formulario
    .btnCadastrar
    .addEventListener("click", criaConta)

//*adiciona evento do enter no input repete senha
formulario.repeteSenha.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        criaConta()
    }
}
)

