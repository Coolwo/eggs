//Markets(?) - Produce money w/o eggs
//MLM - ???
var maxEggPrice = 15;
var minEggPrice = 0.1;
var maxInflationPrice = 10;

var chickenUpgradeLevel =  0;
var chickenScienceLevel = 0;
var chickenEggBonus = 0;
var chickenPercent = 0;
var multiplierBonusBonus = 0;

var standUpgradeLevel = 0;
var standScienceLevel = 0;
var standSellBonus = 0;
var increaseEggChance = 0;

var upgrade = {
	chicken: {
		1: {
			count: 5,
			get item(){
				return chickens;
			},
			set item(newValue){
				chickens = newValue;
			}
		},
		2: {
			count: 2.5,
			get item(){
				return minEggPrice;
			},
			set item(newValue){
				minEggPrice = newValue;
			}
		},
		3: {
			count: 1,
			get item(){
				return chickenEggBonus;
			},
			set item(newValue){
				chickenEggBonus = newValue;
			}
		},
		4: {
			count: 1,
			get item(){
				return chickenPercent;
			},
			set item(newValue){
				chickenPercent = newValue;
			}
		},
		5: {
			count: 0.25,
			get item(){
				return multiplierBonusBonus;
			},
			set item(newValue){
				multiplierBonusBonus = newValue;
			}
		},
		6: {
			count: 7.5,
			get item(){
				return maxEggPrice;
			},
			set item(newValue){
				maxEggPrice = newValue;
			}
		}
	},
	stand: {
		1:{
			count: 5,
			get item(){
				return stands;
			},
			set item(newValue){
				stands = newValue;
			}
		},
		2:{
			count: 2.5,
			get item(){
				return maxEggPrice;
			},
			set item(newValue){
				maxEggPrice = newValue;
			}
		},
		3:{
			count: 1,
			get item(){
				return standSellBonus;
			},
			set item(newValue){
				standSellBonus = newValue;
			}
		},
		4:{
			count: 1,
			get item(){
				return increaseEggChance;
			},
			set item(newValue){
				increaseEggChance = newValue;
			}
		},
		5:{
			count: 1,
			get item(){
				return standSellBonus;
			},
			set item(newValue){
				standSellBonus = newValue;
			}
		},
		6:{
			count: 7.5,
			get item(){
				return maxEggPrice;
			},
			set item(newValue){
				maxEggPrice = newValue;
			}
		}
	}
}

function buyCheapChickens(){
	if(money >= 100){
		money -= 100;
		upgradeEffect(1, 'chicken');
		chickenUpgradeLevel = 1;
		moneyDOM.innerHTML = decimal(money);
		chickensDOM.innerHTML = chickens;
		updateUpgrades(1, 'chicken');
	}
}
function buyBetterFood(){
	if(money >= 2000){
		money -= 2000;
		upgradeEffect(2, 'chicken');
		chickenUpgradeLevel = 2;
		moneyDOM.innerHTML = decimal(money);
		updateUpgrades(2, 'chicken');
	}
}
function buySpaceChickens(){
	if(money >= 10000){
		money -= 10000;
		upgradeEffect(3, 'chicken');
		chickenUpgradeLevel = 3;
		moneyDOM.innerHTML = decimal(money);
		updateUpgrades(3, 'chicken');
		testForScience(chickenScienceLevel, 'chicken');
	}
}
function buyChickenChickens(){
	if(money >= 100000 && science >= 150){
		money -= 100000;
		science -= 150;
		upgradeEffect(4, 'chicken');
		chickenUpgradeLevel = 4;
		chickenScienceLevel = 4;
		moneyDOM.innerHTML = decimal(money);
		scienceDOM.innerHTML = decimal(science);
		updateUpgrades(4, 'chicken');
	}
}
function buyToughEggshells(){
	if(money >= 2500000 && science >= 250){
		money -= 2500000;
		science -= 250;
		upgradeEffect(5, 'chicken');
		chickenUpgradeLevel = 5;
		chickenScienceLevel = 5;
		moneyDOM.innerHTML = decimal(money);
		scienceDOM.innerHTML = decimal(science);
		updateUpgrades(5, 'chicken');
	}
}
function buyGradeBEggs(){
	if(money >= 5000000 && science >= 250){
		money -= 5000000;
		science -= 250;
		upgradeEffect(6, 'chicken');
		chickenUpgradeLevel = 6;
		chickenScienceLevel = 6;
		moneyDOM.innerHTML = decimal(money);
		scienceDOM.innerHTML = decimal(science);
		updateUpgrades(6, 'chicken');
	}
}

function buyCheapStands(){
	if(money >= 100){
		money -= 100;
		upgradeEffect(1, 'stand');
		standUpgradeLevel = 1;
		moneyDOM.innerHTML = decimal(money);
		standsDOM.innerHTML = stands;
		updateUpgrades(1, 'stand');
	}
}
function buyMarketing(){
	if(money >= 2000){
		money -= 2000;
		upgradeEffect(2, 'stand');
		maxInflationPrice += 2.5;
		standUpgradeLevel = 2;
		moneyDOM.innerHTML = decimal(money);
		updateUpgrades(2, 'stand');
	}
}
function buyBiggerStands(){
	if(money >= 10000){
		money -= 10000;
		upgradeEffect(3, 'stand');
		standUpgradeLevel = 3;
		moneyDOM.innerHTML = decimal(money);
		updateUpgrades(3, 'stand');
		testForScience(standScienceLevel, 'stand')
	}
}
function buyGradeCEggs(){
	if(money >= 1000000 && science >= 150){
		money -= 1000000;
		science -= 150;
		upgradeEffect(4, 'stand');
		standUpgradeLevel = 4;
		standScienceLevel = 4;
		moneyDOM.innerHTML = decimal(money);
		scienceDOM.innerHTML = decimal(science);
		updateUpgrades(4, 'stand');
	}
}
function buyAdvertising(){
	if(money >= 2500000 && science >= 250){
		money -= 2500000;
		science -= 250;
		upgradeEffect(5, 'stand');
		standUpgradeLevel = 5;
		standScienceLevel = 5;
		moneyDOM.innerHTML = decimal(money);
		scienceDOM.innerHTML = decimal(science);
		updateUpgrades(5, 'stand');
	}
}
function buySocialMedia(){
	if(money >= 5000000 && science >= 1000){
		money -= 5000000;
		science -= 1000;
		upgradeEffect(6, 'stand');
		standSellBonus = 4;
		standUpgradeLevel = 6;
		standScienceLevel = 6;
		moneyDOM.innerHTML = decimal(money);
		scienceDOM.innerHTML = decimal(science);
		updateUpgrades(6, 'stand');
	}
}

var scienceUpgradeLevel = 0;
function buyScienceChickens(){
	if (money >= 100000){
		money -= 100000;
		scienceUpgradeLevel = 1;
		moneyDOM.innerHTML = decimal(money);
		document.getElementById("scienceUpgrade1").classList.add("hide");
		document.getElementById("scientist1").classList.remove("hide");
	}
}

var scienceChickens = 0;
function buyScienceChicken(count){
	for (let i = 0; i < count; ++i){
		if (money >= 500){
			money -= 500;
			scienceChickens += 1;
			moneyDOM.innerHTML = decimal(money);
			scienceChickensDOM.innerHTML = scienceChickens;
		}
	}
}