// commandersList();
levelsCommanderPlayer();
levelsCommanderEnemy();
commandersListFunctionPlayer();
commandersListFunctionEnemy();
displayCommandersPlayer();

// Civ selection check - Enemy //
var civ2;
var civ;
var infantryPlayer;
var infantryEnemy;
var cavalryEnemy;
var cavalryPlayer;
var siegePlayer;
var siegeEnemy;
var archersEnemy;
var archersPlayer;


// Civ selection check - PLAYER //

function displayCivPlayer(){
    var e = document.getElementById("civsPlayer");
    var value = e.options[e.selectedIndex].value; 

    switch(value) {
        case "Arabia":
            civ = Arabia;
            statsDisplayPlayer(civ)
            break;
        case "Britain":
            civ = Britain;
            statsDisplayPlayer(civ);
            break;
        case "Byzantium":
            civ = Byzantium;
            statsDisplayPlayer(civ);
            break;
        case "China":
            civ = China;
            statsDisplayPlayer(civ);
            break;
        case "France":
            civ = France;
            statsDisplayPlayer(civ);
            break;
        case "Germany":
            civ = Germany;
            statsDisplayPlayer(civ);
            break;
        case "Japan":
            civ = Japan;
            statsDisplayPlayer(civ);
            break;
        case "Korea":
            civ = Korea;
            statsDisplayPlayer(civ);
            break;
        case "Ottoman":
            civ = Ottoman;
            statsDisplayPlayer(civ);
            break;
        case "Rome":
            civ = Rome;
            statsDisplayPlayer(civ);
            break;
        case "Spain":
            civ = Spain;
            statsDisplayPlayer(civ);
            break;
        default:
            break;
      }
}



function displayCivEnemy(){
    var e = document.getElementById("civsEnemy");
    var value = e.options[e.selectedIndex].value; 
    switch(value) {
        case "Arabia":
            civ2 = Arabia;
            statsDisplayEnemy(civ2);
            break;
        case "Britain":
            civ2 = Britain;
            statsDisplayEnemy(civ2);
            break;
        case "Byzantium":
            civ2 = Byzantium;
            statsDisplayEnemy(civ2);
            break;
        case "China":
            civ2 = China;
            statsDisplayEnemy(civ2);
            break;
        case "France":
            civ2 = France;
            statsDisplayEnemy(civ2);
            break;
        case "Germany":
            civ2 = Germany;
            statsDisplayEnemy(civ2);
            break;
        case "Japan":
            civ2 = Japan;
            statsDisplayEnemy(civ2);
            break;
        case "Korea":
            civ2 = Korea;
            statsDisplayEnemy(civ2);
            break;
        case "Ottoman":
            civ2 = Ottoman;
            statsDisplayEnemy(civ2);
            break;
        case "Rome":
            civ2 = Rome;
            statsDisplayEnemy(civ2);
            break;
        case "Spain":
            civ2 = Spain;
            statsDisplayEnemy(civ2);
            break;
        default:
            break;
      }
}

function commandersListFunctionPlayer(){
    for (let i = 0; i < commandersList.length; i++) {
        g = document.createElement('option');
        g.text = commandersList[i];
        g.value = commandersList[i];    

        element = document.getElementById("commandersPlayer");
        element.appendChild(g)
    }
}

function commandersListFunctionEnemy(){
    for (let i = 0; i < commandersList.length; i++) {
        g = document.createElement('option');
        g.text = commandersList[i];
        g.value = commandersList[i];    

        element = document.getElementById("commandersEnemy");
        element.appendChild(g)
    }
}

function levelsCommanderPlayer(){
    for (var i = 2; i <= 60; i++) {
        g = document.createElement('option');
        g.text = i;
        g.value = i;
    
        element = document.getElementById("levelsCommanderPlayer");
        element.appendChild(g) 
    }
    this.takeLvlPlayer()  
}

// TODO
function levelsCommanderEnemy(){
    for (var i = 1; i <= 60; i++) {
        g = document.createElement('option');
        g.text = i;
        g.value = i;
    
        element = document.getElementById("levelsCommanderEnemy");
        element.appendChild(g)
    }
    // this.takeLvlEnemy()  
}

//funkcja wylicza power bohatera z poziomu który posiada

