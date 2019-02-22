console.log("Started selling eggs.");

//Init
function initGame(){
	load(1);
	document.getElementById("version").innerHTML = version;
	if (lastUpdate === '1.2'){
		lifetimePrestige = prestige;
		if (chickenPrestigeLevel === 1){
			lifetimePrestige += 1;
		} else if (chickenPrestigeLevel === 2){
			lifetimePrestige += 2;
		}
		if (eggPrestigeLevel === 1){
			lifetimePrestige += 1;
		} else if (eggPrestigeLevel === 2){
			lifetimePrestige += 2;
		}
		if (prestigePrestigeLevel === 1){
			lifetimePrestige += 2;
		} else if (prestigePrestigeLevel === 2){
			lifetimePrestige += 3;
		}
		if (upgradePrestigeLevel === 1){
			lifetimePrestige += 2;
		} else if (upgradePrestigeLevel === 2){
			lifetimePrestige += 2;
		}
		lastUpdate = '1.3';
		document.getElementById("lifetimePrestige").innerHTML = lifetimePrestige;
		displayFooter('new');
	}
}

//Used to remember to finish features
//1.3 - Chickens & Stands+
// \-> Possibly Achievements?
//1.4 - New Items
//
//Considering
//Emerald Egg/Equivalent
// \->Free Prestige?
//Achievements
//
//Known Bugs
//
//
//To-Do list
//
//
//

//Functions called later in JS
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function decimal(input){
	var numb = input;
	output = numb.toFixed(2);
	return output;
}

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
		money += (eggPrice * eggMultiplier);
		if (market === 0){
			moneyDOM.innerHTML = decimal(money);
		}
		document.getElementById('eggs').innerHTML = eggs;
		var dropR = getRandomInt(20);
		if (dropR === 19){
			var drop = (getRandomInt(10))/10;
			eggPrice = eggPrice - drop;
			if (eggPrice <= minEggPrice){
				eggPrice = minEggPrice;
			}
			document.getElementById('eggPrice').innerHTML = decimal(eggPrice * eggMultiplier);
		} else if (dropR <= increaseEggChance){
			var jump = (getRandomInt(10))/10;
			eggPrice = eggPrice + jump;
			if (eggPrice >= maxEggPrice){
				eggPrice = maxEggPrice;
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
		money += - chickenPrice;
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
		chickensDOM.innerHTML = chickens;
	}
	}
}

var stands = 0;
var standPrice = 50;
function buyStand(count){
	for (let i = 0; i < count; ++i){
	if (money >= standPrice){
		stands = stands + 1;
		money += - standPrice;
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


//Prestiging
var prestige = 0;
var lifetimePrestige = 0;
function prestigeGame(){
	if (money >= 1000000){
		var r = confirm("Are you sure? This will reset everything!");
		if (r === true){
			eggs = 0;
			money = 0;
			chickens = 0 + chickenBonus;
			stands = 0;
			goldenEggs = 0;
			silverEggs = 0;
			diamondEggs = 0;
			rubyEggs = 0;
			scienceChickens = 0;
			science = 0;
			calcUpgrades("-");
			chickenUpgradeLevel = 0;
			standUpgradeLevel = 0;
			scienceUpgradeLevel = 0;
			prestige = prestige + 1 + prestigeBonus;
			lifetimePrestige += 1 + prestigeBonus;
			eggPrice = 0.9 + minEggPrice;
			chickenPrice = 50;
			standPrice = 50;
			document.getElementById("eggPrice").innerHTML = eggPrice;
			document.getElementById("chickenPrice").innerHTML = chickenPrice;
			document.getElementById("standPrice").innerHTML = standPrice;
			document.getElementById("prestige").innerHTML = prestige;
			document.getElementById("lifetimePrestige").innerHTML = lifetimePrestige;
			eggDOM.innerHTML = eggs;
			moneyDOM.innerHTML = decimal(money);
			chickensDOM.innerHTML = chickens;
			standsDOM.innerHTML = stands;
			scienceChickensDOM.innerHTML = scienceChickens;
			scienceDOM.innerHTML = science;
			document.getElementById("goldenEggs").innerHTML = goldenEggs;
			document.getElementById("silverEggs").innerHTML = silverEggs;
			document.getElementById("diamondEggs").innerHTML = diamondEggs;
			document.getElementById("rubyEggs").innerHTML = rubyEggs;
			document.getElementById("prestigeButton").classList.remove("buttonReady");
			document.getElementById("")
			resetUpgrades("buyScienceChicken");
			document.getElementById("scienceUpgrade1").classList.remove("hide");
		}
	}
}

//Prestige Items

//$50 Prestiges
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

//Upgrade Prestiges
var upgradePrestigeLevel = 0;
function buyUnlockUpgrades(){
	if (prestige >= 2){
		prestige -= 2;
		upgradePrestigeLevel += 1;
		document.getElementById("prestige").innerHTML = prestige;
		document.getElementById("moreUpgrades").classList.remove("hide");
		document.getElementById("upgradesTab").classList.remove("disabled");
		document.getElementById("unlockUpgrades").classList.add("hide");
	}
}
function buyMoreUpgrades(){
	if(prestige >= 2){
		prestige -= 2;
		upgradePrestigeLevel += 1;
		document.getElementById("prestige").innerHTML = prestige;
		document.getElementById("moreUpgrades").classList.add("hide");
		document.getElementById("upgradeComplete").classList.remove("hide");
		document.getElementById("chickenUpgrade4").classList.remove("disabled");
		document.getElementById("standUpgrade4").classList.remove("disabled");
	}
}
//

function about(){
	document.getElementById("about_text").classList.toggle("hide");
	document.getElementById("tab_buttons").classList.toggle("disabled");
	document.getElementById("disable_settings").classList.toggle("disabled");
	document.getElementById("disable_settings1").classList.toggle("disabled");
	document.getElementById("about_text").classList.add("enabled");
}
function displayFooter(box){
	document.getElementById(box + "_text").classList.toggle("hide");
	document.getElementById("tab_buttons").classList.toggle("disabled");
	document.getElementById("game").classList.toggle("disabled");
	document.getElementById("upgrades").classList.toggle("disabled");
	document.getElementById("prestige").classList.toggle("disabled");
	document.getElementById("settings").classList.toggle("disabled");
	document.getElementById("about_text").classList.add("enabled");
}

var eggMultiplier = 1;
function moneyMultiplier() {
	eggMultiplier = 1 + (silverEggs * 0.001) + (goldenEggs * 0.01) + (diamondEggs * 0.1) + rubyEggs + multiplierBonus;
}

var multiplierBonus = 0;
function calcMultiplierBonus(){
	multiplierBonus = 0.1 * prestige + multiplierBonusBonus;
	document.getElementById("multiplierBonusAmount").innerHTML = decimal(multiplierBonus * 100);
}

var sliderCount = document.getElementById("sliderCount");
var countNumber = document.getElementById("countNumber");
countNumber.innerHTML = sliderCount.value;
var buyNumber = sliderCount.value;
sliderCount.oninput = function() {
	countNumber.innerHTML = this.value;
	buyNumber = this.value;
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
	money += 1000000;
	document.getElementById("hackerText").classList.remove("hide");
}
