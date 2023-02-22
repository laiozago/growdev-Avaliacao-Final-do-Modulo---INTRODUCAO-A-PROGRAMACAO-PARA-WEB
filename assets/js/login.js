//*Código para página de login
//pega o formulario
const formulario = document.querySelector('form');

//* Função para fazer o login
const login = () => {
    // Remove as classes review
    formulario.login.classList.remove('review')
    formulario.senha.classList.remove('review')

    // Verifica se o usuário e a senha estão corretos
    if (formulario.login.value == localStorage.getItem('login') && formulario.senha.value == localStorage.getItem('senha')) {
        // Se estiverem corretos, abre a página de notas
        window.open("grownotes.html","_self")
    }
    
    // Se o usuário estiver correto, mas a senha estiver incorreta
    if (formulario.login.value == localStorage.getItem('login') && !(formulario.senha.value == localStorage.getItem('senha'))) {
        // add class review
        formulario.senha.classList.add('review')
    }
    
    // Se o login estiver vazio ou o usuário estiver incorreto ou não estiver cadastrado
    if (!localStorage.getItem('login')||!formulario.login.value || !(formulario.login.value == localStorage.getItem('login'))) {
        // add classes review
        formulario.login.classList.add('review')
    }
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