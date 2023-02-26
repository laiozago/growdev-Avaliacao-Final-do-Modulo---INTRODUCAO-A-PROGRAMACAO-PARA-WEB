const verficaLogin = () => {
    if (!localStorage.getItem('usuarioLogado')) {
        window.location.href = 'index.html';
    }
}
verficaLogin();