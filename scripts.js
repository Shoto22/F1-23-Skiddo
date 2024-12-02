document.addEventListener('DOMContentLoaded', () => {
    const pilotos = [
        'Quevedo', 'Tsunoda', 'Albon', 'Russell',
        'Hulkenberg', 'Ocon', 'Leclerc', 'Alonso',
        'Verstappen', 'Hamilton', 'Gasly', 'Checo',
        'Zhou', 'Norris', 'Bottas', 'Magnussen',
        'Brisa', 'Diego', 'Olegario', 'Piastri'
    ];

    const resultados = {
        Bahrein: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        Jeddah: ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
        Imola: ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
        Montmelo: ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
        Silverstone: ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
        Spa: ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
        Singapur: ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
        Monza: ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
        Austin: ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
        Interlagos: ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
    };

    const vueltaRapida = {
        Bahrein: 'Quevedo'
    };

    function actualizarTabla() {
        const cuerpoTabla = document.getElementById('resultados-body');
        cuerpoTabla.innerHTML = ''; // Limpiar el contenido anterior
        pilotos.forEach((piloto, indice) => {
            let fila = document.createElement('tr');
            let celdaPiloto = document.createElement('td');
            celdaPiloto.textContent = piloto;
            fila.appendChild(celdaPiloto);

            let totalPuntos = 0;
            for (const carrera in resultados) {
                let celdaCarrera = document.createElement('td');
                let posicion = resultados[carrera][indice] || '-';
                celdaCarrera.textContent = posicion;
                fila.appendChild(celdaCarrera);
                totalPuntos += posicion !== '-' ? obtenerPuntos(posicion) : 0;

                // Añadir punto por vuelta rápida si aplica
                if (vueltaRapida[carrera] === piloto) {
                    totalPuntos += 1;
                }
            }

            let celdaTotal = document.createElement('td');
            celdaTotal.textContent = totalPuntos;
            fila.appendChild(celdaTotal);

            cuerpoTabla.appendChild(fila);
        });
    }

    function obtenerPuntos(posicion) {
        switch(posicion) {
            case 1: return 25;
            case 2: return 18;
            case 3: return 15;
            case 4: return 12;
            case 5: return 10;
            case 6: return 8;
            case 7: return 6;
            case 8: return 4;
            case 9: return 2;
            case 10: return 1;
            default: return 0;
        }
    }

    function agregarVideoImagen(url, tipo, caption = '') {
        const contenedor = document.getElementById('videos-imagenes');
        const contenedorFigura = document.createElement('figure');
        const elemento = document.createElement(tipo === 'video' ? 'iframe' : 'img');

        if (tipo === 'video') {
            elemento.src = url;
            elemento.width = "560";
            elemento.height = "315";
            elemento.frameBorder = "0";
            elemento.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            elemento.allowFullscreen = true;
        } else {
            elemento.src = url;
            elemento.width = 560;
            elemento.height = 315;
            elemento.classList.add('clickable-image');
        }
        
        contenedorFigura.appendChild(elemento);

        if (caption) {
            const figcaption = document.createElement('figcaption');
            figcaption.textContent = caption;
            contenedorFigura.appendChild(figcaption);
        }

        contenedor.appendChild(contenedorFigura);
    }

    function agregarNoticias() {
        const noticias = [
            { titulo: 'Quevedo, Diego y Brisa: Los Tres Mejores en Qualy', url: 'QBahrain.html' }
        ];

        const listaNoticias = document.getElementById('lista-noticias');
        noticias.forEach(noticia => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = noticia.url;
            link.textContent = noticia.titulo;
            listItem.appendChild(link);
            listaNoticias.appendChild(listItem);
        });
    }

    function forceDesktopView() {
        const viewport = document.querySelector("meta[name=viewport]");
        viewport.setAttribute("content", "width=1024");
    }

    // Manejar ampliación de imágenes
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('imgAmpliada');
    const closeModal = document.querySelector('.close');

    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('clickable-image')) {
            modal.style.display = "block";
            modalImg.src = event.target.src;
        }
    });

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    forceDesktopView();

    actualizarTabla();
    agregarNoticias();

    // Añadir el video de YouTube
    agregarVideoImagen('https://www.youtube.com/embed/q9Bv0B-wJ5s', 'video');

    // Añadir imágenes desde GitHub con un pie de foto
    agregarVideoImagen('Bahrain.jpg', 'img', 'Quevedo gana el GP de Bahrain');
});
