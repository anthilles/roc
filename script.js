levelsCommanderPlayer()

// DATA //

const Arabia = {
    name: "Arabia",    
    infantry: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:128,
            def:125,
            hp:125
        },
        t3: {
            att:163,
            def:158,
            hp:155
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
    cavalry: {
        t1: {
            att:(62*1.05).toFixed(2),
            def:120,
            hp:120   
        },
        t2: {
            att:128*1.05.toFixed(2),
            def:125,
            hp:125
        },
        t3: {
            att:163*1.05.toFixed(2),
            def:158,
            hp:155
        },
        t4: {
            att:(192*1.05).toFixed(2),
            def:192,
            hp:197
        }
    },
    archers: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:128
        },
        t3: {
            att:158,
            def:155,
            hp:163
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
    sieges: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:125
        },
        t3: {
            att:163,
            def:155,
            hp:155
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
}
const Britain = {
    name: "Britain",
    infantry: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:128,
            def:125,
            hp:125
        },
        t3: {
            att:163,
            def:158,
            hp:155
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
    cavalry: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:128,
            def:125,
            hp:125
        },
        t3: {
            att:163,
            def:158,
            hp:155
        },
        t4: {
            att:187,
            def:192,
            hp:192
        }
    },
    archers: {
        t1: {
            att:(62*1.05).toFixed(2),
            def:120,
            hp:120   
        },
        t2: {
            att:(125*1.05).toFixed(2),
            def:128,
            hp:128
        },
        t3: {
            att:(158*1.05).toFixed(2),
            def:155,
            hp:163
        },
        t4: {
            att:(202*1.05).toFixed(2),
            def:192,
            hp:187
        }
    },
    sieges: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:125
        },
        t3: {
            att:163,
            def:155,
            hp:155
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
}
const Byzantium = {
    name: "Byzantium",
    infantry: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:128,
            def:125,
            hp:125
        },
        t3: {
            att:163,
            def:158,
            hp:155
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
    cavalry: {
        t1: {
            att:62,
            def:120,
            hp:(120*1.05).toFixed(2)   
        },
        t2: {
            att:128,
            def:125,
            hp:(125*1.05).toFixed(2) 
        },
        t3: {
            att:163,
            def:158,
            hp:(155*1.05).toFixed(2) 
        },
        t4: {
            att:187,
            def:202,
            hp:(192*1.05).toFixed(2)
        }
    },
    archers: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:128
        },
        t3: {
            att:158,
            def:155,
            hp:163
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
    sieges: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:125
        },
        t3: {
            att:163,
            def:155,
            hp:155
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
}
const China = {
    name: "China",
    infantry: {
        t1: {
            att:62,
            def:(120*1.03).toFixed(2),
            hp:120   
        },
        t2: {
            att:128,
            def:(125*1.03).toFixed(2),
            hp:125
        },
        t3: {
            att:163,
            def:(158*1.03).toFixed(2),
            hp:155
        },
        t4: {
            att:197,
            def:(197*1.03).toFixed(2),
            hp:187
        }
    },
    cavalry: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:128,
            def:125,
            hp:125
        },
        t3: {
            att:163,
            def:158,
            hp:155
        },
        t4: {
            att:187,
            def:192,
            hp:192
        }
    },
    archers: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:128
        },
        t3: {
            att:158,
            def:155,
            hp:163
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
    sieges: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:125
        },
        t3: {
            att:163,
            def:155,
            hp:155
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
}
const France = {
    name: "France",
    infantry: {
        t1: {
            att:62,
            def:120,
            hp:(120*1.03).toFixed(2)   
        },
        t2: {
            att:128,
            def:125,
            hp:(125*1.03).toFixed(2)  
        },
        t3: {
            att:163,
            def:158,
            hp:(155*1.03).toFixed(2)  
        },
        t4: {
            att:192,
            def:192,
            hp:(197*1.03).toFixed(2)
        }
    },
    cavalry: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:128,
            def:125,
            hp:125
        },
        t3: {
            att:163,
            def:158,
            hp:155
        },
        t4: {
            att:187,
            def:192,
            hp:192
        }
    },
    archers: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:128
        },
        t3: {
            att:158,
            def:155,
            hp:163
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
    sieges: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:125
        },
        t3: {
            att:163,
            def:155,
            hp:155
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
}
const Germany = {
    name: "Germany",
    infantry: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:128,
            def:125,
            hp:125
        },
        t3: {
            att:163,
            def:158,
            hp:155
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
    cavalry: {
        t1: {
            att:(62*1.05).toFixed(2),
            def:120,
            hp:120   
        },
        t2: {
            att:(128*1.05).toFixed(2),
            def:125,
            hp:125
        },
        t3: {
            att:(163*1.05).toFixed(2),
            def:158,
            hp:155
        },
        t4: {
            att:(187*1.05).toFixed(2),
            def:192,
            hp:192
        }
    },
    archers: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:128
        },
        t3: {
            att:158,
            def:155,
            hp:163
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
    sieges: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:125
        },
        t3: {
            att:163,
            def:155,
            hp:155
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
}
const Japan = {
    name: "Japan",
    infantry: {
        t1: {
            att:(62*1.03).toFixed(2),
            def:120,
            hp:120   
        },
        t2: {
            att:(128*1.03).toFixed(2),
            def:125,
            hp:125
        },
        t3: {
            att:(163*1.03).toFixed(2),
            def:158,
            hp:155
        },
        t4: {
            att:(202*1.03).toFixed(2),
            def:192,
            hp:187
        }
    },
    cavalry: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:128,
            def:125,
            hp:125
        },
        t3: {
            att:163,
            def:158,
            hp:155
        },
        t4: {
            att:187,
            def:192,
            hp:192
        }
    },
    archers: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:128
        },
        t3: {
            att:158,
            def:155,
            hp:163
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
    sieges: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:125
        },
        t3: {
            att:163,
            def:155,
            hp:155
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
}
const Korea = {
    name: "Korea",
    infantry: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:128,
            def:125,
            hp:125
        },
        t3: {
            att:163,
            def:158,
            hp:155
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
    cavalry: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:128,
            def:125,
            hp:125
        },
        t3: {
            att:163,
            def:158,
            hp:155
        },
        t4: {
            att:187,
            def:192,
            hp:192
        }
    },
    archers: {
        t1: {
            att:62,
            def:(120*1.05).toFixed(2),
            hp:120   
        },
        t2: {
            att:125,
            def:(128*1.05).toFixed(2),
            hp:128
        },
        t3: {
            att:158,
            def:(155*1.05).toFixed(2),
            hp:163
        },
        t4: {
            att:192,
            def:(202*1.05).toFixed(2),
            hp:187
        }
    },
    sieges: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:125
        },
        t3: {
            att:163,
            def:155,
            hp:155
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
}
const Ottoman = {
    name: "Ottoman",
    infantry: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:128,
            def:125,
            hp:125
        },
        t3: {
            att:163,
            def:158,
            hp:155
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
    cavalry: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:128,
            def:125,
            hp:125
        },
        t3: {
            att:163,
            def:158,
            hp:155
        },
        t4: {
            att:187,
            def:192,
            hp:192
        }
    },
    archers: {
        t1: {
            att:62,
            def:120,
            hp:(120*1.05).toFixed(2)  
        },
        t2: {
            att:125,
            def:128,
            hp:(128*1.05).toFixed(2)  
        },
        t3: {
            att:158,
            def:155,
            hp:(163*1.05).toFixed(2)  
        },
        t4: {
            att:197,
            def:192,
            hp:(192*1.05).toFixed(2)
        }
    },
    sieges: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:125
        },
        t3: {
            att:163,
            def:155,
            hp:155
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
}
const Rome = {
    name: "Rome",
    infantry: {
        t1: {
            att:62,
            def:(120*1.05).toFixed(2),
            hp:120   
        },
        t2: {
            att:128,
            def:(125*1.05).toFixed(2),
            hp:125
        },
        t3: {
            att:163,
            def:(158*1.05).toFixed(2),
            hp:155
        },
        t4: {
            att:192,
            def:(202*1.05).toFixed(2),
            hp:187
        }
    },
    cavalry: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:128,
            def:125,
            hp:125
        },
        t3: {
            att:163,
            def:158,
            hp:155
        },
        t4: {
            att:187,
            def:192,
            hp:192
        }
    },
    archers: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:128
        },
        t3: {
            att:158,
            def:155,
            hp:163
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
    sieges: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:125
        },
        t3: {
            att:163,
            def:155,
            hp:155
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
}
const Spain = {
    name: "Spain",
    infantry: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:128,
            def:125,
            hp:125
        },
        t3: {
            att:163,
            def:158,
            hp:155
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
    cavalry: {
        t1: {
            att:62,
            def:(120*1.05).toFixed(2),
            hp:120   
        },
        t2: {
            att:128,
            def:(125*1.05).toFixed(2),
            hp:125
        },
        t3: {
            att:163,
            def:(158*1.05).toFixed(2),
            hp:155
        },
        t4: {
            att:192,
            def:(192*1.05).toFixed(2),
            hp:192
        }
    },
    archers: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:128
        },
        t3: {
            att:158,
            def:155,
            hp:163
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
    sieges: {
        t1: {
            att:62,
            def:120,
            hp:120   
        },
        t2: {
            att:125,
            def:128,
            hp:125
        },
        t3: {
            att:163,
            def:155,
            hp:155
        },
        t4: {
            att:192,
            def:192,
            hp:187
        }
    },
}

