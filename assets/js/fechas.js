const matches = [
  { time: '14:00', home: 'FENIX', away: 'PANTERAS(PH)', gender: 'male' },
  { time: '15:30', home: 'VANELUS', away: 'VELMAX', gender: 'male' },
  { time: '16:00', home: 'REX TC', away: 'VODME', gender: 'male' },
  { time: '17:00', home: 'DIABLAS', away: 'VELMAX', gender: 'female' },
  { time: '18:45', home: 'VODME', away: 'REX U-19', gender: 'female' },
  { time: '19:30', home: 'KAPURA', away: 'REX TC', gender: 'female' }
];


// Función para convertir hora AM/PM a Date para ordenar
function parseTime(t) {
  return new Date('1970/01/01 ' + t);
}

// Ordenamos por hora
matches.sort((a, b) => parseTime(a.time) - parseTime(b.time));

// Referencias a los contenedores de cada género
const containerFemale = document.getElementById('calendar-female');
const containerMale = document.getElementById('calendar-male');

matches.forEach(m => {
  const col = document.createElement('div');
  col.className = 'col-12 d-flex justify-content-center'; // full width for responsiveness

  const card = document.createElement('div');
  card.className = [
    'card',
    'h-100',
    'fixed-card', 
    m.gender === 'female' ? 'card-female' : 'card-male'
  ].join(' ');

  card.innerHTML = `
    <div class="card-body d-flex flex-column justify-content-center">
      <h5 class="card-title text-center text-break mb-4">${m.time}</h5>
      <div class="row align-items-center gx-0 mb-3">
        <div class="col text-end text-break text-dark fw-bolder">${m.home}</div>
        <div class="col-2 text-center"><strong>VS</strong></div>
        <div class="col text-start text-break text-dark fw-bolder">${m.away}</div>
      </div>
    
    </div>
  `;

  col.appendChild(card);
  if (m.gender === 'female') {
    containerFemale.appendChild(col);
  } else {
    containerMale.appendChild(col);
  }
});