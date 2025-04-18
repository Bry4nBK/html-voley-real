const matches = [
    { time: '10:00 AM', home: 'Las Potencias',   away: 'Campeonas', gender: 'female' },
    { time: '12:30 PM', home: 'Las Guerreras',  away: 'Las Reinas',    gender: 'female' },
    { time: '03:00 PM', home: 'Las Valkirias',  away: 'Las Titanas',   gender: 'female' },
    { time: '11:00 AM', home: 'Los Guerreros',  away: 'Los Vikingos',  gender: 'male'   },
    { time: '01:45 PM', home: 'Los Dragones',   away: 'Los Leones',    gender: 'male'   },
    { time: '04:30 PM', home: 'Los Titanes',    away: 'Los Gladiadores', gender: 'male'  }
  ];

  const container = document.getElementById('calendar');

  matches.forEach(m => {
    // col d-flex justify-content-center para centrar la card
    const col = document.createElement('div');
    col.className = 'col d-flex justify-content-center';

    // agregamos fixed-card junto a h-100 y la clase de color
    const card = document.createElement('div');
    card.className = [
      'card',
      'h-100',
      'fixed-card', 
      m.gender === 'female' ? 'card-female' : 'card-male'
    ].join(' ');

    card.innerHTML = `
      <div class="card-body d-flex flex-column justify-content-center">
        <h5 class="card-title text-center text-break mb-3">${m.time}</h5>
        <div class="row align-items-center gx-0 mb-3">
          <div class="col text-end text-break text-dark fw-bolder">${m.home}</div>
          <div class="col-2 text-center"><strong>VS</strong></div>
          <div class="col text-start text-break text-dark fw-bolder">${m.away}</div>
        </div>
        <p class="text-center fw-bold mb-0">
          ${m.gender === 'female' ? 'Mujeres' : 'Hombres'}
        </p>
      </div>
    `;

    col.appendChild(card);
    container.appendChild(col);
  });