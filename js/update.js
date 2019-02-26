function updateUpgrades(level, type){
	let count = 1;
    for (let i = 0; i < level; ++i){
		document.getElementById(type + "Upgrade" + count).classList.add("hide");
		document.getElementById(type + "Upgrade" + (count + 1)).classList.remove("hide");
		++count;
	}
}

function upgradeEffect(level, type){
	var group = upgrade[type];
	group[level].item += group[level].count;
}

function hideUpgrades(){
	let count = 2
	for (let i = 0; i < 5; ++i){
		document.getElementById("chickenUpgrade" + count).classList.add("hide");
		document.getElementById("standUpgrade" + count).classList.add("hide");
		console.log(count);
	}
	document.getElementById("chickenUpgrade1").classList.remove("hide");
	document.getElementById("standUpgrade1").classList.remove("hide");
}

function calcUpgrades(operation){
	if (chickenUpgradeLevel >= 2){
		if (operation === "+"){
			minEggPrice += 2.5;
		}
		if (operation === "-"){
			minEggPrice -= 2.5;
		}
	}
	if (chickenUpgradeLevel >= 3){
		if (operation === "+"){
			chickenEggBonus += 1;
		}
		if (operation === "-"){
			chickenEggBonus -= 1;
		}
	}
	if (chickenUpgradeLevel >= 4){
		if (operation === "+"){
			chickenPercent += 1;
		}
	}
	if (chickenUpgradeLevel >= 5){
		if (operation === "+"){
			multiplierBonusBonus += 0.25;
		}
	}
	if (chickenUpgradeLevel >= 6){
		if (operation === "+"){
			maxEggPrice += 7.5;
		}
	}
	if (standUpgradeLevel >= 2){
		if (operation === "+"){
			maxEggPrice += 2.5;
		}
		if (operation === "-"){
			maxEggPrice -= 2.5;
		}
	}
	if (standUpgradeLevel >= 3){
		if (operation === "+"){
			standSellBonus += 1;
		}
		if (operation === "-"){
			standSellBonus -= 1;
		}
	}
	if (standUpgradeLevel >= 4){
		if (operation === "+"){
			increaseEggChance += 1;
		}
	}
	if (standUpgradeLevel >= 5){
		if (operation === "+"){
			standSellBonus += 1;
		}
	}
	if (standUpgradeLevel >= 6){
		if (operation === "+"){
			maxEggPrice += 7.5;
			standSellBonus += 4;
		}
	}
}

function resetUpgrades(){
	document.getElementById("chickenUpgrade1").classList.remove("hide");
	document.getElementById("standUpgrade1").classList.remove("hide");
	for (let i = 2; i < 8; ++i){
		document.getElementById("chickenUpgrade" + i).classList.add("hide");
		document.getElementById("standUpgrade" + i).classList.add("hide");
	}
}

function testForScience(level, type){
	let count = level - 3;
	let it = 4;
	if (count >= 1){
		for (let i = 0; i < count; ++i){
			document.getElementById(type + "Upgrade" + it).classList.add("hide");
			document.getElementById(type + "Upgrade" + (it + 1)).classList.remove("hide");
			++it;
		}
		if (type === 'chicken'){
			chickenUpgradeLevel = (it - 1);
		}
		if (type === 'stand'){
			standUpgradeLevel = (it - 1);
		}
	}
}


function updateInventory(){
    if (science >= 1){
        scienceContainerDOM.classList.remove("hide");
	}
	if (scienceChickens >= 1){
        scienceChickensContainerDOM.classList.remove("hide");
    }
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
