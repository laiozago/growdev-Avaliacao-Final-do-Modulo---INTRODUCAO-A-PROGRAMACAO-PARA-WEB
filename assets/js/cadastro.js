
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
    
    if (senha.value === senhaRepetida.value) {
        senhaRepetida.classList.remove('cadastro-repete-senha')
        localStorage.setItem('login',usuario.value)
        localStorage.setItem('senha', senha.value);
        window.open('index.html',"_self")
    } else {
        senhaRepetida.classList.add('cadastro-repete-senha')
    }
    
})
