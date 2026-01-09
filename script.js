//login button event handler
const loginbtn=document.getElementById("login").addEventListener("click", function(){
    const loginArea=document.getElementById("bank-area");
    loginArea.style.display="none";
    const transactionArea=document.getElementById("transaction-area");
    transactionArea.style.display="block";
});

//deposit button event handler
const depositbtn=document.getElementById("addDeposit").addEventListener("click", function(){
    const depositAmount=document.getElementById("depositAmount").value;
    const depositNumber=parseFloat(depositAmount);

    update("currentDeposit", depositNumber);
    update("currentBalance", depositNumber);
    document.getElementById("depositAmount").value="";

});

//withdraw button event handler
const withdrawbtn=document.getElementById("addWithdraw").addEventListener("click", function(){
    const withdrawAmount=document.getElementById("withdrawAmount").value;
    const withdrawNumber=parseFloat(withdrawAmount);

    updatewithdraw("currentWithdraw", withdrawNumber);
    updatewithdraw("currentBalance", -withdrawNumber);
    document.getElementById("withdrawAmount").value="";
});

function update(id, depositNumber){
    const current=document.getElementById(id).innerText;
    const currentNumber=parseFloat(current);
    const total=currentNumber + depositNumber;
    document.getElementById(id).innerText=total;
}
function updatewithdraw(id, withdrawNumber){
    const current=document.getElementById(id).innerText;
    const currentNumber=parseFloat(current);
    const total=currentNumber + withdrawNumber;
    document.getElementById(id).innerText=total;
}
