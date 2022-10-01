// login event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transaction = document.getElementById("transaction");
  transaction.style.display = "block";
});
// deposit event handler
const depositBtn = document.getElementById("depositBtn");
depositBtn.addEventListener("click", function () {
  const depositNum = getInputNumber("depositAmount");
  updateSpanText("currentDeposit", depositNum);
  updateSpanText("amountBalance", depositNum);
  document.getElementById("depositAmount").value = "";
});

// withdraw event handler
const withdrawBtn = document.getElementById("withdrawBtn");
withdrawBtn.addEventListener("click", function () {
  const withdrawNumber = getInputNumber("withdrawAmount");
  updateSpanText("withdrawBalance", withdrawNumber);
  updateSpanText("amountBalance", -1 * withdrawNumber);
  document.getElementById("withdrawAmount").value = "";
});

// get input number
function getInputNumber(id) {
  const amount = document.getElementById(id).value;
  const amountNumber = parseFloat(amount);
  return amountNumber;
}

// total amount and desposit convert
function updateSpanText(id, depositNum) {
  const current = document.getElementById(id).innerText;
  const amountNumber = parseFloat(current);
  const totalAmount = depositNum + amountNumber;
  document.getElementById(id).innerText = totalAmount;
}
