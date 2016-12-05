import Phaser from 'phaser'
import Number from '../sprites/Number'

export default class {

    constructor({ game }) {
        this.game = game;
        
        // Set up default values
        this.numberSpeed = -500;
        this.nextFire = 0;
        this.fireRate = 2000;

        // Create 10 numbers to be shot.
        this.numbers = this.game.add.group(undefined, 'Numbers', false, true, Phaser.Physics.ARCADE);
        for (let i = 0; i < 10; i++) {
            let number = new Number({
                game: this.game,
                x: this.getRandomInt(0, this.game.world.width),
                y: this.game.world.height + 150,
                asset: 'numbers',
                key: this.getRandomInt(0, 99),
                launcher: this
            });
            this.game.physics.arcade.enable(number);
            this.numbers.add(number); 
        }
    }

    update() {
        // Shoot a number 
        if (this.game.time.time < this.nextFire) { return }
        let number = this.numbers.getFirstExists(false);
        number.fire({x: this.getXVelocity(number, this.game.world), y: this.numberSpeed})
        this.nextFire = this.game.time.time + this.fireRate;
    }

    getXVelocity(number, world) {
        if (number.x < world.centerX) {
            return this.getRandomInt(1, 150);
        } else {
            return this.getRandomInt(-150, -1);
        }
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}
