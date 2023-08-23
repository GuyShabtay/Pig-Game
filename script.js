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
const potential0El=document.querySelector('#potential--0');
const potential1El=document.querySelector('#potential--1');
const diceEl=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');
const name0El=document.querySelector('#name--0');
const name1El=document.querySelector('#name--1');

let scores,currentScore,activePlayer,playing,potential;

//starting conditions
const init=function(){

  
  scores=[0,0];
  currentScore=0;
  currentCounter=0;
  activePlayer=0;
  playing=true;
  
  score0El.textContent=0;
  score1El.textContent=0;
  current0El.textContent=0;
  current1El.textContent=0;
  potential0El.textContent=0;
  potential1El.textContent=0;
  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  document.querySelector('#name--0').textContent='PLAYER 1';
  document.querySelector('#name--1').textContent='PLAYER 2';

};
init();

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
    document.querySelector(`#potential--${activePlayer}`).textContent=scores[activePlayer]+currentScore;
  }else{
    //switch to next player
    scores[activePlayer]=0;
    document.querySelector(`#score--${activePlayer}`).textContent=0;
    document.querySelector(`#potential--${activePlayer}`).textContent=0;
    switchPlayer();

    
  }}
});

btnHold.addEventListener('click',function(){
  if (playing){
  //add current score to active player's score
  scores[activePlayer]+=currentScore;
  document.querySelector(`#score--${activePlayer}`).textContent=scores[activePlayer];
  //check if player's score>=100
  if (scores[activePlayer]>=80){
    //finish the game
    playing=false;
    diceEl.classList.add('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    document.querySelector(`#name--${activePlayer}`).textContent=`PLAYER ${activePlayer} WINS !`;
  }else{
  //switch to the next player
  switchPlayer();
  }
  }
});
btnNew.addEventListener('click',init);
