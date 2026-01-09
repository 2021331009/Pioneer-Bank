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

function update(id, amount){
    const current=document.getElementById(id).innerText;
    const currentNumber=parseFloat(current);
    const total=currentNumber + amount;
    document.getElementById(id).innerText=total;
}