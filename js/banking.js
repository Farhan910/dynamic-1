document.getElementById('deposit-button').addEventListener('click',function(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;

    
    

    const depositTotal = document.getElementById('deposit-total');
    depositTotal.innerText = depositAmount;

    depositInput.value ='';


    
})

document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;

    
    

    const withdrawTotal = document.getElementById('withdraw-total');
    withdrawTotal.innerText = withdrawAmount;

    withdrawInput.value ='';


    
})