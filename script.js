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

    const currentDeposit=document.getElementById("currentDeposit").innerText;
    const currentDepositNumber=parseFloat(currentDeposit);
    const totalDeposit=currentDepositNumber + depositNumber;
    document.getElementById("currentDeposit").innerText=totalDeposit;
    document.getElementById("depositAmount").value="";
});