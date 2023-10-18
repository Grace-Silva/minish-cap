let menu = document.querySelector('#bars-menu');
let navLinks = document.querySelector('.navLinks');

menu.onclick=()=>{
    menu.classList.toggle('close');
    navLinks.classList.toggle('open');
}


/* ir hacia arriba */
/** función para el botón ir arriba **/
const goUp = document.querySelector(".goUpButton");
    goUp.addEventListener("click", () => {
    window.scrollTo(0, 0);
});

/* aparecer y desaparecer botón */
window.addEventListener("scroll", (e)=>{
    let y = document.documentElement.scrollTop;

    if(y >= 120){
        goUp.classList.add("active");
        goUp.classList.remove("hide")
    }
    else{
        goUp.classList.add("hide");
        goUp.classList.remove("active");
    }
    
});

