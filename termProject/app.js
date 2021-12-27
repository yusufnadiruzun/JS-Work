
// selectElements: 

const amount = document.querySelector("#money");
const resutText = document.querySelector(".resultText");
const resultValue = document.querySelector(".resultValue");
const currency = document.getElementById("secondCurrency");


currency.onchange = function writeCurrencyName(){
    var value = currency.options[currency.selectedIndex].value;
   resutText.innerHTML = "EUR - " + value;
   returnValue();
}


async function returnValue(){
    var value = currency.options[currency.selectedIndex].value;
    const url = "https://api.exchangeratesapi.io/v1/latest?access_key=d65d8547cccd0b3d45c7b59c070e58a6&format=1&symbols=" + value ;
    const response = await fetch(url);
    const responsedata = await response.json();
    resultValue.innerHTML = Object.values(responsedata.rates)[0] * amount.value;
    
}



function eventListeners(){
    amount.addEventListener("input",() => {
      returnValue();
       })
    
}

eventListeners();
