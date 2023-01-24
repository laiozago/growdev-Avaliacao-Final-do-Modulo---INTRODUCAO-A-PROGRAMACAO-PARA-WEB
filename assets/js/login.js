const btnEntrar = document.querySelector('#botao-entrar');

btnEntrar.addEventListener("click", function () {
    const userName = document.querySelector('#login-usuario');
    const userPassword = document.querySelector('#login-senha');

        if (userName.value == localStorage.getItem('login') && userPassword.value == localStorage.getItem('senha')) {
            window.location.href = "grownotes.html";
            console.log('é pra abrir');
        } else {
            alert("Voce não tem cadastro, clique em CRIAR CONTA e faça seu cadastro agora!")
        }
})