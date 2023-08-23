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
const currentStrike0El=document.querySelector('#current0');
const currentStrike1El=document.querySelector('#current1');

let scores,currentScore,activePlayer,playing,currentCounter;

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
  currentStrike0El.classList.remove('currentStrike');
  currentStrike1El.classList.remove('currentStrike');
  document.querySelector('#currentLabel--0').textContent='current';
  document.querySelector('#currentLabel--1').textContent='current';


};
init();

const switchPlayer=function(){
    document.querySelector(`#current--${activePlayer}`).textContent=0;
    document.querySelector(`#currentLabel--${activePlayer}`).textContent='current';
    document.querySelector(`#potential--${activePlayer}`).textContent=scores[activePlayer];
    currentScore=0;
    activePlayer=activePlayer===0 ? activePlayer=1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    currentCounter=0;
    currentStrike0El.classList.remove('currentStrike');
    currentStrike1El.classList.remove('currentStrike');


    

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
    currentCounter++;
    document.querySelector(`#current--${activePlayer}`).textContent=currentScore;
    document.querySelector(`#potential--${activePlayer}`).textContent=scores[activePlayer]+currentScore;
    if(currentCounter>=3)
    {
    document.querySelector(`#currentLabel--${activePlayer}`).textContent='current 🔥';
    activePlayer===0 ? currentStrike0El.classList.add('currentStrike') :
    currentStrike1El.classList.add('currentStrike');
    
    }

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
  if (scores[activePlayer]>=100){
    //finish the game
    playing=false;
    diceEl.classList.add('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    document.querySelector(`#name--${activePlayer}`).textContent=`PLAYER ${activePlayer+1} WINS !`;
  }else{
  //switch to the next player
  switchPlayer();
  }
  }
});
btnNew.addEventListener('click',init);
