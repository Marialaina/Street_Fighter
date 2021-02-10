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
    let damage = 0;
        if (this.strength > player.defense) {
         damage = this.strength - player.defense;
    }
    player.health -= damage;
        if (player.health < 0) {
         player.health = 0;
    }
        console.log(`${this.name} damage to ${player.name} who is left with ${player.health} `);
    }

}

let player1 = new Fighter ('mari', 10, Math.floor(Math.random() * (10 -5) + 5) , Math.floor(Math.random() * (10 -5) + 5) );
let player2 = new Fighter ('charles', 10, Math.floor(Math.random() * (10 -5) + 5), Math.floor(Math.random() * (10 -5) + 5) );

player1.attack(player2);
player2.attack(player1);

if (
    player1.strength <= player2.defense &&
    player2.strength <= player1.defense
  ) {
    console.log("IT'S A TIE");
  } else {
    while (player1.health > 0 && player2.health > 0) {
      player1.attack(player2);
      if (player2.health > 0) {
        player2.attack(player1);
      }
    }
    if (player1.health > 0) {
      console.log("player1 WINS!");
    } else if (player2.health > 0) {
      console.log("player2 WINS!");
    }
  }







