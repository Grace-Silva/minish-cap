let menu = document.querySelector('#bars-menu');
let navLinks = document.querySelector('.navLinks');

menu.onclick=()=>{
    navLinks.classList.toggle('open');
}

// selección del header
let navbar = document.querySelector(".navbar");
let limit =navbar.offsetTop;
/* cuando el usuario deslize la página 
hacia abajo se ejecutará nuestra función:*/
window.onscroll = function(){
    showStickyMenu()    
};

// intercambiar la clase sticky:
function showStickyMenu(){
    if(window.pageYOffset > limit){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
}