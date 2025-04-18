const maleTeams = [
    {
      nombre: "Carlos",
      apellido1: "Ramírez",
      apellido2: "López",
      edad: 26,
      posicion: "Defensa"
    },
    {
      nombre: "Andrés",
      apellido1: "García",
      apellido2: "Fernández",
      edad: 28,
      posicion: "Delantero"
    },
    {
      nombre: "Javier",
      apellido1: "Soto",
      apellido2: "Martínez",
      edad: 25,
      posicion: "Centrocampista"
    },
    {
      nombre: "Diego",
      apellido1: "Torres",
      apellido2: "Morales",
      edad: 27,
      posicion: "Portero"
    },
    {
      nombre: "Lucas",
      apellido1: "Castro",
      apellido2: "Díaz",
      edad: 24,
      posicion: "Defensa"
    },
    {
      nombre: "Miguel",
      apellido1: "Vega",
      apellido2: "Ruiz",
      edad: 23,
      posicion: "Delantero"
    }
  ];
  
  
  const container = document.getElementById("male-teams-container");

  maleTeams.forEach((player) => {
    const col = document.createElement("div");
    col.className = "col-6 col-md-4 d-flex justify-content-center";
  
    const card = document.createElement("div");
    card.className = "card-male";
  
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
  