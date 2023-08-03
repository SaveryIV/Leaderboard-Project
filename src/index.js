import './style.css';
import { addScore, getScores } from './modules/functionalities.js';

const $score = document.getElementById('score');
const $name = document.getElementById('name');
const $submit = document.getElementById('submit');

$submit.addEventListener('click', () => {
  addScore($name.value, parseInt($score.value, 10));
  console.log(getScores());
});
