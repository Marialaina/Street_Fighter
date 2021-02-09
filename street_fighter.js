// const attack = "";
// const attack2 = "";


class Fighter {
    constructor(name, health, strength, defense) {
        this.name = name
        this.health = health
        this.strength = strength
        this.defense = defense
        
    }
    
    attack(player) {
        let otherFighter = player
        otherFighter.health = this.strength - otherFighter.defense;
    //    if(player1){
        // this.health = this.strength - this.defense;
        console.log(`${this.name} damage to ${player.name} who is left with ${player.health} `);
    //    } else if (player2) {
    //     this.health = this.strength - this.defense;
    //     console.log(`${this.name} damage to ${this.player1} who is left with ${this.health} `);
    //    }
    }

}
let rand = Math.random() * (10 -5) + 5
let player1 = new Fighter ('mari', 10, rand, rand);
let player2 = new Fighter ('charles', 10, rand, rand);
console.log(player1)
console.log(player2);
// console.log(player2.defense)
player1.attack(player2);
// player2.attack();






