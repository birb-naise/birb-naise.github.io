class e1 extends Phaser.Scene {
    constructor() {
        super({key: "e1"});
    }

    //load images
    preload(){
        this.load.image('bg','assets/bg.png');
        this.load.spritesheet('char','assets/pet_sheet.png',378, 464);
        //this.load.image('char_m','assets/char_m.png');
        //this.load.image('char_s','assets/char_s.png');
        this.load.image('b_feed','assets/b_feed.png');
        this.load.image('b_gift','assets/b_gift.png');
        this.load.image('b_pet','assets/b_pet.png');
        this.load.image('happy','assets/happy.png');
    }

    //load assets
    create(){
        let pos = 0;

        this.image = this.add.image(pos,100,'happy');           //draw meter
        this.image = this.add.image(375,550,'bg');              //draw bg

        let pet = this.add.sprite(375,750,'char');          //draw pet (sad)
        pet.setFrame(2);

        //feed button
        const feed_press = this.add.image(187,1000,'b_feed')
                           .setInteractive()
                           .on('pointerdown', () => { this.updateHappy(pos+=10); });

        this.image = this.add.image(375,1000,'b_gift');         //draw gift button

        //pet button
        const pet_press = this.add.image(562,1000,'b_pet')
                           .setInteractive()
                           .on('pointerdown', () => { this.updateHappy(pos-=10); });
        this.updateHappy(pos)
    }

    //modify pos of meter
    updateHappy(pos) {
        //this.image = this.add.image(pos,100,'happy');
        //this.image = this.add.image(375,550,'bg');
        if(pos >= 175 && pos < 350) 
            pet.setFrame(1);
        else if(pos >= 350)
            pet.setFrame(0);
        else
            pet.setFrame(2);

        /*
        const feed_press = this.add.image(187,1000,'b_feed')
                           .setInteractive()
                           .on('pointerdown', () => { this.updateHappy(pos+=10); });
        this.image = this.add.image(375,1000,'b_gift');
        const pet_press = this.add.image(562,1000,'b_pet')
                           .setInteractive()
                           .on('pointerdown', () => { this.updateHappy(pos-=10); });
        */
    }
}