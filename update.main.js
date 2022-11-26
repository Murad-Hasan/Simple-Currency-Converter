const input = require('sync-input');
const currencies = {USD: 1.0, JPY: 113.5, EUR: 0.89, RUB: 74.36, GBP: 0.75};


function initialInfo() {
    console.log(`Welcome to Currency Converter!
1 USD equals ${currencies['USD']} USD
1 USD equals ${currencies['JPY']} JPY
1 USD equals ${currencies['EUR']} EUR
1 USD equals ${currencies['RUB']} RUB
1 USD equals ${currencies['GBP']} GBP`);
}


function inputChoice() {
    console.log(`What do you want to do?
1-Convert currencies 2-Exit program`);
    let answer = Number(input());
    while (isNaN(answer) | answer > 2) {
        console.log("Unknown input");
        answer = Number(input());
        console.log(`What do you want to do?
1-Convert currencies 2-Exit program`);
    }
    if (answer === 2) {
        console.log("Have a nice day!");
    }
    return answer;
}


function convert() {
    console.log(`What do you want to convert?`);
    let from = input('From:').toUpperCase();
    if (!(from in currencies)) console.log('Unknown currency');
    else {
        let to = input('To:').toUpperCase();
        if (!(to in currencies)) console.log('Unknown currency');
        else {
            let amount = Number(input('Amount:'));
            if (amount < 1) console.log('The amount cannot be less than 1');
            else if (isNaN(amount)) console.log("The amount has to be a number");
            else console.log(`Result: ${amount} ${from} equals ${((amount * currencies[to]) / currencies[from]).toFixed(4)} ${to}`);
        }
    }
}


function runProgram() {
    while (answer !== 2) {
        if (answer === 2) {
            console.log("Have a nice day!");
            return;
        } else {
            convert();
        }
        if (answer === 1) {
            answer = inputChoice();
        }
    }
}


initialInfo();
let answer = inputChoice();
runProgram();
