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