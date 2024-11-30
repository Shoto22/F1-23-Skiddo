// scripts.js
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
        Jeddah: [],
        Imola: [],
        Montmelo: [],
        Silverstone: [],
        Spa: [],
        Singapur: [],
        Monza: [],
        Austin: [],
        Interlagos: []
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

    function agregarVideoImagen(url, tipo) {
        const contenedor = document.getElementById('videos-imagenes');
        if (tipo === 'video') {
            const iframe = document.createElement('iframe');
            iframe.src = url;
            iframe.width = "560";
            iframe.height = "315";
            iframe.frameBorder = "0";
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframe.allowFullscreen = true;
            contenedor.appendChild(iframe);
        } else {
            const img = document.createElement('img');
            img.src = url;
            contenedor.appendChild(img);
        }
    }

    actualizarTabla();

    // Añadir el video de YouTube
    agregarVideoImagen('https://www.youtube.com/embed/q9Bv0B-wJ5s', 'video');
    agregarVideoImagen('Bahrain.jpg', 'img');
});
