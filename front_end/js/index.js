


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