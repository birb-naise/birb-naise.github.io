class e1 extends Phaser.Scene {
    constructor() {
        super({key: "e1"});
    }

    //load images   464, 378
    preload(){
        this.load.image('bg','assets/bg.png');
        this.load.spritesheet('char','assets/pet_sheet.png',{
            frameWidth: 464, frameHeight: 378
        });
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
        let frame = 2;

        this.image = this.add.image(pos,100,'happy');           //draw meter
        this.image = this.add.image(375,550,'bg');              //draw bg

        let pet = this.add.sprite(375,750,'char');          //draw pet (sad)

        //feed button
        const feed_press = this.add.image(187,1000,'b_feed')
                           .setInteractive()
                           .on('pointerdown', () => { this.updateHappy(pos+=10); });

        this.image = this.add.image(375,1000,'b_gift');         //draw gift button

        //pet button
        const pet_press = this.add.image(562,1000,'b_pet')
                           .setInteractive()
                           .on('pointerdown', () => { this.updateHappy(pos-=10); });
        
        frame = this.updateHappy(pos);
        pet.setFrame(frame);
        console.log("pos = " + pos + ", frame = " + frame);
    }

    //modify pos of meter
    updateHappy(pos) {
        //this.image = this.add.image(pos,100,'happy');
        //this.image = this.add.image(375,550,'bg');d)
        console.log("pos = " + pos);
        if(pos >= 175 && pos < 350) 
            return 1;
        else if(pos >= 350)
            return 0;
        else
            return 2;

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