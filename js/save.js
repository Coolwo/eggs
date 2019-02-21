function saveGame(skip){
	if(skip === 0){
		var r = confirm("Are you sure? This will overwrite your previous save.");
	} else {
		r = true
	}
	if (r == true){
		save = {
			lastUpdate: lastUpdate,
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
			prestigePrestigeLevel: prestigePrestigeLevel,
			upgradePrestigeLevel: upgradePrestigeLevel,
			chickenUpgradeLevel: chickenUpgradeLevel,
			standUpgradeLevel: standUpgradeLevel,
			scienceUpgradeLevel: scienceUpgradeLevel,
			scienceChickens: scienceChickens,
			science: science,
			chickenScienceLevel: chickenScienceLevel,
			standScienceLevel: standScienceLevel,
			lifetimePrestige: lifetimePrestige
		}
		localStorage.setItem("save",JSON.stringify(save));
	}
}

function load(skip){
	if(skip === 0){
		var r = confirm("Are you sure? This will overwrite your current game.");
	} else {
		r = true
	}
	if (r == true){
		var savegame = JSON.parse(localStorage.getItem("save")); 
		if (typeof savegame.lastUpdate !== "undefined") {
			lastUpdate = savegame.lastUpdate;
		} else {
			lastUpdate = '1.2';
		}
		if (typeof savegame.eggs !== "undefined") eggs = savegame.eggs; 
		document.getElementById("eggs").innerHTML = eggs;
		if (typeof savegame.eggPrice !== "undefined") eggPrice = savegame.eggPrice; 
		document.getElementById("eggPrice").innerHTML = decimal(eggPrice * eggMultiplier);
		if (typeof savegame.money !== "undefined") money = savegame.money; 
		document.getElementById("money").innerHTML = decimal(money);
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
		if (typeof savegame.lifetimePrestige !== "undefined") lifetimePrestige = savegame.lifetimePrestige; 
		document.getElementById("lifetimePrestige").innerHTML = lifetimePrestige;
		if (typeof savegame.chickenPrestigeLevel !== "undefined") chickenPrestigeLevel = savegame.chickenPrestigeLevel; 
		if (typeof savegame.eggPrestigeLevel !== "undefined") eggPrestigeLevel = savegame.eggPrestigeLevel; 
		if (typeof savegame.prestigePrestigeLevel !== "undefined") prestigePrestigeLevel = savegame.prestigePrestigeLevel; 
		if (typeof savegame.upgradePrestigeLevel !== "undefined") upgradePrestigeLevel = savegame.upgradePrestigeLevel; 
		if (typeof savegame.chickenUpgradeLevel !== "undefined") chickenUpgradeLevel = savegame.chickenUpgradeLevel; 
		if (typeof savegame.standUpgradeLevel !== "undefined") standUpgradeLevel = savegame.standUpgradeLevel; 
		if (typeof savegame.scienceUpgradeLevel !== "undefined") scienceUpgradeLevel = savegame.scienceUpgradeLevel; 
		if (typeof savegame.scienceChickens !== "undefined") scienceChickens = savegame.scienceChickens; 
		scienceChickensDOM.innerHTML = scienceChickens;
		if (typeof savegame.science !== "undefined") science = savegame.science; 
		scienceDOM.innerHTML = science;
		if (typeof savegame.chickenScienceLevel !== "undefined") chickenScienceLevel = savegame.chickenScienceLevel; 
		if (typeof savegame.standScienceLevel !== "undefined") standScienceLevel = savegame.standScienceLevel; 
		if (typeof savegame.lifetimePrestige !== "undefined") lifetimePrestige = savegame.lifetimePrestige; 
		document.getElementById("lifetimePrestige").innerHTML = lifetimePrestige;
	updateInventory();
	updateUpgrades(chickenUpgradeLevel, "chicken");
	updateUpgrades(standUpgradeLevel, "stand");
	if (scienceUpgradeLevel >= 1){
		document.getElementById("scienceUpgrade1").classList.add("hide");
	}
	calcUpgrades('+');
	console.log("plz work")
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
	var upSuccess = false;
	var maxUP = 2;
	if (upgradePrestigeLevel >= 1){
		if (upgradePrestigeLevel >= 1){
			document.getElementById("moreUpgrades").classList.remove("hide");
			document.getElementById("upgradesTab").classList.remove("disabled");
			document.getElementById("unlockUpgrades").classList.add("hide");
			console.log("UP Level 1 loaded");
			upSuccess = true;
		}
		if (upgradePrestigeLevel >= 2){
			document.getElementById("moreUpgrades").classList.add("hide");
			console.log("UP level 2 loaded");
			document.getElementById("chickenUpgrade4").classList.remove("disabled");
			document.getElementById("standUpgrade4").classList.remove("disabled");
			upSuccess = true;
		}
		if (upgradePrestigeLevel === maxUP){
			document.getElementById("upgradeComplete").classList.remove("hide");
		}
		if (upgradePrestigeLevel > maxUP){
			upSuccess = false;
		}
		if (upSuccess === false){
			console.log("Error in loading Upgrade Prestige");
		}
	} else {
		console.log('No upgrade prestige found.');
	}
	}
}

function clearSave(){
	var r = confirm("Are you sure? This action is irreversable.");
	if (r == true){
		this.localStorage.removeItem('save');
		location.reload();
	}
}
