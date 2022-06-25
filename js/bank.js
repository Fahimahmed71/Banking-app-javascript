// function
function getInputValue(inputId) {
  const input = document.getElementById(inputId);
  const amount = input.value;

  // Clear Value
  input.value = "";

  return amount;
}

function updateTotalField(totalFieldId, amount) {
  const totel = document.getElementById(totalFieldId);
  const totelText = totel.innerHTML;

  totel.innerHTML = parseFloat(totelText) + parseFloat(amount);
}

function getCurrentBalance() {
  const balanceTotal = document.getElementById("totel-balance");
  balanceTotalText = balanceTotal.innerHTML;

  return balanceTotalText;
}

function updateBalance(amount, isAdd) {
  const balanceTotal = document.getElementById("totel-balance");

  const balanceTotalText = getCurrentBalance();

  if (isAdd === true) {
    balanceTotal.innerHTML = parseFloat(balanceTotalText) + parseFloat(amount);
  } else {
    balanceTotal.innerHTML = parseFloat(balanceTotalText) - parseFloat(amount);
  }
}

// Deposit
document.getElementById("deposit-btn").addEventListener("click", function () {
  const depoAmount = getInputValue("amount-deposit");

  if (depoAmount > 0) {
    // get current deposit
    updateTotalField("deposit-totel", depoAmount);

    // Update Balance
    updateBalance(depoAmount, true);
  } else {
    alert(ErrorEvent);
  }
});

// Withdraw
document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawAmount = getInputValue("amount-withdraw");

  const currentBalance = getCurrentBalance();

  if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
    // Get current WithDraw
    updateTotalField("withdraw-totel", withdrawAmount);

    // update Balance
    updateBalance(withdrawAmount, false);
  } else {
    alert(ErrorEvent);
  }
});
