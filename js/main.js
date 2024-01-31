let menu = document.querySelector('#bars-menu');
let navLinks = document.querySelector('.navLinks');

// función para contraer el menú:
menu.onclick=()=>{
    menu.classList.toggle('close');
    navLinks.classList.toggle('open');
}


/** función para el botón ir arriba **/
const goUp = document.querySelector(".goUpButton");
    goUp.addEventListener("click", () => {
    window.scrollTo(0, 0);
});

/* aparecer y desaparecer botón de ir hacia arriba*/
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

/* función abrir y cerrar vídeo: */

// selección de elementos: 
const openVideo = document.getElementById("openVideo"); // boton play
const videocontainer = document.getElementById("videocontainer");   // video background
const closeVideo = document.getElementById("closeVideo");   // icono cerrar
const video = document.getElementById("trailerVideo");  // video

openVideo.addEventListener("click", abrirVideo);
closeVideo.addEventListener("click", abrirVideo);

function abrirVideo(){
    videocontainer.classList.toggle("openVideo");
    video.currentTime = 0;
    video.pause();
}