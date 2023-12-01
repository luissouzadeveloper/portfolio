// Menu mobile
function menuCelular(){
    let botao = document.querySelector('.btn-menu');

    botao.addEventListener('click', () => {
        let menu = document.querySelector('.menu-mobile');
        if (menu.classList.contains('abrir-menu')) {
            menu.classList.remove('abrir-menu');
        } else {
            menu.classList.add('abrir-menu');
        }
    });
}

menuCelular();