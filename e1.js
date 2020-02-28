class e1 extends Phaser.Scene {
    constructor() {
        super({key: "e1"});
    }
    preload(){
        this.load.image('mole','assets/bg.png');
    }
    create(){
        this.image = this.add.image(0,0,'bg');
    }
}