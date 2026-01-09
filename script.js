const loginbtn=document.getElementById("login").addEventListener("click", function(){
    const loginArea=document.getElementById("bank-area");
    loginArea.style.display="none";
    const transactionArea=document.getElementById("transaction-area");
    transactionArea.style.display="block";
})