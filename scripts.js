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
        Bahrein: [25, 18, 15, 12, 10, 8, 6, 4, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
        pilotos.forEach((piloto, indice) => {
            let fila = document.createElement('tr');
            let celdaPiloto = document.createElement('td');
            celdaPiloto.textContent = piloto;
            fila.appendChild(celdaPiloto);

            let totalPuntos = 0;
            for (const carrera in resultados) {
                let celdaCarrera = document.createElement('td');
                let puntos = resultados[carrera][indice] || 0;
                celdaCarrera.textContent = `${indice + 1} (${puntos})`;
                fila.appendChild(celdaCarrera);
                totalPuntos += puntos;
            }

            let celdaTotal = document.createElement('td');
            celdaTotal.textContent = totalPuntos;
            fila.appendChild(celdaTotal);

            cuerpoTabla.appendChild(fila);
        });
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
