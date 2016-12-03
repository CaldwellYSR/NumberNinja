/* globals __DEV__ */
import Phaser from 'phaser'
import NumberLauncher from '../controllers/numberLauncher'
import {setResponsiveWidth} from '../utils'

export default class extends Phaser.State {
    init() {}
    preload () {
    }

    create() {
        this.game.add.image(0, 0, 'background');
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity.y = 800;
        this.numberLauncher = new NumberLauncher({
            game: this.game
        });
    }

    update() {
        this.numberLauncher.update();
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
