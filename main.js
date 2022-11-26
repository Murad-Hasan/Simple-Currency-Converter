//Write your code here
const input = require('sync-input');
console.log("Welcome to Currency Converter!");

const USD = 1.0;
const JPY = 113.5;
const EUR = 0.89;
const RUB = 74.36;
const GBP = 0.75;

//list of currencies and their rates
console.log(`1 USD equals ${USD} USD`);
console.log(`1 USD equals ${JPY} JPY`);
console.log(`1 USD equals ${EUR} EUR`);
console.log(`1 USD equals ${RUB} RUB`);
console.log(`1 USD equals ${GBP} GBP`);

//loop calling the function
function loop(){
	//ask for user want to convert currencies or exit the program
	let choice = input("What do you want to do?\n1-Convert currencies 2-Exit program\n");
	if (choice == 1) {
		console.log("What do you want to convert?");
		let fromCurrency = input("From: ").toUpperCase();

//check if the currency is valid
		if (fromCurrency !== "USD" && fromCurrency !== "JPY" && fromCurrency !== "EUR" && fromCurrency !== "RUB" && fromCurrency !== "GBP") {
			console.log("Unknown currency");
			loop();
		} else {
			//user input
			let toCurrency = input("To: ").toUpperCase();
			if (toCurrency == "JPY" || toCurrency == "EUR" || toCurrency == "RUB" || toCurrency == "GBP" || toCurrency == "USD") {
				let amount = input("Amount: ");
				//convert to USD
				let convertedCurrency = 0;
				if (amount >= 1) {
					//check from which currency to convert  to other currency
					if (fromCurrency == "EUR" && toCurrency == "GBP") {
						convertedCurrency = (amount * GBP) / EUR;
						console.log(`Result: ${amount} ${fromCurrency} equals ${(convertedCurrency).toFixed(4)} ${toCurrency}`);
					}
					if (fromCurrency == "EUR" && toCurrency == "USD") {
						convertedCurrency = (amount * USD) / EUR;
						console.log(`Result: ${amount} ${fromCurrency} equals ${(convertedCurrency).toFixed(4)} ${toCurrency}`);
					}
					if (fromCurrency == "EUR" && toCurrency == "JPY") {
						convertedCurrency = (amount * JPY) / EUR;
						console.log(`Result: ${amount} ${fromCurrency} equals ${(convertedCurrency).toFixed(4)} ${toCurrency}`);
					}
					if (fromCurrency == "EUR" && toCurrency == "RUB") {
						convertedCurrency = (amount * RUB) / EUR;
						console.log(`Result: ${amount} ${fromCurrency} equals ${(convertedCurrency).toFixed(4)} ${toCurrency}`);
					}
					if (fromCurrency == "GBP" && toCurrency == "EUR") {
						convertedCurrency = (amount * EUR) / GBP;
						console.log(`Result: ${amount} ${fromCurrency} equals ${(convertedCurrency).toFixed(4)} ${toCurrency}`);
					}
					if (fromCurrency == "GBP" && toCurrency == "USD") {
						convertedCurrency = (amount * USD) / GBP;
						console.log(`Result: ${amount} ${fromCurrency} equals ${(convertedCurrency).toFixed(4)} ${toCurrency}`);
					}
					if (fromCurrency == "GBP" && toCurrency == "JPY") {
						convertedCurrency = (amount * JPY) / GBP;
						console.log(`Result: ${amount} ${fromCurrency} equals ${(convertedCurrency).toFixed(4)} ${toCurrency}`);
					}
					if (fromCurrency == "GBP" && toCurrency == "RUB") {
						convertedCurrency = (amount * RUB) / GBP;
						console.log(`Result: ${amount} ${fromCurrency} equals ${(convertedCurrency).toFixed(4)} ${toCurrency}`);
					}
					if (fromCurrency == "USD" && toCurrency == "EUR") {
						convertedCurrency = (amount * EUR) / USD;
						console.log(`Result: ${amount} ${fromCurrency} equals ${(convertedCurrency).toFixed(4)} ${toCurrency}`);
					}
					if (fromCurrency == "USD" && toCurrency == "GBP") {
						convertedCurrency = (amount * GBP) / USD;
						console.log(`Result: ${amount} ${fromCurrency} equals ${(convertedCurrency).toFixed(4)} ${toCurrency}`);
					}
					if (fromCurrency == "USD" && toCurrency == "JPY") {
						convertedCurrency = (amount * JPY) / USD;
						console.log(`Result: ${amount} ${fromCurrency} equals ${(convertedCurrency).toFixed(4)} ${toCurrency}`);
					}
					if (fromCurrency == "USD" && toCurrency == "RUB") {
						convertedCurrency = (amount * RUB) / USD;
						console.log(`Result: ${amount} ${fromCurrency} equals ${(convertedCurrency).toFixed(4)} ${toCurrency}`);
					}
					if (fromCurrency == "JPY" && toCurrency == "EUR") {
						convertedCurrency = (amount * EUR) / JPY;
						console.log(`Result: ${amount} ${fromCurrency} equals ${(convertedCurrency).toFixed(4)} ${toCurrency}`);
					}
					if (fromCurrency == "JPY" && toCurrency == "GBP") {
						convertedCurrency = (amount * GBP) / JPY;
						console.log(`Result: ${amount} ${fromCurrency} equals ${(convertedCurrency).toFixed(4)} ${toCurrency}`);
					}
					if (fromCurrency == "JPY" && toCurrency == "USD") {
						convertedCurrency = (amount * USD) / JPY;
						console.log(`Result: ${amount} ${fromCurrency} equals ${(convertedCurrency).toFixed(4)} ${toCurrency}`);
					}
					if (fromCurrency == "JPY" && toCurrency == "RUB") {
						convertedCurrency = (amount * RUB) / JPY;
						console.log(`Result: ${amount} ${fromCurrency} equals ${(convertedCurrency).toFixed(4)} ${toCurrency}`);
					}
					if (fromCurrency == "RUB" && toCurrency == "EUR") {
						convertedCurrency = (amount * EUR) / RUB;
						console.log(`Result: ${amount} ${fromCurrency} equals ${(convertedCurrency).toFixed(4)} ${toCurrency}`);
					}
					if (fromCurrency == "RUB" && toCurrency == "GBP") {
						convertedCurrency = (amount * GBP) / RUB;
						console.log(`Result: ${amount} ${fromCurrency} equals ${(convertedCurrency).toFixed(4)} ${toCurrency}`);
					}
					if (fromCurrency == "RUB" && toCurrency == "USD") {
						convertedCurrency = (amount * USD) / RUB;
						console.log(`Result: ${amount} ${fromCurrency} equals ${(convertedCurrency).toFixed(4)} ${toCurrency}`);
					}
					if (fromCurrency == "RUB" && toCurrency == "JPY") {
						convertedCurrency = (amount * JPY) / RUB;
						console.log(`Result: ${amount} ${fromCurrency} equals ${(convertedCurrency).toFixed(4)} ${toCurrency}`);
					}
					if (fromCurrency == toCurrency) {
						convertedCurrency = (amount * 1) / 1;
						console.log(`Result: ${amount} ${fromCurrency} equals ${(convertedCurrency).toFixed(4)} ${toCurrency}`);
					}
				} else {
					if (isNaN(amount)) {
						console.log("The amount has to be a number");
					} else {
						console.log("The amount cannot be less than 1");
					}
				}
			} else {
				console.log("Unknown currency");
				loop();
			}
		}
		loop();
	}
	else if (choice == 2) {
		console.log("Have a nice day!");
		process.exit();
	}else {
		console.log("Unknown input");
		loop();
	}


}
loop();

