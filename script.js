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
  const depositAmount = document.getElementById("depositAmount").value;
  const depositNum = parseFloat(depositAmount);

  // const currentDeposit = document.getElementById("currentDeposit").innerText;
  // const currentDepositNumber = parseFloat(currentDeposit);
  // const totalDeposit = depositNum + currentDepositNumber;
  // document.getElementById("currentDeposit").innerText = totalDeposit;

  // const amountBalance = document.getElementById("amountBalance").innerText;
  // const amountBalanceNumber = parseFloat(amountBalance);
  // const totalAmount = depositNum + amountBalanceNumber;
  // document.getElementById("amountBalance").innerText = totalAmount;

  updateSpanText("currentDeposit", depositNum);
  updateSpanText("amountBalance", depositNum);
  document.getElementById("depositAmount").value = "";
});
// total amount and desposit convert
function updateSpanText(id, depositNum) {
  const current = document.getElementById(id).innerText;
  const amountNumber = parseFloat(current);
  const totalAmount = depositNum + amountNumber;
  document.getElementById(id).innerText = totalAmount;
}