function takeLvlPlayer(){
    var sel = document.getElementById("levelsCommanderPlayer");
    var value = sel.options[sel.selectedIndex].value;
    value = parseInt(value)
    let result1 = (10*100); // 1-10  1000
    let result2 = (10*150); //11-20  1500
    let result3 = (10*200); //21-30  2000
    let result4 = (10*300); //31-40  3000
    let result5 = (10*500); //41-50  5000
    // let result6 = (10*600); //51-60  6000

    if(value>0&&value<=10){
        let temp1 = (value*100);
        let result = temp1;
        this.addTalentPower(result,value);
    }else if(value>10&&value<=20){
        let temp2 = (value-10)*150; //11-20   1100
        let result = result1 + temp2;
        this.addTalentPower(result,value);
    }else if(value>20&&value<=30){
        let temp3 = (value-20)*200;
        let result = result1 + result2 + temp3;
        this.addTalentPower(result,value);
    }else if(value>30&&value<=40){
        let temp4 = (value-30)*300;
        let result = result1 + result2 + result3 + temp4
        this.addTalentPower(result,value);
    }else if(value>40&&value<=50){
        let temp5 = (value-40)*500;
        let result = result1 + result2 + result3 + result4 + temp5
        this.addTalentPower(result,value);
    }else{
        let temp6 = (value-50)*600;
        let result = result1 + result2 + result3 + result4 + result5 + temp6
        this.addTalentPower(result,value);
    }
}

// Zliczanie talentów po poziomie bohatera
// 4s = 39lvl 38t z,b
// 40lvl up +1 talent bez dodania gwiazdek
// po dodaniu gwizdek +5

function addTalentPower(result, value){
    var takeStars = document.getElementById("starsPlayer");
    var starsValue = parseInt(takeStars.options[takeStars.selectedIndex].value);
    // console.log("liczba gwiazd: " + starsValue);
    if(starsValue == 6){
        let totalTalentPower = ((value-1)+15)*300;
        this.talentAndLevelPowerCommander(result,totalTalentPower);       
    }else if(starsValue >= 5 && starsValue < 6){
        let totalTalentPower = ((value-1)+5)*300;
        this.talentAndLevelPowerCommander(result,totalTalentPower);
    }else{
        let totalTalentPower = (value-1)*300;
        this.talentAndLevelPowerCommander(result,totalTalentPower);
    }  
}

// get choosen commander and match with power
function displayCommandersPlayer(){
        var sel = document.getElementById("commandersPlayer");
        var value = sel.options[sel.selectedIndex].value;
        document.getElementById("commanderNameHtml").innerHTML = `Name: ${value}`;
        

        var obj = eval('({' + value + '})');
        obj = Object.values(obj);
        obj = obj[0];
        var obj2 = obj.powerBased;
        document.getElementById("commanderBaseLvlPowerHtml").innerHTML = `Base power: ${obj2}`;
        

        switch(true) {
            case (obj2 === gold800.powerBased):
                break;
            case (obj2 === gold950.powerBased):
                break;
            case (obj2 === gold1000.powerBased):
                break;
            case (obj2 === gold1100.powerBased):
                break;
            case (obj2 === gold1200.powerBased):
                break;
            case (obj2 === purple600.powerBased):
                break;
            case (obj2 === purple500.powerBased):
                break;
            }
        this.takeSkillsFromPage(obj,obj2);
}

// dTake skills from input fields
function takeSkillsFromPage(obj2){
    var playerSkill1 = document.getElementById("playerSkill1").value;
    var playerSkill2 = document.getElementById("playerSkill2").value;
    var playerSkill3 = document.getElementById("playerSkill3").value;
    var playerSkill4 = document.getElementById("playerSkill4").value;
    var playerSkill5 = document.getElementById("playerSkill5").value;

    this.countSkillsCommander(obj2, playerSkill1, playerSkill2, playerSkill3, playerSkill4, playerSkill5);
}

