let menu = document.querySelector('#menu-icon');
let nav = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    nav.classList.remove('active');
};