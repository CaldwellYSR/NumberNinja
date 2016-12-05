import Phaser from 'phaser'

export default class extends Phaser.Sprite {

    constructor ({ game, x, y, asset, key, launcher }) {
        super(game, x, y, asset, key)

        // Setup defaults
        this.game = game
        this.value = key + 1;
        this.exists = false;
        this.launcher = launcher;
        this.anchor.setTo(0.5)
        this.isShot = false;
        this.originalX = x;
        this.originalY = y;

        // Handle Clicks
        this.inputEnabled = true;
        this.events.onInputDown.add(this.explode, this);
    }

    update () {
        if (!this.isShot && this.exists && this.y < this.game.world.height) {
            this.isShot = true;
        }
        if (this.isShot && this.y > this.game.world.height) {
            this.die();
        }
    }

    fire (velocity) {
        this.exists = true;
        this.body.velocity.y = velocity.y;
        this.body.velocity.x = velocity.x;
    }

    explode () {
        // Kill Number
        this.die();
    }

    // Reset position and generate new values
    die() {
        this.reset(this.originalX, this.originalY);
        let random = this.launcher.getRandomInt(0, 99);
        this.frame = random;
        this.value = random + 1;
        this.isShot = false;
        this.kill();
    }

}
