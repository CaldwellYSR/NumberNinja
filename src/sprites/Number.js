import Phaser from 'phaser'

export default class extends Phaser.Sprite {

    constructor ({ game, x, y, asset, key }) {
        super(game, x, y, asset, key)
        this.game = game
        this.value = key + 1;
        this.exists = false;
        this.inputEnabled = true;
        this.events.onInputDown.add(this.explode, this);
        this.anchor.setTo(0.5)
    }

    update () {
        this.angle += 1
    }

    explode () {
        this.exists = false;
    }

    fire (velocity) {

        this.exists = true;
        this.body.velocity.y = velocity.y;
        this.body.velocity.x = velocity.x;
    }

}
