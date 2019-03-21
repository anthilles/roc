class power {
    constructor(rarity,powerBased,skill1,skill2,skill3,skill4,skill5){
        this.rarity = rarity;
        this.powerBased = powerBased;
        this.skill1 = skill1;
        this.skill2 = skill2;
        this.skill3 = skill3;
        this.skill4 = skill4;
        this.skill5 = skill5;
    }
}

const gold800 = new power(4,800,2400,2000,2000,3000,0);
const gold950 = new power(4,950,2800,3000,3000,2800,0);
const gold1000 = new power(4,1000,3000,2800,2800,3400,0);
const gold1100 = new power(4,1100,3200,3000,3000,3600,2500);
const gold1200 = new power(4,1200,3400,3200,3200,3600,0);
const purple600 = new power(3,600,1800,1600,1600,2000,2500);
const purple500 = new power(3,500,0,0,0,0,0);

// 51-60
// 600
// 41-50
// 500
// 31-40
// 300
// 21-30
// 200
// 11-20
// 150
// 1-10
// 100

// talent +300 [wszyscy]

// skill gold powyżej 30 - 3400
// skill gold poniżej 10 - 2000
// skill fiolet poniżej 10 - 1600 
// skill blue +900
// skill green ????

//skill power zależnie od ilości
// GOLD
// 9 - 20800
// 6 - 17600
// 3 - 10200