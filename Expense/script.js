const balance = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

//for the local storage
const localStorageTransactions = JSON.parse(
  localStorage.getItem("transactions")
);

let transactions =
  localStorage.getItem("transactions") !== null ? localStorageTransactions : [];

function addTransaction(e) {
  e.preventDefault();

  if (text.value.trim() === "" || amount.value.trim() === "") {
    alert("Please add a text and amount");
  } else {
    const transaction = {
      id: generateID(),
      text: text.value,
      amount: +amount.value,
    };

    transactions.push(transaction);

    addTransactionDOM(transaction);

    updateValues();

    updateLocalStorage();

    text.value = "";
    amount.value = "";
  }
}
//generate random ID
function generateID() {
  return Math.floor(Math.random() * 100000000);
}
//adding the transaction to the DOM list
function addTransactionDOM(transaction) {
  //fist we haveto get the sign. if negative or positive
  const sign = transaction.amount < 0 ? "-" : "+";

  const item = document.createElement("li");

  //add a class based on the value entered by the user
  item.classList.add(transaction.amount < 0 ? "minus" : "plus");

  item.innerHTML = `${transaction.text} <span> ${sign}${Math.abs(
    transaction.amount
  )} </span> <button class = "delete-btn" onclick = " removeTransaction(${
    transaction.id
  })">x</button>`;

  list.appendChild(item);
}
//code to update the balance, income and expense
function updateValues() {
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter((item) => 0)
    .reduce((item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  //updating the content of the html
  balance.innerHTML = `$${total}`;
  money_plus.innerHTML = `$${income}`;
  money_minus.innerHTML = `$${expense}`;
}
//code to remove a transaction
function removeTransaction(id) {
  transactions = transactions.filter((transaction) => transaction.id !== id);

  updateLocalStorage();

  init();
}
//updating transaction in local storage
function updateLocalStorage() {
  localStorage.setItem("transaction", JSON.stringify(transactions));
}

//start listin the items
function init() {
  list.innerHTML = "";

  transactions.forEach(addTransactionDOM);
  updateValues();
}
init();

form.addEventListener("submit", addTransaction);
