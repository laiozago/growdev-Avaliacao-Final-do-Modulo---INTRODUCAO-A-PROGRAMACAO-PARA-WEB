//*Código para página de login
//pega o formulario
const formulario = document.querySelector('form');

//* Função para fazer o login
const login = () => {
    // Remove as classes review
    formulario.login.classList.remove('review')
    formulario.senha.classList.remove('review')
    //verifica se a entrada usuarios existe no localstorage
    if (!localStorage.getItem('usuarios')) {
        //alerta que o usuário não está cadastrado
        alert('Usuário não cadastrado')
        //para a execução da função
        return
    }
    //pega do localstorage os usuarios cadastrados
    const usuarios = JSON.parse(localStorage.getItem('usuarios'))
    //verifica se o usuario existe, se não existir, adiciona a classe review no login e alerta que o usuario não está cadastrado
    if (!usuarios.find(usuario => usuario.email === formulario.login.value)) {
        formulario.login.classList.add('review')
        alert('Usuário não cadastrado')
        return
    }
    //pega o usuario que está tentando fazer o login
    const usuario = usuarios.find(usuario => usuario.email === formulario.login.value)
    //verifica se a senha está errada e adiciona a classe review na senha
    if (usuario.senha != formulario.senha.value) {
        formulario.senha.classList.add('review')
        return
    }
    //se o usuario e a senha estiverem corretos, salva o login do usuario como usuarioLogado no localStorage
    localStorage.setItem('usuarioLogado', usuario.email)
    //redireciona para a pagina de notas
    window.open('grownotes.html',"_self")
}
//* Escuta o evento de click no botão de entrar
formulario.btnEntrar.addEventListener("click", login)

//* Escuta o enter no input de senha
formulario.senha.addEventListener("keyup", (event) => {
    // Se o enter for pressionado
    if (event.keyCode === 13) {
        // Faz o login
        login()
    }
})

//* Escuta o evento de click no botão de cadastrar
formulario.btnCadastrar.addEventListener("click", () => {
    // Abre a página de cadastro
    window.open("cadastro.html","_self")
})