// Civ selection check - PLAYER //
var civ;
function displayCivPLayer(){
    var e = document.getElementById("civsPlayer");
    var value = e.options[e.selectedIndex].value; 

    switch(value) {
        case "Arabia":
            civ = Arabia;
            statsDisplayPlayer(civ)
            console.log("Arabia")
            break;
        case "Britain":
            civ = Britain;
            statsDisplayPlayer(civ);
            console.log("Britain")
            break;
        case "Byzantium":
            civ = Byzantium;
            statsDisplayPlayer(civ);
            console.log("Byzantium")
            break;
        case "China":
            civ = China;
            statsDisplayPlayer(civ);
            console.log("China")
            break;
        case "France":
            civ = France;
            statsDisplayPlayer(civ);
            console.log("France")
            break;
        case "Germany":
            civ = Germany;
            statsDisplayPlayer(civ);
            console.log("Germany")
            break;
        case "Japan":
            civ = Japan;
            statsDisplayPlayer(civ);
            console.log("Japan")
            break;
        case "Korea":
            civ = Korea;
            statsDisplayPlayer(civ);
            console.log("Korea")
            break;
        case "Ottoman":
            civ = Ottoman;
            statsDisplayPlayer(civ);
            console.log("Ottoman")
            break;
        case "Rome":
            civ = Rome;
            statsDisplayPlayer(civ);
            console.log("Rome")
            break;
        case "Spain":
            civ = Spain;
            statsDisplayPlayer(civ);
            console.log("Spain")
            break;
        default:
            console.log("brak")
      }
}

