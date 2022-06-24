const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
let myLeads = [];
let listItems = "";

inputBtn.addEventListener("click", function() {
 myLeads.push(inputEl.value);
 // console.log(myLeads);
 renderLeads();
 inputEl.value = "";

});

function renderLeads() {
 let listItems = "";
for (let i = 0; i < myLeads.length; i++) {
 listItems += `
  <li>
   <a href='${myLeads[i]}' target='#'> ${myLeads[i]} </a>
  </li>`;
 // or...create element, set text content, append to ul...
 // const li = document.createElement("li");
 // li.textContent = myLeads[i];
 // ulEl.append(li);
}

// best to manipulate the DOM one time out of the loop to reduce cost:
ulEl.innerHTML = listItems;
}


