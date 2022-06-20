let total = document.getElementById("count-el");
const button = document.getElementById("increment-btn");
const button2 = document.getElementById("save-btn");
const button3 = document.getElementById("reset");
let saveEl = document.getElementById("save-el");

let count = 0;

const increment = () => {
 count++;
 // console.log("the button was clicked"); 
 total.textContent = count;
};

button.addEventListener("click", increment); 

const save = () => {
 // result = console.log(`the total is ${count}`);
 saveEl.textContent += ` ${count}, `;
}

button2.addEventListener("click", save);

const resetCount = () => {
 count = 0;
 total.textContent = count;
}

button3.addEventListener("click", resetCount);





let firstName = "Sloan";
let lastName = "Crawford";
let fullName = `${firstName } ${lastName}`;
console.log(fullName);