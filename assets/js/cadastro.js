//*parte do codigo para pagina de cadastro
//variavel para guardar o nome de usuario
let usuario = document.querySelector('#cadastro-email');
//variavel para guardar a senha do usuario
let senha = document.querySelector('#cadastro-senha');
//variavel para guardar a senha do usuario
let senhaRepetida = document.querySelector('#cadastro-repete-senha');
//variavel para o botao
let botaoCriaConta = document.querySelector('#botao-entrar')

//*funcao para criar conta
botaoCriaConta.addEventListener("click",function(){
    //verifica se as senhas sao iguais e se o usuario digitou algo
    if (senha.value === senhaRepetida.value && usuario.value) {
        //remove a classe review da senha e do usuario
        senhaRepetida.classList.remove('review')
        usuario.classList.remove('review')
        //salva os dados no localstorage
        localStorage.setItem('login',usuario.value)
        localStorage.setItem('senha', senha.value);
        //redireciona para a pagina de login
        window.open('index.html',"_self")
    } else if(senha.value!=senhaRepetida.value){
        //adiciona a classe review na senha e na senha repetida
        senhaRepetida.classList.add('review')
    }else if(!usuario.value){
        usuario.classList.add('review')
    }
    
})
