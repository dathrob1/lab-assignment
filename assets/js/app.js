var balance = 1000;

menu();

function withdraw(
){ var withdrawal = parseInt(prompt("enter withdrawal amount"))
if(parseInt(balance) < withdrawal){
    alert('insufficient funds')
    getbalance()
}
else{
    balance -= withdrawal;
    getbalance()}
}


function deposite(){ 
    var depositeamount = parseInt(prompt("enter deposite amount"))
    balance += depositeamount;
    getbalance();
}

function transfer(){
    var account= parseInt(prompt("enter account number"))
    var amount = parseInt(prompt("enter amount"))
    balance -= amount
    alert('transferred succesfully')
    getbalance();
}
function getbalance() {
    alert('Your current balance is: '+balance);
    menu();
}
function menu(){
    
    var choice = prompt("welcome to M BANK- 1.Deposite 2.withdraw 3.transfer 4.to checkbalance 5 to exit")
    if (choice == 1){
        deposite()
    }  
    if (choice == 2){
        withdraw()
    }
    if(choice == 3){
        transfer()
    }
    if(choice==4){
        getbalance()
    }
    else{ balance()}

}