// counting power with input values
function countSkillsCommander(obj2, playerSkill1, playerSkill2, playerSkill3, playerSkill4, playerSkill5){
    if(obj2.powerBased === 800){
        let power = parseInt((playerSkill1*gold800.skill1)+(playerSkill2*gold800.skill2)+(playerSkill3*gold800.skill3)+(playerSkill4*gold800.skill4)+(playerSkill5*gold800.skill5));
        this.skillsPowerCommander(power);
    }else if(obj2.powerBased === 950){
        let power = parseInt((playerSkill1*gold950.skill1)+(playerSkill2*gold950.skill2)+(playerSkill3*gold950.skill3)+(playerSkill4*gold950.skill4)+(playerSkill5*gold950.skill5));
        this.skillsPowerCommander(power);
    }else if(obj2.powerBased === 1000){
        let power = parseInt((playerSkill1*gold1000.skill1)+(playerSkill2*gold1000.skill2)+(playerSkill3*gold1000.skill3)+(playerSkill4*gold1000.skill4)+(playerSkill5*gold1000.skill5));
        this.skillsPowerCommander(power);
    }else if(obj2.powerBased === 1100){
        let power = parseInt((playerSkill1*gold1100.skill1)+(playerSkill2*gold1100.skill2)+(playerSkill3*gold1100.skill3)+(playerSkill4*gold1100.skill4)+(playerSkill5*gold1100.skill5));
        this.skillsPowerCommander(power);
    }else if(obj2.powerBased === 1200){
        let power = parseInt((playerSkill1*gold1200.skill1)+(playerSkill2*gold1200.skill2)+(playerSkill3*gold1200.skill3)+(playerSkill4*gold1200.skill4)+(playerSkill5*gold1200.skill5));
        this.skillsPowerCommander(power);
    }else if(obj2.powerBased === 600){
        let power = parseInt((playerSkill1*purple600.skill1)+(playerSkill2*purple600.skill2)+(playerSkill3*purple600.skill3)+(playerSkill4*purple600.skill4)+(playerSkill5*purple600.skill5));
        this.skillsPowerCommander(power);
    }else if(obj2.powerBased === 500){
        let power = parseInt((playerSkill1*purple500.skill1)+(playerSkill2*purple500.skill2)+(playerSkill3*purple500.skill3)+(playerSkill4*purple500.skill4)+(playerSkill5*purple500.skill5));
        this.skillsPowerCommander(power);
    }else{
        console.log("nieznany")  
    }
}

//TODO
function displayCommandersEnemy(){
    console.log("dummy");
}

// TOTAL POWER - TODO zrobić tak aby wszystkie statystyki zliczały się jednocześnie.
function skillsPowerCommander(power){  
    document.getElementById("commanderskillPowerHtml").innerHTML = `${power}`;
}

function talentAndLevelPowerCommander(result,totalTalentPower){
    document.getElementById("commanderLvlPowerHtml").innerHTML = `${result}`;
    document.getElementById("commanderTalentPowerHtml").innerHTML = `${totalTalentPower}`;
}

function totalCount(){
    this.levelsCommanderPlayer()
    this.displayCivPLayer()
    this.displayCommandersPlayer()

    

    //commander lvl display
    var sel = document.getElementById("levelsCommanderPlayer");
    var value = sel.options[sel.selectedIndex].value;
    document.getElementById("commanderLvlHtml").innerHTML = "level: " + value;

    // commander stars display
    var takeStars = document.getElementById("starsPlayer");
    var starsValue = parseInt(takeStars.options[takeStars.selectedIndex].value);
    document.getElementById("commanderStarLvlHtml").innerHTML = "stars: " + starsValue;

    // troops capacity
    var troopsCaps = document.getElementById("playerTroopCapacity").value;
    document.getElementById("troopCapacityHtml").innerHTML = "Troops capacity: " + troopsCaps;

    //commander total power
    var takeLvlPower = parseInt(document.getElementById("commanderLvlPowerHtml").innerText);
    var takeSkillPower = parseInt(document.getElementById("commanderskillPowerHtml").innerText);
    var takeTalentPower = parseInt(document.getElementById("commanderTalentPowerHtml").innerText);
    var totalPowerCommanderPlayer = takeLvlPower + takeSkillPower + takeTalentPower;
}

// BUFFS BONUS
function buffBonusAtt(){
    checkBox = document.getElementById("att")
    checkBox2 = document.getElementById("def")
    checkBoxInt = parseInt(checkBox.value);
    checkBoxInt2 = parseInt(checkBox2.value);
    if (checkBox.checked && checkBox.id == "att"){
        console.log(checkBoxInt)
        checkBox2.checked = false;
    }else if(checkBox2.checked && checkBox2.id == "def"){
        console.log(checkBoxInt2)
        checkBox.checked = false;
    }else{
        console.log(0)
    }
}

function buffBonusCap() {
    checkBox = document.getElementById("cap25")
    checkBox2 = document.getElementById("cap50")
    checkBoxInt = parseInt(checkBox.value);
    checkBoxInt2 = parseInt(checkBox2.value);
    if (checkBox.checked && checkBox.id == "cap25"){
        console.log(checkBoxInt)
        checkBox2.checked = false;
    }else if(checkBox2.checked && checkBox2.id == "cap50"){
        console.log(checkBoxInt2)
        checkBox.checked = false;
    }else{
        console.log(0)
    }
}

