//*Código para página de login
//pega o botão de entrar
const btnEntrar = document.querySelector('#botao-entrar');

//* Função para fazer o login
const login = () => {
    // Pega os valores dos inputs de usuário e senha
    const userName = document.querySelector('#login-usuario');
    const userPassword = document.querySelector('#login-senha');
        // Verifica se o usuário e a senha estão corretos
        if (userName.value == localStorage.getItem('login') && userPassword.value == localStorage.getItem('senha')) {
            window.location.href = "grownotes.html";
        } else if (userName.value == localStorage.getItem('login') && !(userPassword.value == localStorage.getItem('senha'))) {
            // Se o usuário estiver correto, mas a senha estiver incorreta, exibe uma mensagem de erro
            alert("Senha incorreta");
        } else if (!(userName.value == localStorage.getItem('login')) && userPassword.value == localStorage.getItem('senha')) {
            // Se a senha estiver correta, mas o usuário estiver incorreto, exibe uma mensagem de erro
            alert("Usuário incorreto ou não cadastrado");
        }
}

//* Escuta o evento de click no botão de entrar
btnEntrar.addEventListener("click", login)