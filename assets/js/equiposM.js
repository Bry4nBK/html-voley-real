const femaleTeams = [
    {
      nombre: "Ana",
      apellido1: "Pérez",
      apellido2: "Gómez",
      edad: 22,
      posicion: "Delantera"
    },
    {
      nombre: "Laura",
      apellido1: "Martínez",
      apellido2: "López",
      edad: 24,
      posicion: "Centrocampista"
    },
    {
      nombre: "Claudia",
      apellido1: "Ramírez",
      apellido2: "Torres",
      edad: 21,
      posicion: "Defensa"
    },
    {
      nombre: "Elena",
      apellido1: "Sánchez",
      apellido2: "Morales",
      edad: 23,
      posicion: "Portera"
    },
    {
      nombre: "Paula",
      apellido1: "Castillo",
      apellido2: "Fernández",
      edad: 25,
      posicion: "Defensa"
    },
    {
      nombre: "Sara",
      apellido1: "Díaz",
      apellido2: "Ruiz",
      edad: 20,
      posicion: "Delantera"
    }
  ];
  
  
  const container = document.getElementById("female-teams-container");

  femaleTeams.forEach((player) => {
    const col = document.createElement("div");
    col.className = "col-6 col-md-4 d-flex justify-content-center";
  
    const card = document.createElement("div");
    card.className = "card-female";
  
    card.innerHTML = `
      <img src="assets/img/user.png" alt="${player.nombre}">
      <h5>${player.nombre} </h5>
        <h5> ${player.apellido1} ${player.apellido2}</h5>
      <p class="wins"> ${player.edad} años</p>
      <p class="played"> ${player.posicion}</p>
    `;
  
    col.appendChild(card);
    container.appendChild(col);
  });
  