// Civ selection check - Enemy //
var civ2;
var infantryPlayer;
var infantryEnemy;
var cavalryEnemy;
var cavalryPlayer;
var siegePlayer;
var siegeEnemy;
var archersEnemy;
var archersPlayer;

function displayCivEnemy(){
    var e = document.getElementById("civsEnemy");
    var value = e.options[e.selectedIndex].value; 
    switch(value) {
        case "Arabia":
            civ2 = Arabia;
            statsDisplayEnemy(civ2);
            console.log("Arabia")
            break;
        case "Britain":
            civ2 = Britain;
            statsDisplayEnemy(civ2);
            console.log("Britain")
            break;
        case "Byzantium":
            civ2 = Byzantium;
            statsDisplayEnemy(civ2);
            console.log("Byzantium")
            break;
        case "China":
            civ2 = China;
            statsDisplayEnemy(civ2);
            console.log("China")
            break;
        case "France":
            civ2 = France;
            statsDisplayEnemy(civ2);
            console.log("France")
            break;
        case "Germany":
            civ2 = Germany;
            statsDisplayEnemy(civ2);
            console.log("Germany")
            break;
        case "Japan":
            civ2 = Japan;
            statsDisplayEnemy(civ2);
            console.log("Japan")
            break;
        case "Korea":
            civ2 = Korea;
            statsDisplayEnemy(civ2);
            console.log("Korea")
            break;
        case "Ottoman":
            civ2 = Ottoman;
            statsDisplayEnemy(civ2);
            console.log("Ottoman")
            break;
        case "Rome":
            civ2 = Rome;
            statsDisplayEnemy(civ2);
            console.log("Rome")
            break;
        case "Spain":
            civ2 = Spain;
            statsDisplayEnemy(civ2);
            console.log("Spain")
            break;
        default:
            console.log("brak")
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
}

function levelsCommanderEnemy(){
    for (var i = 1; i <= 60; i++) {
        g = document.createElement('option');
        g.text = i;
        g.value = i;
    
        element = document.getElementById("levelsCommanderEnemy");
        element.appendChild(g)
    }
}

// border stats Player 

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


// TODO //
// Dodać grafikę win/lost
// % zabitych % ciężko rannych % lekko rannych
// dodać dowódców i statystyki
// dodać badania ??

// DONE //
// DONE - Dodać buff cywilizacyjny
// DONE - Dodać T4