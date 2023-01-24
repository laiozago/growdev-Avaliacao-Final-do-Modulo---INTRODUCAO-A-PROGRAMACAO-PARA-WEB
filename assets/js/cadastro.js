
//parte do codigo para pagina de cadastro


//variavel para guardar o nome de usuario
let usuario = document.querySelector('#cadastro-email');
//variavel para guardar a senha do usuario
let senha = document.querySelector('#cadastro-senha');
//variavel para guardar a senha do usuario
let senhaRepetida = document.querySelector('#cadastro-repete-senha');
//variavel para o botao
let botaoCriaConta = document.querySelector('#botao-entrar')

botaoCriaConta.addEventListener("click",function(){
    
    if (senha.value === senhaRepetida.value && usuario.value) {
        senhaRepetida.classList.remove('review')
        usuario.classList.remove('review')
        localStorage.setItem('login',usuario.value)
        localStorage.setItem('senha', senha.value);
        window.open('index.html',"_self")
    } else if(senha.value!=senhaRepetida.value){
        senhaRepetida.classList.add('review')
    }else if(!usuario.value){
        usuario.classList.add('review')
    }
    
})
