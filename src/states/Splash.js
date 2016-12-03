import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
    init () {}

    preload () {
        this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
        this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
        centerGameObjects([this.loaderBg, this.loaderBar])

        this.load.setPreloadSprite(this.loaderBar)

        this.load.image('background', '/assets/images/background.jpg');
        this.load.atlasJSONHash('numbers', 'assets/images/numbers.png', 'assets/images/numbers.json');
    }

    create () {
        this.state.start('Game')
    }

}
