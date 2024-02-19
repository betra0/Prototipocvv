

let btn = document.getElementById('btn-menu');
let header = document.getElementById('header');
btn.addEventListener('click', function() {
    header.classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Cerrar el menú si está abierto
        if (header.classList.contains('active')) {
            header.classList.remove('active');
        }

        const href = this.getAttribute('href');
        const offsetTop = document.querySelector(href).offsetTop;

        window.scrollTo({
            top: offsetTop - 50, // 50px por encima del elemento destino
            behavior: 'smooth'
        });
    });
});

/// LOGICA DE carrusel de imagenes 
document.querySelectorAll('.departamento').forEach(function(departamento) {
    const carruselComentarios = departamento.querySelector('.cont-img-main .carruselmain');
    const numImagenes = carruselComentarios.querySelectorAll('.cont-img').length;
    const imgs = carruselComentarios.querySelectorAll('img');
    let iImagen = 0;

    function irComentarioRight() {
        if(iImagen + 1 < numImagenes) {
            iImagen++;
            imgs[iImagen].classList.add('active');
            imgs[iImagen - 1].classList.remove('active');
            
            carruselComentarios.style.transform = `translateX(-${iImagen * 100}%)`;
            if(iImagen > 0){
                departamento.querySelector('.btn-c-left').classList.remove('inactive');
            }else{
                departamento.querySelector('.btn-c-left').classList.add('inactive');
            }
            if(iImagen + 1 < numImagenes){
                departamento.querySelector('.btn-c-rigth').classList.remove('inactive');
            }else{
                departamento.querySelector('.btn-c-rigth').classList.add('inactive');
            }
        }
    }

    function irComentarioLeft() {
        if(iImagen > 0) {
            iImagen--;
            imgs[iImagen].classList.add('active');
            imgs[iImagen + 1].classList.remove('active');
            
            carruselComentarios.style.transform = `translateX(-${iImagen * 100}%)`;
            if(iImagen > 0){
                departamento.querySelector('.btn-c-left').classList.remove('inactive');
            }else{
                departamento.querySelector('.btn-c-left').classList.add('inactive');
            }
            if(iImagen + 1 < numImagenes){
                departamento.querySelector('.btn-c-rigth').classList.remove('inactive');
            }else{
                departamento.querySelector('.btn-c-rigth').classList.add('inactive');
            }
            
        }
    }

    departamento.querySelector('.btn-c-left').addEventListener('click', irComentarioLeft);
    departamento.querySelector('.btn-c-rigth').addEventListener('click', irComentarioRight);
});

 // Obtenemos el elemento span donde queremos mostrar el precio
 let precioSpan = document.getElementById("precio-1");
 let precioSpan2 = document.getElementById("precio-2");
 let precioSpan3 = document.getElementById("precio-3");
 let precioSpan4 = document.getElementById("precio-4");

    
 precioSpan.textContent = depa1.toLocaleString(); 
 precioSpan2.textContent = depa2.toLocaleString();
 precioSpan3.textContent = depa3.toLocaleString();
 precioSpan4.textContent = depa4.toLocaleString();
