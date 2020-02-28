class e1 extends Phaser.Scene {
    constructor() {
        super({key: "e1"});
    }
    preload(){
        this.load.image('bg','assets/bg.png');
        this.load.image('char_h','assets/char_h.png');
        this.load.image('char_m','assets/char_m.png');
        this.load.image('char_s','assets/char_s.png');
        this.load.image('b_feed','assets/b_feed.png');
        this.load.image('b_gift','assets/b_gift.png');
        this.load.image('b_pet','assets/b_pet.png');
    }
    create(){
        this.image = this.add.image(375,550,'bg');
        this.image = this.add.image(375,750,'char_m');
        this.image = this.add.image(187,1000,'b_feed');
        this.image = this.add.image(375,1000,'b_gift');
        this.image = this.add.image(562,1000,'b_pet');
    }
}