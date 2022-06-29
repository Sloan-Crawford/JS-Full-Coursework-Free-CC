// Variables --------------
let myLeads = [];
let listItems = "";
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

// Load saved leads --------------
if (leadsFromLocalStorage) {
 myLeads = leadsFromLocalStorage;
 render(myLeads);
}

// Save Tab --------------
tabBtn.addEventListener("click", function() {
 chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  myLeads.push(tabs[0].url);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
 })
});

// Render --------------
function render(leads) {
 let listItems = "";
 for (let i = 0; i < leads.length; i++) {
  listItems += `
   <li>
    <a href='${leads[i]}' target='#'> ${leads[i]} </a>
   </li>
  `;
 }
 // best to manipulate the DOM one time out of the loop to reduce cost:
 ulEl.innerHTML = listItems;
};

// Delete All --------------
deleteBtn.addEventListener("click", function() {
 localStorage.clear();
 console.clear();
 myLeads = [];
 render(myLeads);
});

// Save Input --------------
inputBtn.addEventListener("click", function() {
 myLeads.push(inputEl.value);
 inputEl.value = "";
 // for persisting data across page refresh (store array in local storage)
 localStorage.setItem("myLeads", JSON.stringify(myLeads));
 render(myLeads);
});





