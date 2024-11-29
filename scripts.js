// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const pilotos = [
        'Arcay', 'Brisa', 'Olegario', 'Diego',
        'Piloto5', 'Piloto6', 'Piloto7', 'Piloto8',
        'Piloto9', 'Piloto10', 'Piloto11', 'Piloto12',
        'Piloto13', 'Piloto14', 'Piloto15', 'Piloto16',
        'Piloto17', 'Piloto18', 'Piloto19', 'Piloto20'
    ];

    const resultados = {
        Bahrein: [],
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
                // Supongamos que los puntos se calculan de alguna manera aquí
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
        const elemento = document.createElement(tipo === 'video' ? 'video' : 'img');
        elemento.src = url;
        if (tipo === 'video') {
            elemento.controls = true;
        }
        contenedor.appendChild(elemento);
    }

    actualizarTabla();

    // Ejemplo de uso: Agregar video e imagen destacada
    agregarVideoImagen('https://via.placeholder.com/150', 'img');
    agregarVideoImagen('https://www.w3schools.com/html/mov_bbb.mp4', 'video');
});