// border stats Player 

function commanderStatsDisplayInner(){
    document.getElementById("commanderStatsDisplay").innerHTML = "test" 
}

function statsDisplayPlayer(civ){
    document.getElementById("infantryPlayert1Stats").innerHTML ="T1: att: "+civ.infantry.t1.att + "def: "+civ.infantry.t1.def + "hp: "+civ.infantry.t1.hp;
    document.getElementById("infantryPlayert2Stats").innerHTML ="T2: att: "+civ.infantry.t2.att + "def: "+civ.infantry.t2.def + "hp: "+civ.infantry.t2.hp;
    document.getElementById("infantryPlayert3Stats").innerHTML ="T3: att: "+civ.infantry.t3.att + "def: "+civ.infantry.t3.def + "hp: "+civ.infantry.t3.hp;
    document.getElementById("infantryPlayert4Stats").innerHTML ="T4: att: "+civ.infantry.t4.att + "def: "+civ.infantry.t4.def + "hp: "+civ.infantry.t4.hp;

    document.getElementById("cavalryPlayert1Stats").innerHTML ="T1: att: "+civ.cavalry.t1.att + "def: "+civ.cavalry.t1.def + "hp: "+civ.cavalry.t1.hp;
    document.getElementById("cavalryPlayert2Stats").innerHTML ="T2: att: "+civ.cavalry.t2.att + "def: "+civ.cavalry.t2.def + "hp: "+civ.cavalry.t2.hp;
    document.getElementById("cavalryPlayert3Stats").innerHTML ="T3: att: "+civ.cavalry.t3.att + "def: "+civ.cavalry.t3.def + "hp: "+civ.cavalry.t3.hp;
    document.getElementById("cavalryPlayert4Stats").innerHTML ="T4: att: "+civ.cavalry.t4.att + "def: "+civ.cavalry.t4.def + "hp: "+civ.cavalry.t4.hp;

    document.getElementById("archersPlayert1Stats").innerHTML ="T1: att: "+civ.archers.t1.att + "def: "+civ.archers.t1.def + "hp: "+civ.archers.t1.hp;
    document.getElementById("archersPlayert2Stats").innerHTML ="T2: att: "+civ.archers.t2.att + "def: "+civ.archers.t2.def + "hp: "+civ.archers.t2.hp;
    document.getElementById("archersPlayert3Stats").innerHTML ="T3: att: "+civ.archers.t3.att + "def: "+civ.archers.t3.def + "hp: "+civ.archers.t3.hp;
    document.getElementById("archersPlayert4Stats").innerHTML ="T4: att: "+civ.archers.t4.att + "def: "+civ.archers.t4.def + "hp: "+civ.archers.t4.hp;

    document.getElementById("siegePlayert1Stats").innerHTML ="T1: att: "+civ.sieges.t1.att + "def: "+civ.sieges.t1.def + "hp: "+civ.sieges.t1.hp;
    document.getElementById("siegePlayert2Stats").innerHTML ="T2: att: "+civ.sieges.t2.att + "def: "+civ.sieges.t2.def + "hp: "+civ.sieges.t2.hp;
    document.getElementById("siegePlayert3Stats").innerHTML ="T3: att: "+civ.sieges.t3.att + "def: "+civ.sieges.t3.def + "hp: "+civ.sieges.t3.hp;
    document.getElementById("siegePlayert4Stats").innerHTML ="T4: att: "+civ.sieges.t4.att + "def: "+civ.sieges.t4.def + "hp: "+civ.sieges.t4.hp;
}

// border stats Enemy 

