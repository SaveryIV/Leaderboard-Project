import './board.js';

const players = [{
  id: 1,
  username: 'Masuma',
  score: 100,
},
{
  id: 2,
  username: 'Gappi',
  score: 85,
},
{
  id: 3,
  username: 'Naz',
  score: 80,
},
{
  id: 4,
  username: 'Rubab',
  score: 70,
},
{
  id: 5,
  username: 'Carmen',
  score: 100,
},
];

const display = (index) => {
  const table = document.querySelector('.list-scores');
  table.innerHTML += `
    <li>
        <span class="output">${players[index].username}: ${players[index].score}</span>
    </li>`;
};

for (let i = 0; i <= players.length; i += 1) {
  display(i);
}