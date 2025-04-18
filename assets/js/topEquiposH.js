const maleTeams = [
  { name: "Berserk", wins: 3, played: 5 },
  { name: "Dragones", wins: 4, played: 6 },
  { name: "Titanes", wins: 2, played: 5 },
  { name: "Guerreros", wins: 5, played: 6 },
  { name: "Lobos", wins: 1, played: 4 },
  { name: "Águilas", wins: 3, played: 6 },
];

const container = document.getElementById("maleCardsContainer");

maleTeams.forEach(team => {
  const col = document.createElement("div");
  col.className = "col d-flex justify-content-center";

  const card = document.createElement("div");
  card.className = "card fixed-card-male text-center";
  card.innerHTML = `
    <img 
      src="assets/img/user.png" 
      class="card-img-top rounded-circle mx-auto mt-3" 
      alt="${team.name}" 
      style="width: 80px; height: 80px;">
    <div class="card-body">
      <h5 class="card-title">${team.name}</h5>
      <p class="card-text wins mb-1">Partidos Ganados: ${team.wins}</p>
      <p class="card-text played">Partidos Jugados: ${team.played}</p>
      <button class="ver-equipo-btn">Ver equipo</button>
    </div>
  `;

  col.appendChild(card);
  container.appendChild(col);
});