function statsDisplayEnemy(civ2){
    document.getElementById("infantryEnemyt1Stats").innerHTML ="T1: att: "+civ2.infantry.t1.att + "def: "+civ2.infantry.t1.def + "hp: "+civ2.infantry.t1.hp;
    document.getElementById("infantryEnemyt2Stats").innerHTML ="T2: att: "+civ2.infantry.t2.att + "def: "+civ2.infantry.t2.def + "hp: "+civ2.infantry.t2.hp;
    document.getElementById("infantryEnemyt3Stats").innerHTML ="T3: att: "+civ2.infantry.t3.att + "def: "+civ2.infantry.t3.def + "hp: "+civ2.infantry.t3.hp;
    document.getElementById("infantryEnemyt4Stats").innerHTML ="T4: att: "+civ2.infantry.t4.att + "def: "+civ2.infantry.t4.def + "hp: "+civ2.infantry.t4.hp;

    document.getElementById("cavalryEnemyt1Stats").innerHTML ="T1: att: "+civ2.cavalry.t1.att + "def: "+civ2.cavalry.t1.def + "hp: "+civ2.cavalry.t1.hp;
    document.getElementById("cavalryEnemyt2Stats").innerHTML ="T2: att: "+civ2.cavalry.t2.att + "def: "+civ2.cavalry.t2.def + "hp: "+civ2.cavalry.t2.hp;
    document.getElementById("cavalryEnemyt3Stats").innerHTML ="T3: att: "+civ2.cavalry.t3.att + "def: "+civ2.cavalry.t3.def + "hp: "+civ2.cavalry.t3.hp;
    document.getElementById("cavalryEnemyt4Stats").innerHTML ="T4: att: "+civ2.cavalry.t4.att + "def: "+civ2.cavalry.t4.def + "hp: "+civ2.cavalry.t4.hp;

    document.getElementById("archersEnemyt1Stats").innerHTML ="T1: att: "+civ2.archers.t1.att + "def: "+civ2.archers.t1.def + "hp: "+civ2.archers.t1.hp;
    document.getElementById("archersEnemyt2Stats").innerHTML ="T2: att: "+civ2.archers.t2.att + "def: "+civ2.archers.t2.def + "hp: "+civ2.archers.t2.hp;
    document.getElementById("archersEnemyt3Stats").innerHTML ="T3: att: "+civ2.archers.t3.att + "def: "+civ2.archers.t3.def + "hp: "+civ2.archers.t3.hp;
    document.getElementById("archersEnemyt4Stats").innerHTML ="T4: att: "+civ2.archers.t4.att + "def: "+civ2.archers.t4.def + "hp: "+civ2.archers.t4.hp;

    document.getElementById("siegeEnemyt1Stats").innerHTML ="T1: att: "+civ2.sieges.t1.att + "def: "+civ2.sieges.t1.def + "hp: "+civ2.sieges.t1.hp;
    document.getElementById("siegeEnemyt2Stats").innerHTML ="T2: att: "+civ2.sieges.t2.att + "def: "+civ2.sieges.t2.def + "hp: "+civ2.sieges.t2.hp;
    document.getElementById("siegeEnemyt3Stats").innerHTML ="T3: att: "+civ2.sieges.t3.att + "def: "+civ2.sieges.t3.def + "hp: "+civ2.sieges.t3.hp;
    document.getElementById("siegeEnemyt4Stats").innerHTML ="T4: att: "+civ2.sieges.t4.att + "def: "+civ2.sieges.t4.def + "hp: "+civ2.sieges.t4.hp;
}

 //listeners section//
 document.getElementById("przycisk").addEventListener("click", function(civ, civ2){ 
        let infantryPlayert1number = parseInt(document.getElementById("infantryPlayert1").value);
        let infantryPlayert2number = parseInt(document.getElementById("infantryPlayert2").value);
        let infantryPlayert3number = parseInt(document.getElementById("infantryPlayert3").value);
        let infantryPlayert4number = parseInt(document.getElementById("infantryPlayert4").value);
        let infantryPlayert5number = parseInt(document.getElementById("infantryPlayert5").value);

        let cavalryPlayert1number = parseInt(document.getElementById("cavalryPlayert1").value);
        let cavalryPlayert2number = parseInt(document.getElementById("cavalryPlayert2").value);
        let cavalryPlayert3number = parseInt(document.getElementById("cavalryPlayert3").value);
        let cavalryPlayert4number = parseInt(document.getElementById("cavalryPlayert4").value);
        let cavalryPlayert5number = parseInt(document.getElementById("cavalryPlayert5").value);

        let archersPlayert1number = parseInt(document.getElementById("archersPlayert1").value);
        let archersPlayert2number = parseInt(document.getElementById("archersPlayert2").value);
        let archersPlayert3number = parseInt(document.getElementById("archersPlayert3").value);
        let archersPlayert4number = parseInt(document.getElementById("archersPlayert4").value);
        let archersPlayert5number = parseInt(document.getElementById("archersPlayert5").value);

        let siegePlayert1number = parseInt(document.getElementById("siegePlayert1").value);
        let siegePlayert2number = parseInt(document.getElementById("siegePlayert2").value);
        let siegePlayert3number = parseInt(document.getElementById("siegePlayert3").value);
        let siegePlayert4number = parseInt(document.getElementById("siegePlayert4").value);
        let siegePlayert5number = parseInt(document.getElementById("siegePlayert5").value);
        
        let infantryEnemyt1number = parseInt(document.getElementById("infantryEnemyt1").value);
        let infantryEnemyt2number = parseInt(document.getElementById("infantryEnemyt2").value);
        let infantryEnemyt3number = parseInt(document.getElementById("infantryEnemyt3").value);
        let infantryEnemyt4number = parseInt(document.getElementById("infantryEnemyt4").value);
        let infantryEnemyt5number = parseInt(document.getElementById("infantryEnemyt5").value);

        let cavalryEnemyt1number = parseInt(document.getElementById("cavalryEnemyt1").value);
        let cavalryEnemyt2number = parseInt(document.getElementById("cavalryEnemyt2").value);
        let cavalryEnemyt3number = parseInt(document.getElementById("cavalryEnemyt3").value);
        let cavalryEnemyt4number = parseInt(document.getElementById("cavalryEnemyt4").value);
        let cavalryEnemyt5number = parseInt(document.getElementById("cavalryEnemyt5").value);

        let archersEnemyt1number = parseInt(document.getElementById("archersEnemyt1").value);
        let archersEnemyt2number = parseInt(document.getElementById("archersEnemyt2").value);
        let archersEnemyt3number = parseInt(document.getElementById("archersEnemyt3").value);
        let archersEnemyt4number = parseInt(document.getElementById("archersEnemyt4").value);
        let archersEnemyt5number = parseInt(document.getElementById("archersEnemyt5").value);

        let siegeEnemyt1number = parseInt(document.getElementById("siegeEnemyt1").value);
        let siegeEnemyt2number = parseInt(document.getElementById("siegeEnemyt2").value);
        let siegeEnemyt3number = parseInt(document.getElementById("siegeEnemyt3").value);
        let siegeEnemyt4number = parseInt(document.getElementById("siegeEnemyt4").value);
        let siegeEnemyt5number = parseInt(document.getElementById("siegeEnemyt5").value);

        totalTroopsNumber = infantryPlayert1number + infantryPlayert2number + infantryPlayert3number + infantryPlayert4number + cavalryPlayert1number + cavalryPlayert2number + cavalryPlayert3number + cavalryPlayert4number + archersPlayert1number + archersPlayert2number + archersPlayert3number + archersPlayert4number + siegePlayert1number + siegePlayert2number + siegePlayert3number + siegePlayert4number

        function start(){
            infCount(infantryPlayert1number,infantryPlayert2number,infantryPlayert3number,infantryPlayert4number,infantryEnemyt1number,infantryEnemyt2number,infantryEnemyt3number,infantryEnemyt4number);
            cavCount(cavalryPlayert1number,cavalryPlayert2number,cavalryPlayert3number,cavalryPlayert4number,cavalryEnemyt1number,cavalryEnemyt2number,cavalryEnemyt3number,cavalryEnemyt4number);
            archCount(archersPlayert1number,archersPlayert2number,archersPlayert3number,archersPlayert4number,archersEnemyt1number,archersEnemyt2number,archersEnemyt3number,archersEnemyt4number);
            siegeCount(siegePlayert1number,siegePlayert2number,siegePlayert3number,siegePlayert4number,siegeEnemyt1number,siegeEnemyt2number,siegeEnemyt3number,siegeEnemyt4number);
            resultInfantry();
        }
        start();

 });

 // Counting troops //

