let getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (11 - 2 + 1)) + 2;
}

const firstCard = getRndInteger();
const secondCard = getRndInteger();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let startBtn = document.querySelector(".start-btn");
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let hitBtn = document.querySelector(".hit-btn");
// console.log(sum);

function renderGame() {
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
  console.log(`Do you have blackjack? ${hasBlackJack}`);
  console.log(`Are you alive? ${isAlive}`);
}

const newCard = () => {
 let nextCard = getRndInteger();
 messageEl.textContent = "Drawing a new card";
 sum += nextCard;
 cards.push(`${nextCard}`);
 renderGame();
}

startBtn.addEventListener("click", renderGame);
hitBtn.addEventListener("click", newCard);




// additional notes:

// This JavaScript function always returns a random number between min and max (both included):
// let getRndInteger = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) ) + min;
// }
// console.log(getRndInteger(min, max));
