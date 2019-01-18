console.log("Started selling eggs.");

function displayhelp(){
	document.getElementById("help_text").classList.toggle("hide");
	document.getElementById("tab_buttons").classList.toggle("disabled");
	document.getElementById("game").classList.toggle("disabled");
	document.getElementById("about_text").classList.add("enabled");
}

//Used to remember to finish features
//1.2 - Upgrades
//1.3 - Chickens &Stands+
//1.4 - New Items

//Functions called later in JS
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function decimal(input){
	var numb = input;
	output = numb.toFixed(2);
	return output;
}

//Sets HTML DOM
var eggDOM = document.getElementById("eggs");
var silverEggsDOM = document.getElementById("silverEggs");
var goldenEggsDOM = document.getElementById("goldenEggs");

var silverEggContainerDOM = document.getElementById("silverEggContainer");
var goldEggContainerDOM = document.getElementById("goldenEggContainer");
var diamondEggContainerDOM = document.getElementById("diamondEggContainer");
var rubyEggContainerDOM = document.getElementById("rubyEggContainer");

var moneyDOM = document.getElementById("money");

var GSegg = getRandomInt(700);
var GGegg = getRandomInt(7000);

//Opens the game tab
document.getElementById("defaultOpen").click();

//basic functions
var eggs = 0;
function getEggs(){
	for (let i = 0; i < 1 + eggBonus; ++i){
		eggs = eggs + 1;
		eggDOM.innerHTML = eggs;
		if (eggPrestigeLevel >= 1){
			if (GSegg === -1){
				silverEggs += 1;
				silverEggsDOM.innerHTML = silverEggs;
				GSegg = getRandomInt(700);
			} else { 
				GSegg -= 1;
			}
		}
		if (eggPrestigeLevel >= 2){
			if (GGegg === -1){
				goldenEggs += 1;
				goldenEggsDOM.innerHTML = goldenEggs;
				GGegg = getRandomInt(7000);
			} else { 
				GGegg -= 1;
			}
		}
	}
}

var eggPrice = 0.50;
var money = 0;
var sellout = 10;
function sellEggs(market){
	if(eggs >= 1){
		eggs = eggs - 1;
		money = money + (eggPrice * eggMultiplier);
		moneyDOM.innerHTML = decimal(money);
		document.getElementById('eggs').innerHTML = eggs;
		var dropR = getRandomInt(20);
		if (dropR === 0){
			var drop = (getRandomInt(10))/10;
			eggPrice = eggPrice - drop;
			if (eggPrice <= 0){
				eggPrice = 0.10;
			}
			document.getElementById('eggPrice').innerHTML = decimal(eggPrice * eggMultiplier);
		} else if (dropR === 19){
			var jump = (getRandomInt(10))/10;
			eggPrice = eggPrice + jump;
			if (eggPrice >= 25){
				eggPrice = 25;
			}
			document.getElementById('eggPrice').innerHTML = decimal(eggPrice * eggMultiplier);
		}
		if (market === 0){
				sellout += 1;
			if (sellout >= 15){
				sellout = 15;
			}
		}
	}
}
//

//Buying chickens & stands
var chickens = 0;
var chickenPrice = 50;
function buyChicken(count){
	for (let i = 0; i < count; ++i){
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
		moneyDOM.innerHTML = decimal(money);
		document.getElementById("chickens").innerHTML = chickens;
	}
	}
}

var stands = 0;
var standPrice = 50;
function buyStand(count){
	for (let i = 0; i < count; ++i){
	if (money >= standPrice){
		stands = stands + 1;
		money = money - standPrice;
		var dropS = getRandomInt(20);
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
		moneyDOM.innerHTML = decimal(money);
		document.getElementById("stands").innerHTML = stands;
	}
	}
}
//

//setInterval functions
function standEgg(standCount){
	for (let i = 0; i < standCount; ++i){
		sellEggs(1)
	}
}

function increaseEgg(){
	if (sellout === 0){
		var jump = (getRandomInt(10))/10;
		eggPrice = eggPrice + jump;
		if (eggPrice >= 10){
			eggPrice = 10;
		}
		document.getElementById('eggPrice').innerHTML = decimal(eggPrice * eggMultiplier);
	} else {
		sellout = sellout - 2;
		if (sellout <= 0){
			sellout = 0;
		}
	}
}
//

