const femaleTeams = [
    { name: "Leonas", wins: 3, played: 5 },
    { name: "Estrellas", wins: 4, played: 6 },
    { name: "Valkirias", wins: 2, played: 5 },
    { name: "Reinas", wins: 5, played: 6 },
    { name: "Sirenas", wins: 1, played: 4 },
    { name: "Panteras", wins: 3, played: 6 },
  ];
  
  const container = document.getElementById("femaleCardsContainer");
  
  femaleTeams.forEach(team => {
    const col = document.createElement("div");
    col.className = "col d-flex justify-content-center";
  
    const card = document.createElement("div");
    card.className = "card fixed-card-female text-center";
    card.innerHTML = `
      <img 
        src="assets/img/user.png" 
        class="card-img-top rounded-circle mx-auto mt-3" 
        alt="${team.name}" 
        style="width: 80px; height: 80px;">
      <div class="card-body">
        <h5 class="card-title">${team.name}</h5>
        <p class="card-text wins mb-1">Victorias: ${team.wins}</p>
        <p class="card-text played">Partidos : ${team.played}</p>
        <button class="ver-equipo-btn">Ver equipo</button>
      </div>
    `;
  
    col.appendChild(card);
    container.appendChild(col);
  });
  