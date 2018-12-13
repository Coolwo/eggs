function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function decimal(input){
	var numb = input;
	output = numb.toFixed(2);
	return output;
}

var eggs = 0;
function getEggs(){
	eggs = eggs + 1;
	document.getElementById('eggs').innerHTML = eggs;
}

var eggPrice = 0.50;
var money = 0;
var sellout = 10;
function sellEggs(market){
	if(eggs >= 1){
		eggs = eggs - 1;
		money = money + eggPrice;
		document.getElementById('money').innerHTML = decimal(money);
		document.getElementById('eggs').innerHTML = eggs;
		var dropR = getRandomInt(20);
		if (dropR === 0){
			var drop = (getRandomInt(10))/10;
			eggPrice = eggPrice - drop;
			if (eggPrice <= 0){
				eggPrice = 0.10;
			}
			document.getElementById('eggPrice').innerHTML = decimal(eggPrice);
		} else if (dropR === 19){
			var jump = (getRandomInt(10))/10;
			eggPrice = eggPrice + jump;
			if (eggPrice >= 40){
				eggPrice = 40;
			}
			document.getElementById('eggPrice').innerHTML = decimal(eggPrice);
		}
		if (market === 0){
				sellout += 1;
			if (sellout >= 15){
				sellout = 15;
			}
		}
	}
}

var chickens = 0;
var chickenPrice = 50;
function buyChicken(){
	if (money >= chickenPrice){
		chickens = chickens + 1;
		money = money - chickenPrice;
		var dropC = getRandomInt(20);
		if (dropC === 0){
			var drop = getRandomInt(10);
			chickenPrice = chickenPrice - drop;
			if (chickenPrice <= 20){
				chickenPrice = 20.00;
			}
			document.getElementById('chickenPrice').innerHTML = decimal(chickenPrice);
		} else if (dropC === 19){
			var jump = getRandomInt(10);
			chickenPrice = chickenPrice + jump;
			if (chickenPrice >= 100){
				chickenPrice = 100.00;
			}
			document.getElementById('chickenPrice').innerHTML = decimal(chickenPrice);
		}
		document.getElementById("money").innerHTML = decimal(money);
		document.getElementById("chickens").innerHTML = chickens;
	}
}

var stands = 0;
var standPrice = 50;
function buyStand(){
	if (money >= standPrice){
		stands = stands + 1;
		money = money - standPrice;
		var dropS = getRandomInt(20);
		console.log(dropS);
		if (dropS === 0){
			var drop = getRandomInt(10);
			standPrice = standPrice - drop;
			if (standPrice <= 20){
				standPrice = 20.00;
			}
			document.getElementById('standPrice').innerHTML = decimal(standPrice);
		} else if (dropS === 19){
			var jump = getRandomInt(10);
			standPrice = standPrice + jump;
			if (standPrice >= 100){
				standPrice = 100.00;
			}
			document.getElementById('standPrice').innerHTML = decimal(standPrice);
		}
		document.getElementById("money").innerHTML = decimal(money);
		document.getElementById("stands").innerHTML = stands;
	}
}

function standEgg(standCount){
	for (i = 0; i < standCount; i++){
		sellEggs(1)
	}
}

function increaseEgg(){
	if (sellout === 0){
		var jump = (getRandomInt(10))/10;
		eggPrice = eggPrice + jump;
		if (eggPrice >= 40){
			eggPrice = 40;
		}
		document.getElementById('eggPrice').innerHTML = decimal(eggPrice);
	} else {
		sellout = sellout - 2;
		if (sellout <= 0){
			sellout = 0;
		}
	}
	console.log(sellout);
}

var goldenEggs = 0;
var silverEggs = 0;
var diamondEggs = 0;
function chickenEgg(chknCount){
	for (i = 0; i < chknCount; i++){
		eggs = eggs + 1;
		var sEgg = getRandomInt(1000);
		if (sEgg === 999){
			silverEggs += 1;
			document.getElementById("silverEggs").innerHTML = silverEggs;
		}
		var gEgg = getRandomInt(10000);
		if (gEgg === 999){
			goldenEggs += 1;
			document.getElementById("goldenEggs").innerHTML = goldenEggs;
		}
		var dEgg = getRandomInt(100000);
		if (dEgg === 0){
			diamondEggs += 1;
			document.getElementById("diamondEggs").innerHTML = diamondEggs;
		}
		document.getElementById("eggs").innerHTML = eggs;
	}
}

window.setInterval(function(){
	chickenEgg(chickens);
	standEgg(stands);
	increaseEgg();
}, 5000);