//Prestiging
var prestige = 0;
function prestigeGame(){
	if (money >= 1000000){
		var r = confirm("Are you sure? This will reset everything!");
		if (r === true){
			eggs = 0;
			money = 0;
			chickens = 0;
			stands = 0;
			goldenEggs = 0;
			silverEggs = 0;
			diamondEggs = 0;
			rubyEggs = 0;
			prestige = prestige + 1 + prestigeBonus;
			chickens += chickenBonus;
			document.getElementById("prestige").innerHTML = prestige;
			eggDOM.innerHTML = eggs;
			moneyDOM.innerHTML = money;
			document.getElementById("chickens").innerHTML = chickens;
			document.getElementById("stands").innerHTML = stands;
			document.getElementById("goldenEggs").innerHTML = goldenEggs;
			document.getElementById("silverEggs").innerHTML = silverEggs;
			document.getElementById("diamondEggs").innerHTML = diamondEggs;
			document.getElementById("rubyEggs").innerHTML = rubyEggs;
			document.getElementById("prestigeButton").classList.remove("buttonReady");
		}
	}
}

//Prestige Items

//Chicken Prestiges
var chickenPrestigeLevel = 0;
var chickenBonus = 0;
function buyChickenBonus(){
	if(prestige >= 1){
		prestige -= 1;
		chickenBonus += 10;
		chickens += 10;
		chickenPrestigeLevel += 1;
		document.getElementById("chickens").innerHTML = chickens;
		document.getElementById("prestige").innerHTML = prestige;
		document.getElementById("chickenBonusAmount").innerHTML = chickenBonus;
		document.getElementById("moreChickens").classList.remove("hide");
		document.getElementById("chickenBonus").classList.add("hide");
	}
}

function buyMoreChickens(){
	if(prestige >= 2){
		prestige -= 2;
		chickenBonus += 20;
		chickens += 20;
		chickenPrestigeLevel += 1;
		document.getElementById("chickens").innerHTML = chickens;
		document.getElementById("prestige").innerHTML = prestige;
		document.getElementById("chickenBonusAmount").innerHTML = chickenBonus;
		document.getElementById("moreChickens").classList.add("hide");
		document.getElementById("chickenComplete").classList.remove("hide");
	}
}
//

//Prestige Prestiges
var prestigePrestigeLevel = 0;
var prestigeBonus = 0;
function buyPrestigeBonus(){
	if(prestige >= 2){
		prestige -= 2;
		prestigeBonus += 1;
		prestigePrestigeLevel += 1;
		document.getElementById("prestige").innerHTML = prestige;
		document.getElementById("prestigeBonusAmount").innerHTML = prestigeBonus;
		document.getElementById("prestigeBonus").classList.add("hide");
		document.getElementById("morePrestige").classList.remove("hide");
	}
}

function buyMorePrestige(){
	if(prestige >= 3){
		prestige -= 3;
		prestigeBonus += 2;
		prestigePrestigeLevel += 1;
		document.getElementById("prestige").innerHTML = prestige;
		document.getElementById("prestigeBonusAmount").innerHTML = prestigeBonus;
		document.getElementById("morePrestige").classList.add("hide");
		document.getElementById("prestigeComplete").classList.remove("hide");
	}
}
//

//Egg Prestiges
var eggPrestigeLevel = 0;
var eggBonus = 0;
function buyEggBonus(){
	if (prestige >= 1){
		prestige -= 1;
		eggBonus += 2;
		eggPrestigeLevel += 1;
		document.getElementById("prestige").innerHTML = prestige;
		document.getElementById("eggBonusAmount").innerHTML = eggBonus;
		document.getElementById("moreEggs").classList.remove("hide");
		document.getElementById("eggBonus").classList.add("hide");
	}
}
function buyMoreEggs(){
	if(prestige >= 2){
		prestige -= 2;
		eggBonus += 7;
		eggPrestigeLevel += 1;
		document.getElementById("prestige").innerHTML = prestige;
		document.getElementById("eggBonusAmount").innerHTML = eggBonus;
		document.getElementById("moreEggs").classList.add("hide");
		document.getElementById("eggComplete").classList.remove("hide");
	}
}
//

