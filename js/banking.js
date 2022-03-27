// document.getElementById('deposit-button').addEventListener('click',function(){
//     const depositInput = document.getElementById('deposit-input');
//     const newDepositAmountText = depositInput.value;
//     const newDepositAmount = parseFloat(newDepositAmountText);

//     const depositTotal = document.getElementById('deposit-total');

//     const previousDepositText = depositTotal.innerText;
//     const previousDepositAmount = parseFloat(previousDepositText);
//     const newDepositTotal = previousDepositAmount + newDepositAmount;
//     depositTotal.innerText = newDepositTotal;

//     depositInput.value ='';

// })

// document.getElementById('withdraw-button').addEventListener('click',function(){
//     const withdrawInput = document.getElementById('withdraw-input');
//     const withdrawAmount = withdrawInput.value;

//     const withdrawTotal = document.getElementById('withdraw-total');
//     withdrawTotal.innerText = withdrawAmount;

//     withdrawInput.value ='';

// })


let depositValue = document.getElementById("deposit-value");
let depositOutput = document.getElementById("deposit-output");

let withdrawValue = document.getElementById("withdraw-value");
let withdrawOutput = document.getElementById("withdraw-output");

let balanceOutput = document.getElementById("balance-output");

function addMoney(currentAmount,newAmount){
return Number(currentAmount) + Number(newAmount);
}

function removeMoney(currentAmount,newAmount){
  return Number(currentAmount) - Number(newAmount);
}


function deposit() {

  const totalDeposit = addMoney(depositOutput.innerText,depositValue.value);
  depositOutput.innerText = totalDeposit;

  const totalBalance = addMoney(balanceOutput.innerText,depositValue.value);
  balanceOutput.innerText = totalBalance;

  depositValue.value = "";
}

function withdraw() {

  const totalWithdraw = addMoney(withdrawOutput.innerText,withdrawValue.value);
  withdrawOutput.innerText = totalWithdraw
  
  const totalBalance = removeMoney(balanceOutput.innerText,withdrawValue.value)
  balanceOutput.innerText = totalBalance;

  withdrawValue.value = "";
}


