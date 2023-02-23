//*parte do codigo para pagina de cadastro
//variavel para o formulario
const formulario = document.querySelector('form')

//*funcao para criar conta
const criaConta = () => {
    //*Função para verificar se o email é valido
    const validarEmail = (email) => {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return regex.test(email);
    }
    //remove a classe review da senha e do usuario
    formulario.senha.classList.remove('review')
    formulario.repeteSenha.classList.remove('review')
    formulario.email.classList.remove('review')
    //verifica se as senhas sao iguais e se o usuario digitou algo no email e na senha
    if (formulario.senha.value === formulario.repeteSenha.value && validarEmail(formulario.email.value) && formulario.email.value && formulario.senha.value) {
        //salva os dados no localstorage
        localStorage.setItem('login',formulario.email.value)
        localStorage.setItem('senha', formulario.senha.value);
        localStorage.setItem('notas', JSON.stringify([]));
        //redireciona para a pagina de login
        window.open('index.html',"_self")
    }

    //verifica se o email não é valido e adiciona a classe review no email
    if (!validarEmail(formulario.email.value)){
        formulario.email.classList.add('review')
    }
    
    //verifica se as senhas sao diferentes
    if (formulario.senha.value != formulario.repeteSenha.value){
        //adiciona a classe review na senha e na senha repetida
        formulario.repeteSenha.classList.add('review')
    }
}
//*adiciona o evento de click no botao
formulario.btnCadastrar.addEventListener("click", criaConta)
