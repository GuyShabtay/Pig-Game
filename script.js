'use strict';
//selcting elements
const score0El=document.querySelector('#score--0');
const score1El=document.querySelector('#score--1');
//the same thing
//const score0El=document.getElementById('score--0')
const current0El=document.querySelector('#current--0');
const current1El=document.querySelector('#current--1');
const diceEl=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');

//starting conditions
score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');

const scores=[0,0];
let currentScore=0;
let activePlayer=0;

//rolling the dice functuallity
btnRoll.addEventListener('click',function(){
  //1. generating a random dice roll
  const dice=Math.trunc(Math.random()*6)+1;
  //2.display the dice
  diceEl.classList.remove('hidden');
  diceEl.src=`dice-${dice}.png`;
  //3.check for rolled 1: if true
  if(dice!==1){
    //add dice to current score
    currentScore+=dice;
    document.querySelector(`#current--${activePlayer}`).textContent=currentScore;
  }else{
    //switch to next player
    document.querySelector(`#current--${activePlayer}`).textContent=0;
    currentScore=0;
    activePlayer=activePlayer===0 ? activePlayer=1 : 0;
  }
});