function infCount(infantryPlayert1number,infantryPlayert2number,infantryPlayert3number,infantryPlayert4number,infantryEnemyt1number,infantryEnemyt2number,infantryEnemyt3number,infantryEnemyt4number) {
    let infantryPlayert1sum = (infantryPlayert1number*civ.infantry.t1.att+infantryPlayert1number*civ.infantry.t1.def+infantryPlayert1number*civ.infantry.t1.hp);
    let infantryPlayert2sum = (infantryPlayert2number*civ.infantry.t2.att+infantryPlayert2number*civ.infantry.t2.def+infantryPlayert2number*civ.infantry.t2.hp)
    let infantryPlayert3sum = (infantryPlayert3number*civ.infantry.t3.att+infantryPlayert3number*civ.infantry.t3.def+infantryPlayert3number*civ.infantry.t3.hp)
    let infantryPlayert4sum = (infantryPlayert4number*civ.infantry.t4.att+infantryPlayert4number*civ.infantry.t4.def+infantryPlayert4number*civ.infantry.t4.hp)

    let infantryEnemyt1sum = (infantryEnemyt1number*civ2.infantry.t1.att+infantryEnemyt1number*civ2.infantry.t1.def+infantryEnemyt1number*civ2.infantry.t1.hp);
    let infantryEnemyt2sum = (infantryEnemyt2number*civ2.infantry.t2.att+infantryEnemyt2number*civ2.infantry.t2.def+infantryEnemyt2number*civ2.infantry.t2.hp)
    let infantryEnemyt3sum = (infantryEnemyt3number*civ2.infantry.t3.att+infantryEnemyt3number*civ2.infantry.t3.def+infantryEnemyt3number*civ2.infantry.t3.hp)  
    let infantryEnemyt4sum = (infantryEnemyt4number*civ2.infantry.t4.att+infantryEnemyt4number*civ2.infantry.t4.def+infantryEnemyt4number*civ2.infantry.t4.hp)  


    infantryPlayer = (infantryPlayert1sum + infantryPlayert2sum + infantryPlayert3sum + infantryPlayert4sum);
    infantryEnemy = (infantryEnemyt1sum + infantryEnemyt2sum + infantryEnemyt3sum + infantryEnemyt4sum);   
}

