class e1 extends Phaser.Scene {
    constructor() {
        super({key: "e1"});
    }
    preload(){
        this.load.image('mole','assets/mole.png');
    }
    create(){
        this.image = this.add.image(400,300,'mole');
    }
}