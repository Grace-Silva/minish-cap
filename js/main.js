let menu = document.querySelector('#bars-menu');
let navLinks = document.querySelector('.navLinks');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navLinks.classList.toggle('open');
}