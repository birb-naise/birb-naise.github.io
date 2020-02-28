class e1 extends Phaser.Scene {
    constructor() {
        super({key: "e1"});
    }
    preload(){
        this.load.image('bg','assets/bg.png');
    }
    create(){
        this.image = this.add.image(325,550,'bg');
    }
}