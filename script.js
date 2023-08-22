'use strict';
//selcting elements
const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');
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
let playing=true;

const switchPlayer=function(){
  document.querySelector(`#current--${activePlayer}`).textContent=0;
    currentScore=0;
    activePlayer=activePlayer===0 ? activePlayer=1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');

};

//rolling the dice functuallity
btnRoll.addEventListener('click',function(){
  if (playing){

  
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
    switchPlayer();
    
  }}
});

btnHold.addEventListener('click',function(){
  if (playing){
  //add current score to active player's score
  scores[activePlayer]+=currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent=scores[activePlayer];
  //check if player's score>=100
  if (scores[activePlayer]>=10){
    //finish the game
    playing=false;
    diceEl.classList.add('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  }else{
  //switch to the next player
  switchPlayer();
  }
  }
});
