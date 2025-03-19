document.addEventListener('DOMContentLoaded', function () {
    const actividades = document.querySelectorAll('.Actividad');
    const indicadoresContainer = document.querySelector('.indicadoresDeCarrusel2');
    const actividadesContainer = document.querySelector('.Actividades');
    const btnAnterior = document.querySelector('.btnAnterior2');
    const btnSiguiente = document.querySelector('.btnSiguiente2');

    let currentIndex = 0;
    let actividadWidth;

    function updateIndicators() {
        let totalIndicators = window.innerWidth > 720 ? 5 : 6;
        totalIndicators = Math.min(totalIndicators, actividades.length);

        indicadoresContainer.innerHTML = '';

        for (let i = 0; i < totalIndicators; i++) {
            const indicador = document.createElement('span');
            indicador.classList.add('indicador2');
            if (i === currentIndex) indicador.classList.add('activo');
            indicadoresContainer.appendChild(indicador);

            indicador.addEventListener('click', function () {
                currentIndex = i;
                updateCarousel();
            });
        }
    }

    function updateCarousel() {
        actividadWidth = actividades[0].offsetWidth;
        const offset = -currentIndex * actividadWidth;
        actividadesContainer.style.transform = `translateX(${offset}px)`;

        updateIndicators();
    }

    btnAnterior.addEventListener('click', function () {
        const maxIndex = Math.min(window.innerWidth > 720 ? 4 : 5, actividades.length - 1);
        if (currentIndex === 0) {
            currentIndex = maxIndex; // Vuelve al último índice
        } else {
            currentIndex = Math.max(currentIndex - 1, 0);
        }
        updateCarousel();
    });

    btnSiguiente.addEventListener('click', function () {
        const maxIndex = Math.min(window.innerWidth > 720 ? 4 : 5, actividades.length - 1);
        if (currentIndex === maxIndex) {
            currentIndex = 0; // Vuelve al primer índice
        } else {
            currentIndex = Math.min(currentIndex + 1, maxIndex);
        }
        updateCarousel();
    });

    window.addEventListener('resize', function () {
        updateCarousel();
    });

    actividadWidth = actividades[0].offsetWidth;
    updateCarousel();
});

/*document.addEventListener('DOMContentLoaded', function () {
    const actividades = document.querySelectorAll('.Actividad');
    const indicadoresContainer = document.querySelector('.indicadoresDeCarrusel2');
    const actividadesContainer = document.querySelector('.Actividades');
    const btnAnterior = document.querySelector('.btnAnterior2');
    const btnSiguiente = document.querySelector('.btnSiguiente2');

    let currentIndex = 0;
    let itemsToShow = getItemsToShow(); // Determina cuántas actividades se ven según el tamaño de la pantalla

    // Función para actualizar los indicadores
    function updateIndicators() {
        const totalIndicators = Math.ceil(actividades.length / itemsToShow); // Ajusta el total de indicadores
        indicadoresContainer.innerHTML = ''; // Limpia los indicadores existentes

        for (let i = 0; i < totalIndicators; i++) {
            const indicador = document.createElement('span');
            indicador.classList.add('indicador2');
            if (i === currentIndex) indicador.classList.add('activo'); // Marca el indicador activo
            indicadoresContainer.appendChild(indicador);

            // Evento al hacer clic en un indicador
            indicador.addEventListener('click', function () {
                currentIndex = i;
                updateCarousel();
            });
        }
    }

    // Función para mover el carrusel
    function updateCarousel() {
        const actividadWidth = actividades[0].offsetWidth; // Toma el ancho de una sola actividad
        const offset = -currentIndex * actividadWidth; // Calcula el desplazamiento en píxeles
        actividadesContainer.style.transform = `translateX(${offset}px)`; // Aplica el desplazamiento

        // Actualiza los indicadores activos
        const indicadores = document.querySelectorAll('.indicador2');
        indicadores.forEach((indicador, index) => {
            indicador.classList.toggle('activo', index === currentIndex);
        });

        // Controla el estado de los botones
        btnAnterior.disabled = currentIndex === 0;
        btnSiguiente.disabled = currentIndex === actividades.length - itemsToShow;
    }

    // Función para calcular cuántas actividades se muestran según el tamaño de la pantalla
    function getItemsToShow() {
        return window.innerWidth > 720 ? 1 : 1; // 2 actividades en PC, 1 en móvil
    }

    // Eventos para los botones de navegación
    btnAnterior.addEventListener('click', function () {
        currentIndex = Math.max(currentIndex - 1, 0); // Reduce el índice en 1
        updateCarousel();
    });

    btnSiguiente.addEventListener('click', function () {
        const maxIndex = actividades.length - itemsToShow;
        currentIndex = Math.min(currentIndex + 1, maxIndex); // Aumenta el índice en 1
        updateCarousel();
    });

    // Recalcula los valores en caso de redimensionar la ventana
    window.addEventListener('resize', function () {
        itemsToShow = getItemsToShow();
        updateIndicators();
        updateCarousel();
    });

    // Inicializa los indicadores y el carrusel
    updateIndicators();
    updateCarousel();
});
*/