function cavCount(cavalryPlayert1number,cavalryPlayert2number,cavalryPlayert3number,cavalryPlayert4number,cavalryEnemyt1number,cavalryEnemyt2number,cavalryEnemyt3number,cavalryEnemyt4number) {

    let cavalryPlayert1sum = (cavalryPlayert1number*civ.cavalry.t1.att+cavalryPlayert1number*civ.cavalry.t1.def+cavalryPlayert1number*civ.cavalry.t1.hp);
    let cavalryPlayert2sum = (cavalryPlayert2number*civ.cavalry.t2.att+cavalryPlayert2number*civ.cavalry.t2.def+cavalryPlayert2number*civ.cavalry.t2.hp)
    let cavalryPlayert3sum = (cavalryPlayert3number*civ.cavalry.t3.att+cavalryPlayert3number*civ.cavalry.t3.def+cavalryPlayert3number*civ.cavalry.t3.hp)
    let cavalryPlayert4sum = (cavalryPlayert4number*civ.cavalry.t4.att+cavalryPlayert4number*civ.cavalry.t4.def+cavalryPlayert4number*civ.cavalry.t4.hp)

    let cavalryEnemyt1sum = (cavalryEnemyt1number*civ2.cavalry.t1.att+cavalryEnemyt1number*civ2.cavalry.t1.def+cavalryEnemyt1number*civ2.cavalry.t1.hp);
    let cavalryEnemyt2sum = (cavalryEnemyt2number*civ2.cavalry.t2.att+cavalryEnemyt2number*civ2.cavalry.t2.def+cavalryEnemyt2number*civ2.cavalry.t2.hp)
    let cavalryEnemyt3sum = (cavalryEnemyt3number*civ2.cavalry.t3.att+cavalryEnemyt3number*civ2.cavalry.t3.def+cavalryEnemyt3number*civ2.cavalry.t3.hp)
    let cavalryEnemyt4sum = (cavalryEnemyt4number*civ2.cavalry.t4.att+cavalryEnemyt4number*civ2.cavalry.t4.def+cavalryEnemyt4number*civ2.cavalry.t4.hp)

    cavalryPlayer = (cavalryPlayert1sum + cavalryPlayert2sum + cavalryPlayert3sum + cavalryPlayert4sum);
    cavalryEnemy = (cavalryEnemyt1sum + cavalryEnemyt2sum + cavalryEnemyt3sum + cavalryEnemyt4sum);
}

function archCount(archersPlayert1number,archersPlayert2number,archersPlayert3number,archersPlayert4number,archersEnemyt1number,archersEnemyt2number,archersEnemyt3number,archersEnemyt4number) {

    let archersPlayert1sum = (archersPlayert1number*civ.archers.t1.att+archersPlayert1number*civ.archers.t1.def+archersPlayert1number*civ.archers.t1.hp);
    let archersPlayert2sum = (archersPlayert2number*civ.archers.t2.att+archersPlayert2number*civ.archers.t2.def+archersPlayert2number*civ.archers.t2.hp)
    let archersPlayert3sum = (archersPlayert3number*civ.archers.t3.att+archersPlayert3number*civ.archers.t3.def+archersPlayert3number*civ.archers.t3.hp)
    let archersPlayert4sum = (archersPlayert4number*civ.archers.t4.att+archersPlayert4number*civ.archers.t4.def+archersPlayert4number*civ.archers.t4.hp)

    let archersEnemyt1sum = (archersEnemyt1number*civ2.archers.t1.att+archersEnemyt1number*civ2.archers.t1.def+archersEnemyt1number*civ2.archers.t1.hp);
    let archersEnemyt2sum = (archersEnemyt2number*civ2.archers.t2.att+archersEnemyt2number*civ2.archers.t2.def+archersEnemyt2number*civ2.archers.t2.hp)
    let archersEnemyt3sum = (archersEnemyt3number*civ2.archers.t3.att+archersEnemyt3number*civ2.archers.t3.def+archersEnemyt3number*civ2.archers.t3.hp)
    let archersEnemyt4sum = (archersEnemyt4number*civ2.archers.t4.att+archersEnemyt4number*civ2.archers.t4.def+archersEnemyt4number*civ2.archers.t4.hp)

    archersPlayer = (archersPlayert1sum + archersPlayert2sum + archersPlayert3sum + archersPlayert4sum);
    archersEnemy = (archersEnemyt1sum + archersEnemyt2sum + archersEnemyt3sum + archersEnemyt4sum);
}

