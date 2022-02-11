function idToValue(id, flag) {
  const input = document.getElementById(id);
  let returningVal = 0;
  if (flag) {
    returningVal = parseFloat(input.value);
    input.value = "";
  } else {
    returningVal = parseFloat(input.innerText);
    input.innerText = "";
  }
  return returningVal;
}

function errorMessage(val) {
  if (val == NaN) {
    alert("Please enter a number");
  } else {
    return val;
  }
}

function calcOfVal(firstNum, secondNum, operation) {
  if (operation) {
    return firstNum + secondNum;
  } else {
    return abs(firstNum - secondNum);
  }
}

function updateText(updated, id) {
  document.getElementById(id).innerText = updated;
}

document.getElementById("deposit-btn").addEventListener("click", (event) => {
  event.preventDefault();

  /* getting input and checking/validation */
  const deposit = idToValue("deposit", true);
  const depositVal = errorMessage(deposit);

  const withdraw = idToValue("withdraw", true);
  const withdrawVal = errorMessage(withdraw);

  const previousDeposit = idToValue("deposit-amount", false);
  const previousWithdraw = idToValue("withdraw-amount", false);
  const previousTotal = idToValue("total-amount", false);

  /* calculation */
  const updatedDeposit = calcOfVal(depositVal, previousDeposit, true);
  const updatedTotal = calcOfVal(updatedDeposit, previousTotal, true);
  //   const updatedWithdraw = calcOfVal(withdrawVal, previousWithdraw, true);
  //   const updatedTotal = calcOfVal(updatedWithdraw, previousTotal, false);

  /* updateText */
  updateText(updatedDeposit, "deposit-amount");
  updateText(updatedTotal, "total-amount");
});
