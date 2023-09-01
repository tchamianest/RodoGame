'use strict';
/////////// select the needed element  and create some element storage

const player1 = document.getElementById('score--0');
const player2 = document.getElementById('score--1');
const player11 = document.querySelector('.player--0');
const player22 = document.querySelector('.player--1');
const dice = document.querySelector('.dice');
const rollbtn = document.querySelector('.btn--roll');
const reset = document.querySelector('.btn--new');
const hold = document.querySelector('.btn--hold');
const current1 = document.getElementById('current--0');
const current2 = document.getElementById('current--1');

let current = 0;
let curplayer = 0;
let scores = [0, 0];
let playok = true;
const a = Number(prompt('Enter the maximum number the winner Rich:'));
//set the starting for

player1.textContent = '0';
player2.textContent = '0';
document.querySelector(`.winner`).classList.add('hiden');
dice.classList.add('hiden');

// switch player Function

const Switch = function () {
  document.getElementById(`current--${curplayer}`).innerHTML = 0;
  current = 0;
  curplayer = curplayer === 1 ? 0 : 1;
  player11.classList.toggle('player--active');
  player22.classList.toggle('player--active');
};
//end of switch player

//roll dice button functionality

rollbtn.addEventListener('click', function () {
  if (playok) {
    const number = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hiden');
    dice.src = `dice-${number}.png`;
    if (number !== 1) {
      current += number;
      document.getElementById(`current--${curplayer}`).innerHTML = current;
    } else {
      Switch();
    }
  }
});

hold.addEventListener('click', function () {
  if (playok) {
    scores[curplayer] += current;
    document.getElementById(`score--${curplayer}`).innerHTML =
      scores[curplayer];

    if (scores[curplayer] >= a) {
      dice.classList.add('hiden');
      document
        .querySelector(`.player--${curplayer}`)
        .classList.add('player--winner');
      document.querySelector(`.winner`).classList.remove('hiden');
      document.querySelector(`.winner`).textContent = `player-${
        curplayer + 1
      } win🏆🏆🥇`;
      document
        .querySelector(`.player--${curplayer}`)
        .classList.remove('player--active');
    } else {
      Switch();
    }
  }
});
reset.addEventListener('click', function () {
  const a = Number(prompt('Enter the maximum number the winner Rich:'));
  //set the starting for
  current = 0;
  curplayer = 0;
  scores = [0, 0];

  current1.textContent = 0;
  current2.textContent = 0;
  player1.textContent = '0';
  player2.textContent = '0';
  document.querySelector(`.winner`).classList.add('hiden');
  dice.classList.add('hiden');
  player11.classList.add('player--active');
  player22.classList.remove('player--active');
  player11.classList.remove('player--winner');
  player22.classList.remove('player--winner');
});
