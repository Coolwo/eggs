var goldenEggs = 0;
var silverEggs = 0;
var diamondEggs = 0;
var rubyEggs = 0;
function chickenEgg(chknCount){
	for (let i = 0; i < chknCount; ++i){
		eggs = eggs + 1 + chickenEggBonus;
		let sEgg = getRandomInt(1000);
		if (sEgg === 999){
			silverEggs += 1;
			silverEggsDOM.innerHTML = silverEggs;
		}
		let gEgg = getRandomInt(10000);
		if (gEgg === 999){
			goldenEggs += 1;
			goldenEggsDOM.innerHTML = goldenEggs;
		}
		let dEgg = getRandomInt(100000);
		if (dEgg === 0){
			diamondEggs += 1;
			document.getElementById("diamondEggs").innerHTML = diamondEggs;
		}
		let rEgg = getRandomInt(1000000);
		if (rEgg === 2){
			rubyEggs += 1;
			document.getElementById("rubyEggs").innerHTML = rubyEggs;
		}
		let chickenChicken = getRandomInt(100);
		if (chickenChicken < chickenPercent){
			++chickens;
		}
	}
	eggDOM.innerHTML = eggs;
	chickensDOM.innerHTML = chickens;
	if (silverEggs >= 1){
		silverEggContainerDOM.classList.remove("hide");
	}
	if (goldenEggs >= 1){
		goldEggContainerDOM.classList.remove("hide");
	}
	if (diamondEggs >= 1){
		diamondEggContainerDOM.classList.remove("hide");
	}
	if (rubyEggs >= 1){
		rubyEggContainerDOM.classList.remove("hide");
	}
}

function standEgg(standCount){
	for (let i = 0; i < standCount; ++i){
		sellEggs(1)
	}
	moneyDOM.innerHTML = decimal(money);
}

function increaseEgg(){
	if (sellout === 0){
		if (eggPrice <= maxInflationPrice){
			var jump = (getRandomInt(10))/10;
			eggPrice = eggPrice + jump;
		}
		document.getElementById('eggPrice').innerHTML = decimal(eggPrice * eggMultiplier);
	} else {
		sellout = sellout - 2;
		if (sellout <= 0){
			sellout = 0;
		}
	}
}

var saveEggs = 0;
function autoSaveEggs(){
	if(saveEggs === 2){
		saveGame(1);
		console.log("Autosaved");
		saveEggs = 0;
	} else {
		saveEggs += 1;
	}
}

var science = 0;
function scienceEgg(count){
    for (let i = 0; i < count; ++i){
        science += 1;
        scienceDOM.innerHTML = science;
    }
}

function testElegibility(elememtName, moneyReq, varName){
	if(varName >= moneyReq){
		document.getElementById(elememtName).classList.add("buttonReady");
	} else {
		document.getElementById(elememtName).classList.remove("buttonReady");
	}
}

function updateTitle(){
	document.getElementById("title").innerHTML = eggs + " Eggs";
}

window.setInterval(function(){
	chickenEgg(chickens);
	standEgg(stands + (stands * standSellBonus));
	increaseEgg();
    autoSaveEggs();
	scienceEgg(scienceChickens);
	updateTitle();
    console.log(decimal(eggMultiplier) + " times Multiplier" + "   $" + decimal(eggPrice) + " per egg, $" + decimal(eggPrice * eggMultiplier) + " Total");
}, 5000);

window.setInterval(function(){
    updateInventory();
    testElegibility("prestigeButton" , 1000000, money);
    calcMultiplierBonus();
    moneyMultiplier();
}, 100)
