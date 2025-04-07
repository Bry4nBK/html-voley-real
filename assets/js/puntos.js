const jugadores = [
    { nombre: "Carlos", apellido: "Martínez", categoria: "todo etc", puntos: 2450 },
    { nombre: "Lucía", apellido: "Gómez", categoria: "todo etc", puntos: 2130 },
    { nombre: "Pedro", apellido: "López", categoria: "todo etc", puntos: 1980 },
    // Agrega más jugadores aquí
  ];

  const contenedor = document.getElementById('lista-jugadores');
  const buscador = document.getElementById('buscador');

  function mostrarJugadores(lista) {
    contenedor.innerHTML = '';
    if (lista.length === 0) {
      contenedor.innerHTML = '<p class="text-center text-muted">No se encontraron jugadores</p>';
      return;
    }

    lista.forEach(jugador => {
      contenedor.innerHTML += `
        <div class="col-md-4 mb-4">
          <div class="card shadow">
            <div class="card-body text-center">
              <img src="assets/img/user.png" class="rounded-circle mb-3" width="100" height="100" alt="Jugador">
              <h5 class="card-title">${jugador.nombre} ${jugador.apellido}</h5>
              <p class="text-primary fw-bold">Puntos: ${jugador.puntos}</p>
              <p class="text-secondary">Categoría: ${jugador.categoria}</p>
            </div>
          </div>
        </div>
      `;
    });
  }

  // Mostrar todos los jugadores inicialmente
  mostrarJugadores(jugadores);

  buscador.addEventListener('input', () => {
    const texto = buscador.value.toLowerCase();
    const filtrados = jugadores.filter(j =>
      j.nombre.toLowerCase().includes(texto) || j.apellido.toLowerCase().includes(texto)
    );
    mostrarJugadores(filtrados);
  });