function siegeCount(siegePlayert1number,siegePlayert2number,siegePlayert3number,siegePlayert4number,siegeEnemyt1number,siegeEnemyt2number,siegeEnemyt3number,siegeEnemyt4number) {

    let siegePlayert1sum = (siegePlayert1number*civ.sieges.t1.att+siegePlayert1number*civ.sieges.t1.def+siegePlayert1number*civ.sieges.t1.hp);
    let siegePlayert2sum = (siegePlayert2number*civ.sieges.t2.att+siegePlayert2number*civ.sieges.t2.def+siegePlayert2number*civ.sieges.t2.hp)
    let siegePlayert3sum = (siegePlayert3number*civ.sieges.t3.att+siegePlayert3number*civ.sieges.t3.def+siegePlayert3number*civ.sieges.t3.hp)
    let siegePlayert4sum = (siegePlayert4number*civ.sieges.t4.att+siegePlayert4number*civ.sieges.t4.def+siegePlayert4number*civ.sieges.t4.hp)

    let siegeEnemy1sum = (siegeEnemyt1number*civ2.sieges.t1.att+siegeEnemyt1number*civ2.sieges.t1.def+siegeEnemyt1number*civ2.sieges.t1.hp);
    let siegeEnemy2sum = (siegeEnemyt2number*civ2.sieges.t2.att+siegeEnemyt2number*civ2.sieges.t2.def+siegeEnemyt2number*civ2.sieges.t2.hp)
    let siegeEnemy3sum = (siegeEnemyt3number*civ2.sieges.t3.att+siegeEnemyt3number*civ2.sieges.t3.def+siegeEnemyt3number*civ2.sieges.t3.hp)
    let siegeEnemy4sum = (siegeEnemyt4number*civ2.sieges.t4.att+siegeEnemyt4number*civ2.sieges.t4.def+siegeEnemyt4number*civ2.sieges.t4.hp)

    siegePlayer = (siegePlayert1sum + siegePlayert2sum + siegePlayert3sum + siegePlayert4sum);
    siegeEnemy = (siegeEnemy1sum + siegeEnemy2sum + siegeEnemy3sum + siegeEnemy4sum);
}

//Final Counting//

function resultInfantry(){
    let Player = (infantryPlayer+cavalryPlayer+archersPlayer+siegePlayer);
    let Enemy = (infantryEnemy+cavalryEnemy+archersEnemy+siegeEnemy)
    let Result = Player - Enemy
    let troopMatch = parseInt(document.getElementById("playerTroopCapacity").value);
    if(totalTroopsNumber > troopMatch){
        var div = document.getElementById("battleResultEnd");
            div.innerHTML += "Too many troops vs commander capacity"
    }else{
        if(Result>0){
            var div = document.getElementById("battleResultEnd");
            div.innerHTML += "Victory"
            console.log("Zwycięstwo")
            
        }else{
            console.log("Porażka")
            var div = document.getElementById("battleResultEnd");
            div.innerHTML += "Lost"
        }
        console.log(Result)
    }

    
}

// TODO //

// Pobieranie wprowadzonego troop capacity i zliczanie czy nie dał user zbyt dużo
// refaktoryzacja zliczania mocy z poziomów
// Dodać buff od itemków
// Dodać grafikę win/lost
// % zabitych % ciężko rannych % lekko rannych
// dodać badania ??
// Wyrównać Player z Enemy

// DONE //
// DONE - Dodać buff cywilizacyjny
// DONE - Dodać T4
// DONE - Zliczanie wszystkich statystyk w jednym momencie;
// DONE - dodać dowódców i statystyki