//Multiplier Prestiges
var multiplierBonus = 0;

var goldenEggs = 0;
var silverEggs = 0;
var diamondEggs = 0;
var rubyEggs = 0;
function chickenEgg(chknCount){
	for (let i = 0; i < chknCount; ++i){
		eggs = eggs + 1;
		var sEgg = getRandomInt(1000);
		if (sEgg === 999){
			silverEggs += 1;
		}
		var gEgg = getRandomInt(10000);
		if (gEgg === 999){
			goldenEggs += 1;
		}
		var dEgg = getRandomInt(100000);
		if (dEgg === 0){
			diamondEggs += 1;
			document.getElementById("diamondEggs").innerHTML = diamondEggs;
		}
		var rEgg = getRandomInt(1000000);
		if (dEgg === 2){
			rubyEggs += 1;
			
		}
		
	}
	silverEggsDOM.innerHTML = silverEggs;
	goldenEggsDOM.innerHTML = goldenEggs;
	document.getElementById("diamondEggs").innerHTML = diamondEggs;
	document.getElementById("rubyEggs").innerHTML = rubyEggs;
	eggDOM.innerHTML = eggs;
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

var eggMultiplier = 1;
function moneyMultiplier() {
	eggMultiplier = 1 + (silverEggs * 0.001) + (goldenEggs * 0.01) + (diamondEggs * 0.1) + rubyEggs + multiplierBonus;
	console.log(eggMultiplier + " times Multiplier" + "   $" + decimal(eggPrice) + " per egg, $" + decimal(eggPrice * eggMultiplier) + " Total");
}

var sliderCount = document.getElementById("sliderCount");
var countNumber = document.getElementById("countNumber");
countNumber.innerHTML = sliderCount.value;
var buyNumber = sliderCount.value;
sliderCount.oninput = function() {
	countNumber.innerHTML = this.value;
	buyNumber = this.value;
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

function testElegibility(elememtName, moneyReq){
	if(money >= moneyReq){
		document.getElementById(elememtName).classList.add("buttonReady");
	} else {
		document.getElementById(elememtName).classList.remove("buttonReady");
	}
}

window.setInterval(function(){
	chickenEgg(chickens);
	standEgg(stands);
	increaseEgg();
	moneyMultiplier();
	autoSaveEggs();
	testElegibility("prestigeButton" , 1000000);
}, 5000);


function saveGame(skip){
	if(skip === 0){
		var r = confirm("Are you sure? This will overwrite your previous save.");
	} else {
		r = true
	}
	if (r == true){
		save = {
			eggs: eggs,
			eggPrice: eggPrice,
			money: money,
			chickenPrice: chickenPrice,
			chickens: chickens,
			stands: stands,
			standPrice: standPrice,
			goldenEggs: goldenEggs,
			silverEggs: silverEggs,
			diamondEggs: diamondEggs,
			rubyEggs: rubyEggs,
			prestige: prestige,
			chickenPrestigeLevel: chickenPrestigeLevel,
			eggPrestigeLevel: eggPrestigeLevel,
			prestigePrestigeLevel: prestigePrestigeLevel
		}
		localStorage.setItem("save",JSON.stringify(save));
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
		if (typeof savegame.rubyEggs !== "undefined") rubyEggs = savegame.rubyEggs; 
		document.getElementById("rubyEggs").innerHTML = rubyEggs;
		if (typeof savegame.prestige !== "undefined") prestige = savegame.prestige; 
		document.getElementById("prestige").innerHTML = prestige;
		if (typeof savegame.chickenPrestigeLevel !== "undefined") chickenPrestigeLevel = savegame.chickenPrestigeLevel; 
		if (typeof savegame.eggPrestigeLevel !== "undefined") eggPrestigeLevel = savegame.eggPrestigeLevel; 
		if (typeof savegame.prestigePrestigeLevel !== "undefined") prestigePrestigeLevel = savegame.prestigePrestigeLevel; 
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
			if (typeof savegame.rubyEggs !== "undefined") rubyEggs = savegame.rubyEggs; 
			document.getElementById("rubyEggs").innerHTML = rubyEggs;
			if (typeof savegame.prestige !== "undefined") prestige = savegame.prestige; 
			document.getElementById("prestige").innerHTML = prestige;
			if (typeof savegame.chickenPrestigeLevel !== "undefined") chickenPrestigeLevel = savegame.chickenPrestigeLevel; 
			if (typeof savegame.eggPrestigeLevel !== "undefined") eggPrestigeLevel = savegame.eggPrestigeLevel; 
			if (typeof savegame.prestigePrestigeLevel !== "undefined") prestigePrestigeLevel = savegame.prestigePrestigeLevel; 
			
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
	if (rubyEggs >= 1){
		document.getElementById("rubyEggContainer").classList.remove("hide");
	}
	var cpSuccess = false;
	var maxCP = 2;
	if (chickenPrestigeLevel >= 1){
		if (chickenPrestigeLevel >= 1){
			document.getElementById("chickenBonus").classList.add("hide");
			document.getElementById("moreChickens").classList.remove("hide");
			chickenBonus += 10;
			console.log("CP Level 1 loaded");
			cpSuccess = true;
		}
		if (chickenPrestigeLevel >= 2){
			document.getElementById("moreChickens").classList.add("hide");
			chickenBonus += 20;
			console.log("CP level 2 loaded");
			cpSuccess = true;
		}
		if (chickenPrestigeLevel === maxCP){
			document.getElementById("chickenComplete").classList.remove("hide");
		}
		if (chickenPrestigeLevel > maxCP){
			cpSuccess = false;	
		}
		if (cpSuccess === false){
			console.log("Error in loading Chicken Prestige");
		}
		document.getElementById("chickenBonusAmount").innerHTML = chickenBonus;
	} else {
		console.log('No chicken prestige found.');
	}
	var epSuccess = false;
	var maxEP = 2;
	if (eggPrestigeLevel >= 1){
		if (eggPrestigeLevel >= 1){
			document.getElementById("eggBonus").classList.add("hide");
			document.getElementById("moreEggs").classList.remove("hide");
			eggBonus += 2;
			console.log("EP Level 1 loaded");
			epSuccess = true;
		}
		if (eggPrestigeLevel >= 2){
			document.getElementById("moreEggs").classList.add("hide");
			eggBonus += 7;
			console.log("EP level 2 loaded");
			epSuccess = true;
		}
		if (eggPrestigeLevel === maxEP){
			document.getElementById("eggComplete").classList.remove("hide");
		}
		if (eggPrestigeLevel > maxEP){
			epSuccess = false;	
		}
		if (epSuccess === false){
			console.log("Error in loading Egg Prestige");
		}
		document.getElementById("eggBonusAmount").innerHTML = eggBonus;
	} else {
		console.log('No egg prestige found.');
	}
	var ppSuccess = false;
	var maxPP = 2;
	if (prestigePrestigeLevel >= 1){
		if (prestigePrestigeLevel >= 1){
			document.getElementById("prestigeBonus").classList.add("hide");
			document.getElementById("morePrestige").classList.remove("hide");
			prestigeBonus += 1;
			console.log("PP Level 1 loaded");
			ppSuccess = true;
		}
		if (prestigePrestigeLevel >= 2){
			document.getElementById("morePrestige").classList.add("hide");
			prestigeBonus += 2;
			console.log("PP level 2 loaded");
			ppSuccess = true;
		}
		if (prestigePrestigeLevel === maxPP){
			document.getElementById("prestigeComplete").classList.remove("hide");
		}
		if (prestigePrestigeLevel > maxPP){
			ppSuccess = false;	
		}
		if (ppSuccess === false){
			console.log("Error in loading Prestige Prestige");
		}
		document.getElementById("prestigeBonusAmount").innerHTML = prestigeBonus;
	} else {
		console.log('No prestige prestige found.');
	}
}

function clearSave(){
	var r = confirm("Are you sure? This action is irreversable.");
	if (r == true){
		this.localStorage.removeItem('save');
		location.reload();
	}
}

//Opens tabs (w3schools)
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

//Hacking the game?
function pmoney(){
	money = money + 1000000;
	document.getElementById("hackerText").classList.remove("hide");
}
