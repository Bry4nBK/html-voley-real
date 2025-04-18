const equipos = [
    { nombre: "Equipo 1", puntos: 25, ganados: 10 },
    { nombre: "Equipo 2", puntos: 20, ganados: 8 },
    { nombre: "Equipo 3", puntos: 18, ganados: 7 },
    { nombre: "Equipo 4", puntos: 15, ganados: 5 },
    { nombre: "Equipo 5", puntos: 12, ganados: 4 },
    { nombre: "Equipo 6", puntos: 10, ganados: 3 }
];



const container = document.getElementById('equipos-container');

// Limpiar el contenedor primero
container.innerHTML = '';

equipos.forEach(equipo => {
    const cardHTML = `
     <div class="col-6 col-md-4 col-lg-3 mb-4">
        <a href="equipos.html" class="card text-decoration-none text-dark h-100 border-primary">
            <div class="card-body text-center">
                <img src="assets/img/user.png" 
                     class="img-fluid rounded-circle mb-3 border border-4 border-primary" 
                     width="100" 
                     alt="${equipo.nombre}">
                <h5 class="card-title">${equipo.nombre}</h5>
                <div class="d-flex justify-content-center gap-3">
                    <div>
                        <span class="fw-bold">${equipo.puntos}</span>
                        <p class="small mb-0">Puntos</p>
                    </div>
                    <div>
                        <span class="fw-bold">${equipo.ganados}</span>
                        <p class="small mb-0">Ganados</p>
                    </div>
                </div>
            </div>
        </a>
    </div>
    `;
    
    // Método más eficiente para insertar HTML
    container.insertAdjacentHTML('beforeend', cardHTML);
});