//*parte do codigo para pagina de cadastro
//variavel para o formulario
const formulario = document.querySelector('form')

//*funcao para criar conta
const criaConta = () => {
    //remove a classe review da senha e do usuario
    formulario.senha.classList.remove('review')
    formulario.repeteSenha.classList.remove('review')
    formulario.email.classList.remove('review')
    //verifica se as senhas sao iguais e se o usuario digitou algo no email e na senha
    if (formulario.senha.value === formulario.repeteSenha.value && formulario.email.value && formulario.senha.value) {
        //salva os dados no localstorage
        localStorage.setItem('login',formulario.email.value)
        localStorage.setItem('senha', formulario.senha.value);
        localStorage.setItem('notas', '');
        //redireciona para a pagina de login
        window.open('index.html',"_self")
    }
    
    //verifica se as senhas sao diferentes
    if (formulario.senha.value != formulario.repeteSenha.value){
        //adiciona a classe review na senha e na senha repetida
        formulario.repeteSenha.classList.add('review')
    }
}
//*adiciona o evento de click no botao
formulario.btnCadastrar.addEventListener("click", criaConta)
