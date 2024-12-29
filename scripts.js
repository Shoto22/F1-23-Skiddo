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
        Jeddah: [1, 18, 14, 5, 16, 11, 7, 9, 4, 10, 19, 6, 15, 12, 13, 8, 3, 2, 20, 8],
        Imola: [1, 7, 3, 5, 12, 14, 10, 15, 9, 6, 16, 8, 17, 11, 18, 13, 4, 2, 19, 20],
        Montmelo: ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
        Silverstone: ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
        Spa: ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
        Singapur: ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
        Monza: ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
        Austin: ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-'],
        Interlagos: ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-']
    };

    const vueltaRapida = {
        Bahrein: 'Quevedo',
        Jeddah: 'Diego',
        Imola: 'Diego'
    };

   function actualizarTabla() {
    const cuerpoTabla = document.getElementById('resultados-body');
    cuerpoTabla.innerHTML = ''; // Limpiar el contenido anterior

    const pilotosConPuntos = pilotos.map((piloto, indice) => {
        let totalPuntos = 0;
        for (const carrera in resultados) {
            let posicion = resultados[carrera][indice] || '-';
            totalPuntos += posicion !== '-' ? obtenerPuntos(posicion) : 0;

            // Añadir punto por vuelta rápida si aplica
            if (vueltaRapida[carrera] === piloto) {
                totalPuntos += 1;
            }
        }
        return { piloto, totalPuntos, indice };
    });

    // Ordenar pilotos por puntos totales
    pilotosConPuntos.sort((a, b) => b.totalPuntos - a.totalPuntos);

    pilotosConPuntos.forEach(({ piloto, totalPuntos, indice }) => {
        let fila = document.createElement('tr');
        let celdaPiloto = document.createElement('td');
        celdaPiloto.textContent = piloto;
        fila.appendChild(celdaPiloto);

        for (const carrera in resultados) {
            let celdaCarrera = document.createElement('td');
            let posicion = resultados[carrera][indice] || '-';
            celdaCarrera.textContent = posicion;
            fila.appendChild(celdaCarrera);
        }

        let celdaTotal = document.createElement('td');
        celdaTotal.textContent = totalPuntos;
        fila.appendChild(celdaTotal);

        cuerpoTabla.appendChild(fila);
    });

    actualizarVueltaRapida();  // Añadir esta línea al final de actualizarTabla
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
            { titulo: 'Quevedo, Diego e Brisa: Os tres mellores da Qualy', url: 'QBahrain.html' },
            { titulo: 'Destacadas do GP de Jeddah', url: 'Jeddah.html'},
            { titulo: 'Destacadas do GP de Imola', url: 'Imola.html'}
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
    function actualizarVueltaRapida() {
    const listaVueltaRapida = document.getElementById('lista-vuelta-rapida');
    listaVueltaRapida.innerHTML = ''; // Limpiar el contenido anterior
    for (const carrera in vueltaRapida) {
        let listItem = document.createElement('li');
        listItem.textContent = `${carrera}: ${vueltaRapida[carrera]}`;
        listaVueltaRapida.appendChild(listItem);
    }
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
    agregarVideoImagen('https://www.youtube.com/embed/q9Bv0B-wJ5s', 'video'),

    // Añadir imágenes desde GitHub con un pie de foto
    agregarVideoImagen('Bahrain.jpg', 'img', 'Quevedo gaña o GP de Bahrain');
});
