/*
//vaar is ES5
//CONST AND LET IS ES6
const btc = 3.5;
const btcUsdBought = 10000;
const btcUsdNow = 12000;

const invested = btc * btcUsdBought;
const current = btc * btcUsdNow;

const profit = current - invested;
//const growth = profit / invested * 100;
const growth = calcGrowth(invested, current);




//function declaration
function calcGrowth(pastValue, currentValue) {
  const g = (currentValue - pastValue) / pastValue * 100;
  return g;
}
// console.log(invested);
// console.log(current);
// console.log(growth);
//console.log(profit);

//function expression ES5
const calcGrowth2 = function(pastValue, currentValue){
  return (currentValue - pastValue) / pastValue * 100;
}
const growth2 = calcGrowth(5000,5500);
console.log(growth2);

// ES6 arrow function
const calcGrowth3 = (pastValue, currentValue) => (currentValue - pastValue) / pastValue * 100;
const growth3 = calcGrowth3(20,60);
console.log(growth2);



let message = "";
if(profit > 0) {
 // message = "great u made a profit of $" + profit + " (" + growth + "%)."; ES5
  message = `great u made a profit of $${profit} (${growth}%)`;//ES6
} else if(profit < 0){
  //message = 'oh know u lost money'; ES5
  message = `oh no youre at loss if $${profit} (${growth}%).`;//ES6
} else {
  message = 'you broke even';
}
 console.log(message);
*/
const calcGrowth = (pastValue, currentValue) => (currentValue - pastValue) / pastValue * 100;

//DOM Manipulation: selecting elements and handling events
document.querySelector('.investment__btn').addEventListener('click', () => {
  //1.select and read data from the UI.
  const btcUsdBought = document.querySelector('.price__input--bought').value;
  const btcUsdNow = document.querySelector('.price__input--now').value;
  const btc = document.querySelector('.investment__btc').value;
  
  //console.log(btcUsdBought);
  //2. CALCULATE THE PROFITS
  const invested = btc * btcUsdBought;
  const current = btc * btcUsdNow;
  const profit = current - invested;
  const growth = calcGrowth(invested, current);
  
  //3. WRITE THE RESULT TO THE UI
  let message = "";
if(profit > 0) {
  message = `Awesome you made a profit of $${profit} (${growth}%).`;//ES6
 // document.querySelector('result').style.color = 'green';
} else if (profit < 0) {
  message = `Oh no you're at a loss of $${profit} (${growth}%).`;//ES6
   // document.querySelector('result').style.color = 'red';

} else {
  message = "You Broke Even";
}
// console.log(message);
  document.querySelector('.result').textContent = message;
  
});