function save(skip){
	if (skip === 1){
		var save = {
			eggs: eggs,
			eggPrice: eggPrice,
			money: money,
			chickenPrice: chickenPrice,
			chickens: chickens,
			stands: stands,
			standPrice: standPrice,
			goldenEggs: goldenEggs,
			silverEggs: silverEggs,
			diamondEggs: diamondEggs
		}
	} else{
		var r = confirm("Are you sure? This will overwrite your previous save.");
		if (r == true){
			var save = {
				eggs: eggs,
				eggPrice: eggPrice,
				money: money,
				chickenPrice: chickenPrice,
				chickens: chickens,
				stands: stands,
				standPrice: standPrice,
				goldenEggs: goldenEggs,
				silverEggs: silverEggs,
				diamondEggs: diamondEggs
			}
			localStorage.setItem("save",JSON.stringify(save));
		}
	}
}

function load(skip){
	if (skip === 1){
		var savegame = JSON.parse(localStorage.getItem("save")); 
		if (typeof savegame.eggs !== "undefined") eggs = savegame.eggs; 
		document.getElementById("eggs").innerHTML = eggs;
		if (typeof savegame.eggPrice !== "undefined") eggPrice = savegame.eggPrice; 
		document.getElementById("eggPrice").innerHTML = eggPrice;
		if (typeof savegame.money !== "undefined") money = savegame.money; 
		document.getElementById("money").innerHTML = money;
		if (typeof savegame.chickenPrice !== "undefined") chickenPrice = savegame.chickenPrice; 
		document.getElementById("chickenPrice").innerHTML = chickenPrice;
		if (typeof savegame.chickens !== "undefined") chickens = savegame.chickens; 
		document.getElementById("chickens").innerHTML = chickens;
		if (typeof savegame.standPrice !== "undefined") standPrice = savegame.standPrice; 
		document.getElementById("standPrice").innerHTML = standPrice;
		if (typeof savegame.stands !== "undefined") stands = savegame.stands; 
		document.getElementById("stands").innerHTML = stands;
		if (typeof savegame.goldenEggs !== "undefined") goldenEggs = savegame.goldenEggs; 
		document.getElementById("goldenEggs").innerHTML = goldenEggs;
		if (typeof savegame.silverEggs !== "undefined") silverEggs = savegame.silverEggs; 
		document.getElementById("silverEggs").innerHTML = silverEggs;
		if (typeof savegame.diamondEggs !== "undefined") diamondEggs = savegame.diamondEggs; 
		document.getElementById("diamondEggs").innerHTML = diamondEggs;
	} else {
		var r = confirm("Are you sure? This will overwrite your current game.");
		if (r == true){
			var savegame = JSON.parse(localStorage.getItem("save")); 
			var savegame = JSON.parse(localStorage.getItem("save")); 
			if (typeof savegame.eggs !== "undefined") eggs = savegame.eggs; 
			document.getElementById("eggs").innerHTML = eggs;
			if (typeof savegame.eggPrice !== "undefined") eggPrice = savegame.eggPrice; 
			document.getElementById("eggPrice").innerHTML = eggPrice;
			if (typeof savegame.money !== "undefined") money = savegame.money; 
			document.getElementById("money").innerHTML = money;
			if (typeof savegame.chickenPrice !== "undefined") chickenPrice = savegame.chickenPrice; 
			document.getElementById("chickenPrice").innerHTML = chickenPrice;
			if (typeof savegame.chickens !== "undefined") chickens = savegame.chickens; 
			document.getElementById("chickens").innerHTML = chickens;
			if (typeof savegame.standPrice !== "undefined") standPrice = savegame.standPrice; 
			document.getElementById("standPrice").innerHTML = standPrice;
			if (typeof savegame.stands !== "undefined") stands = savegame.stands; 
			document.getElementById("stands").innerHTML = stands
			if (typeof savegame.goldenEggs !== "undefined") goldenEggs = savegame.goldenEggs; 
			document.getElementById("goldenEggs").innerHTML = goldenEggs;
			if (typeof savegame.silverEggs !== "undefined") silverEggs = savegame.silverEggs; 
			document.getElementById("silverEggs").innerHTML = silverEggs;
			if (typeof savegame.diamondEggs !== "undefined") diamondEggs = savegame.diamondEggs; 
			document.getElementById("diamondEggs").innerHTML = diamondEggs;
		}
	}
	if (silverEggs >= 1){
		document.getElementById("silverEggContainer").classList.remove("hide");
	}
	if (goldenEggs >= 1){
		document.getElementById("goldenEggContainer").classList.remove("hide");
	}
	if (diamondEggs >= 1){
		document.getElementById("diamondEggContainer").classList.remove("hide");
	}
}

function clearSave(){
	var r = confirm("Are you sure? This action is irreversable.");
	if (r == true){
		this.localStorage.removeItem('save');
	}
}