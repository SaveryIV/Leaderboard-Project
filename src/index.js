import './style.css';
import { addScore, getScores, refresh } from './modules/functionalities.js';

const $score = document.getElementById('score');
const $name = document.getElementById('name');
const $submit = document.getElementById('submit');
const $refresh = document.getElementById('refresh');

$submit.addEventListener('click', () => {
  if ($name.value !== '' && $score.value !== null) {
    addScore($name.value, parseInt($score.value, 10));
  }
  setTimeout(() => {
    getScores();
  }, 500);
});

$refresh.addEventListener('click', () => {
  if (localStorage.getItem('list')) {
    refresh();
  }
});