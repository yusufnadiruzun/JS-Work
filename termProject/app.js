
// selectElements: 

const amount = document.querySelector("#money");
const resutText = document.querySelector(".resultText");
const resultValue = document.querySelector(".resultValue");
const currency = document.getElementById("firstCurrency");
const currency2 = document.getElementById("secondCurrency");
const firstImage = document.getElementById("first");
const secondImage = document.getElementById("second");

currency.onchange = function writeCurrencyName(){
    var value = currency.options[currency.selectedIndex].value;
    var secondValue = currency2.options[currency2.selectedIndex].value;
   resutText.innerHTML =  value+" - " + secondValue;
   if(value == "GBP"){
    firstImage.src = "https://img2.pngindir.com/20180322/ide/kisspng-england-kingdom-of-great-britain-flag-of-the-unite-cyber-nations-wiki-5ab40918aab721.6894237315217482486993.jpg";
   }
   else if(value == "EUR"){
    firstImage.src =   "https://ulkelerbayraklar.com/wp-content/uploads/2017/12/almanya_bayrag%CC%86%C4%B1-800x445.png";
    }
    else if(value == "USD"){
        firstImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
    }
    else if(value == "TRY"){
        firstImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/1280px-Flag_of_Turkey.svg.png"
    }
    else if(value == "JPY"){
        firstImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/200px-Flag_of_Japan.svg.png"
    }
   returnValue();
   
}

currency2.onchange = function writeCurrency2Name(){
    var value = currency.options[currency.selectedIndex].value;
    var secondValue = currency2.options[currency2.selectedIndex].value;
   resutText.innerHTML =  value+" - " + secondValue;
   if(secondValue == "GBP"){
    secondImage.src = "https://img2.pngindir.com/20180322/ide/kisspng-england-kingdom-of-great-britain-flag-of-the-unite-cyber-nations-wiki-5ab40918aab721.6894237315217482486993.jpg";
   }
   else if(secondValue == "EUR"){
    secondImage.src =   "https://ulkelerbayraklar.com/wp-content/uploads/2017/12/almanya_bayrag%CC%86%C4%B1-800x445.png";
    }
    else if(secondValue == "USD"){
        secondImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
    }
    else if(secondValue == "TRY"){
        secondImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/1280px-Flag_of_Turkey.svg.png"
    }
    else if(secondValue == "JPY"){
        secondImage.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/200px-Flag_of_Japan.svg.png"
    }
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
    resultValue.innerHTML = (Object.values(responsedata)[0] * amount.value).toFixed(2);
    
}



function eventListeners(){
    amount.addEventListener("input",() => {
      returnValue();
       })
    
}

eventListeners();
