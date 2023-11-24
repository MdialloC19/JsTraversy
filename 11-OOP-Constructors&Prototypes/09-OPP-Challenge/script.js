function Player(name) {
    this.name = name;
    this.lvl = 1;
    this.points = 0;
}

Player.prototype.gainXp = function(number) {
    if (number < 1 || number > 10) {
        console.error('Please use a number between 1 and 10');
        return;
    }
    this.points += number;
    if (this.points >= 10) {
        this.lvl++;
        this.points -= 10;
    }
};

Player.prototype.describe = function() {
    console.log(`Name: ${this.name}, level: ${this.lvl}, points: ${this.points}`);
};

const player = new Player('Bob');
const player2 = new Player('Moussa');

player.gainXp(5);
player2.gainXp(10);
player2.gainXp(5);

player.describe();
player2.describe();
