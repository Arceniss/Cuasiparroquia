document.addEventListener('DOMContentLoaded', function() {

    const btnAnterior = document.querySelector('.btnAnterior');
    const btnSiguiente = document.querySelector('.btnSiguiente');
    const indicadores = document.querySelectorAll('.indicador');
    const horarios = document.querySelectorAll('.Horarios');
    
    let posicion = 0;

    function actualizarCarrusel() {
        const offset = -posicion * 33.33;
        horarios.forEach((horario) => {
            horario.style.transform = `translateX(${offset}%)`;
        });
        indicadores.forEach((indicador, index) => {
            indicador.classList.toggle('activo', index === posicion);
        });
    }

    btnAnterior.addEventListener('click', () => {
        if (posicion > 0) {
            posicion--;
        } else if (posicion === 0) {
            posicion = 2;
        }
        actualizarCarrusel();
    });

    btnSiguiente.addEventListener('click', () => {
        if (posicion < 2) {
            posicion++;
        } else if (posicion === 2) {
            posicion = 0;
        }
        actualizarCarrusel();
    });
});
    
    