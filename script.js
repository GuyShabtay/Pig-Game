'use strict';
//selcting elements
const score0El=document.querySelector('#score--0')
const score1El=document.querySelector('#score--1')
//the same thing
//const score0El=document.getElementById('score--0')
const diceEl=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');

//starting conditions
score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');

//rolling the dice functuallity
btnRoll.addEventListener('click',function(){
  //1. generating a random dice roll
  const dice=Math.trunc((Math.random)*6)+1;
  //2.display the dice
  diceEl.classList.remove
  //3.check for rolled 1: if true, switch to next player
});
