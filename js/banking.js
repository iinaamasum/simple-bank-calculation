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
  if (isNaN(val)) {
    alert("Please login again and enter valid amount ");
    window.location.href = "./index.html";
  } else if (val < 0) {
    alert("Please login again and enter positive amount");
    window.location.href = "./index.html";
  } else {
    return val;
  }
}

function calcOfVal(firstNum, secondNum, operation) {
  if (operation) {
    return firstNum + secondNum;
  } else {
    return firstNum - secondNum;
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
  console.log(
    "🚀 ~ file: banking.js ~ line 41 ~ document.getElementById ~ depositVal",
    depositVal
  );

  const previousDeposit = idToValue("deposit-amount", false);
  console.log(
    "🚀 ~ file: banking.js ~ line 44 ~ document.getElementById ~ previousDeposit",
    previousDeposit
  );

  const previousTotal = idToValue("total-amount", false);
  console.log(
    "🚀 ~ file: banking.js ~ line 45 ~ document.getElementById ~ previousTotal",
    previousTotal
  );

  /* calculation */
  const updatedDeposit = calcOfVal(depositVal, previousDeposit, true);
  const updatedTotal = calcOfVal(depositVal, previousTotal, true);

  /* updateText */
  updateText(updatedDeposit, "deposit-amount");
  updateText(updatedTotal, "total-amount");
});

document.getElementById("withdraw-btn").addEventListener("click", (event) => {
  event.preventDefault();

  /* getting input and checking/validation */
  const withdraw = idToValue("withdraw", true);
  const withdrawVal = errorMessage(withdraw);

  const previousWithdraw = idToValue("withdraw-amount", false);
  const previousTotal = idToValue("total-amount", false);

  /* calculation */
  if (withdrawVal <= previousTotal) {
    const updatedWithdraw = calcOfVal(withdrawVal, previousWithdraw, true);
    const updatedTotal = calcOfVal(previousTotal, withdrawVal, false);
    updateText(updatedWithdraw, "withdraw-amount");
    updateText(updatedTotal, "total-amount");
  } else {
    alert("Balance is low");
  }
});
