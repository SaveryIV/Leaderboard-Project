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
  if (matches && matches.length > 1) {
    // eslint-disable-next-line prefer-destructuring
    id = matches[1];
    url = `${url}${id}/scores/`;
    console.log(url);
  } else {
    console.log('ID not found in the result message.');
  }
};

newGame();

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

export const getScores = async () => {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
  return result;
};