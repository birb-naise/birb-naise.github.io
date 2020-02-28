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
        this.load.image('happy','assets/happy.png');
    }
    create(){
        let pos = 0;

        this.image = this.add.image(pos,100,'happy');
        this.image = this.add.image(375,550,'bg');
        this.image = this.add.image(375,750,'char_s');
        const feed_press = this.add.image(187,1000,'b_feed')
                           .setInteractive()
                           .on('pointerdown', () => { this.updateHappy(pos+=10); });
        this.image = this.add.image(375,1000,'b_gift');
        const pet_press = this.add.image(562,1000,'b_pet')
                           .setInteractive()
                           .on('pointerdown', () => { this.updateHappy(pos-=10); });
        this.updateHappy(pos)
    }

    updateHappy(pos) {
        this.image = this.add.image(pos,100,'happy');
        this.image = this.add.image(375,550,'bg');
        if(pos >= 175 && pos < 350) 
            this.image = this.add.image(375,750,'char_m');
        else if(pos >= 350)
            this.image = this.add.image(375,750,'char_h');
        else
            this.image = this.add.image(375,750,'char_s');
        const feed_press = this.add.image(187,1000,'b_feed')
                           .setInteractive()
                           .on('pointerdown', () => { this.updateHappy(pos+=10); });
        this.image = this.add.image(375,1000,'b_gift');
        const pet_press = this.add.image(562,1000,'b_pet')
                           .setInteractive()
                           .on('pointerdown', () => { this.updateHappy(pos-=10); });
}
}