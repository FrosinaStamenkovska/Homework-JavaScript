// AccountMoney is the current amount of money available on the bank account
let accountMoney = 1000;
let requestedMoney = parseFloat(prompt("Please enter an amount of money."))

function atm(money){
    if(requestedMoney > accountMoney){
        return alert (`Not enough money`);
    } else if (requestedMoney <= accountMoney){
        let moneyLeft = accountMoney - requestedMoney;
        return alert (`Please take your ${requestedMoney} MKD!
        You have ${moneyLeft} MKD left on your bank account. `)
    } else
        return alert ('Error! Invalid enter!')
} 

atm(requestedMoney);
