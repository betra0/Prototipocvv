

/// ejecucion de fondo header
const fondo = document.querySelector('.fondo');
const numimagenes = document.querySelectorAll('.fondo img').length;
const tiempoCambio = 5000; // Ajusta según tus necesidades
let diapo = 0;
console.log(diapo);
  
setInterval(() => {
    diapo++;
    if(diapo > numimagenes-1){
        diapo = 0;
    }
    fondo.style.transform = `translateX(-${diapo*100}%)`;
}, tiempoCambio);
//////fin ///

const carruselcomentarios = document.querySelector('.acordeon-main .acordeon');
const numcomentarios = document.querySelectorAll('.acordeon-main .main-comentario').length;
const tiempoCambio_comentario = 3000;
let i_cometario = 0;
let intervaloCarrusel;

function iniciarCarrusel() {
    intervaloCarrusel = setInterval(() => {
        i_cometario++;
        if (i_cometario > numcomentarios - 1) {
            i_cometario = 0;
        }
        carruselcomentarios.style.transform = `translateX(-${i_cometario * 100}%)`;
    }, tiempoCambio_comentario);
}

// Iniciar el carrusel automáticamente al cargar la página
iniciarCarrusel();

// Función para reiniciar el carrusel
function ir_comentarioright() {

    if(i_cometario +1 < numcomentarios){
        i_cometario ++
        carruselcomentarios.style.transform = `translateX(-${i_cometario * 100}%)`;
    }
    
    clearInterval(intervaloCarrusel);
    iniciarCarrusel();
    
    
}
function ir_comentarioleft() {
    if(i_cometario  >= 1){
    i_cometario --
    carruselcomentarios.style.transform = `translateX(-${i_cometario * 100}%)`;
    }
    clearInterval(intervaloCarrusel);
    iniciarCarrusel();
    
}
document.getElementById('btn-c-left').addEventListener('click', ir_comentarioleft);
document.getElementById('btn-c-rigth').addEventListener('click', ir_comentarioright);