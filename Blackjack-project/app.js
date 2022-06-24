// if written as an arrow function, this isn't hoisted so it needs to be declared before invoked:
let getRndInteger = (min, max) => {
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + 2;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else return randomNumber;
};

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
const startBtn = document.querySelector(".start-btn");
const messageEl = document.querySelector("#message-el");
const sumEl = document.querySelector("#sum-el");
const cardsEl = document.querySelector("#cards-el");
const hitBtn = document.querySelector(".hit-btn");

let player = {
  name: "Sloan",
  chips: 145,
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = `${player.name}: $${player.chips}`;

  function addCard(){
  cardsEl.textContent = `Cards: ${[cards]}`;
  sumEl.textContent = `Sum: ${sum}`;
  hitBtn.classList.add("hit-btn-show");

  if (sum < 21) {
    message = "Do you want to draw another card? 🧐";
  } else if (sum === 21) {
    message = "Woohoo! You got a Blackjack! 😄🥳";
    hasBlackJack = true;
  } else {
    message = "Oh no, you busted and lost. 😭";
    isAlive = false;
  }
  messageEl.textContent = message;
  // console.log(`Do you have blackjack? ${hasBlackJack}`);
  // console.log(`Are you alive? ${isAlive}`);
} 

function renderGame() {
  isAlive = true;
  firstCard = getRndInteger(1,13);
  secondCard = getRndInteger(1,13);
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
addCard();
}

const newCard = () => {
  if (isAlive && !hasBlackJack) {
 let nextCard = getRndInteger(1,13);
 messageEl.textContent = "Drawing a new card";
 sum += nextCard;
 cards.push(`${nextCard}`);
 addCard();
  }
}

startBtn.addEventListener("click", renderGame);
hitBtn.addEventListener("click", newCard);


// additional notes:

// This JavaScript function always returns a random number between min and max (both included):
// let getRndInteger = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) ) + min;
// }
// console.log(getRndInteger(min, max));