import Phaser from 'phaser'
import Number from '../sprites/Number'

export default class {

    constructor({ game }) {
        this.game = game;
        this.numberSpeed = -1000;
        this.nextFire = 0;
        this.fireRate = 1000;
        this.numbers = this.game.add.group(undefined, 'Numbers', false, true, Phaser.Physics.ARCADE);
        for (let i = 0; i < 64; i++) {
            let number = new Number({
                game: this.game,
                x: this.getRandomInt(0, this.game.world.width),
                y: this.game.world.height + 150,
                asset: 'numbers',
                key: this.getRandomInt(0, 99)
            });
            this.game.physics.arcade.enable(number);
            this.numbers.add(number); 
        }
    }

    update() {
        if (this.game.time.time < this.nextFire) { return }

        let number = this.numbers.getFirstExists(false);
        number.fire({x: this.normalize(number, this.game.world), y: this.numberSpeed})

        this.nextFire = this.game.time.time + this.fireRate;
    }

    normalize(number, world) {
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
