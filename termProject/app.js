
// selectElements: 

const amount = document.querySelector("#money");
const resutText = document.querySelector(".resultText");
const resultValue = document.querySelector(".resultValue");
const currency = document.getElementById("firstCurrency");
const currency2 = document.getElementById("secondCurrency");


currency.onchange = function writeCurrencyName(){
    var value = currency.options[currency.selectedIndex].value;
    var secondValue = currency2.options[currency2.selectedIndex].value;
   resutText.innerHTML =  value+" - " + secondValue;
   returnValue();
}

currency2.onchange = function writeCurrency2Name(){
    var value = currency.options[currency.selectedIndex].value;
    var secondValue = currency2.options[currency2.selectedIndex].value;
   resutText.innerHTML =  value+" - " + secondValue;
   returnValue();
}


async function returnValue(){
    var value = currency.options[currency.selectedIndex].value;
    var secondValue = currency2.options[currency2.selectedIndex].value;
    const url = "https://free.currconv.com/api/v7/convert?q=" + value+"_" + secondValue+"&compact=ultra&apiKey=2306ece2d56b09cea72c";
    console.log(url);
    const response = await fetch(url);
    const responsedata = await response.json();

    console.log(Object.values(responsedata)[0]);
    resultValue.innerHTML = Object.values(responsedata)[0] * amount.value;
    
}



function eventListeners(){
    amount.addEventListener("input",() => {
      returnValue();
       })
    
}

eventListeners();
