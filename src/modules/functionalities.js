/* import { Board } from './board.js'; */
let url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
let id;

const newGame = async () => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      name: 'My cool new game',
    }),
  });
  const resultJSON = await response.json();
  const resultMessage = resultJSON.result;
  // Usar expresión regular para buscar el ID
  const idRegex = /Game with ID: ([A-Za-z0-9]+) added/;
  const matches = resultMessage.match(idRegex);
  if (matches && matches.length > 0) {
    // eslint-disable-next-line prefer-destructuring
    id = matches[0];
    url = `${url}${id}/scores/`;
  } else {
    console.log('ID not found in the result message.');
  }
};

if (!newGame()) {
  newGame();
}

export const addScore = async (name, score) => {
/*   const newScore = new Board(name, score); */
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: name,
      score,
    }),
  };
  await fetch(url, requestOptions);
};

const display = () => {
  const items = JSON.parse(localStorage.getItem('list'));
  const $listScores = document.querySelector('.list-scores');
  items.sort((a, b) => b.score - a.score);
  let html = '';
  localStorage.setItem('list', JSON.stringify(items));
  items.forEach((player) => {
    html += `
      <li>${player.user}: ${player.score}</li>
    `;
  });
  $listScores.innerHTML = html;
};

export const getScores = async () => {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result.result);
  localStorage.setItem('list', JSON.stringify(result.result));
  await display();
};

export const refresh = () => {
  const list = JSON.parse(localStorage.getItem('list'));
  const $listScores = document.querySelector('.list-scores');
  let html = '';
  list.forEach((player) => {
    html += `
      <li>${player.user}: ${player.score}</li>
    `;
  });
  $listScores.innerHTML = html;
};