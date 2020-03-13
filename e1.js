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
        this.load.image('b_feed','assets/b_feed.png');
        this.load.image('b_gift','assets/b_gift.png');
        this.load.image('b_pet','assets/b_pet.png');
        this.load.image('happy','assets/happy.png');
    }

    //load assets
    create(){
        let pos = 0;
        let frame = 2;

        let meter = this.add.image(pos,100,'happy');           //draw meter
        this.image = this.add.image(375,550,'bg');              //draw bg

        let pet = this.add.sprite(375,750,'char');          //draw pet (sad)
        pet.setFrame(frame);

        //feed button
        const feed_press = this.add.image(187,1000,'b_feed')
                           .setInteractive()
                           .on('pointerdown', () => {       //change pos of meter / swtich frames
                                pos+=10;
                                meter.destroy();
                                meter = this.add.image(pos,100,'happy').setDepth(-1);
                                pet.setFrame(this.frameChange(pos));
                            });

        this.image = this.add.image(375,1000,'b_gift');         //draw gift button

        //pet button
        const pet_press = this.add.image(562,1000,'b_pet')
                           .setInteractive()
                           .on('pointerdown', () => {
                                pos-=10;
                                meter.destroy();
                                meter = this.add.image(pos,100,'happy').setDepth(-1);
                                pet.setFrame(this.frameChange(pos));
                            });
        
        //frame = this.updateHappy(pos);
    }

    //change frame of pet
    frameChange(pos){
        //emotion thresholds
        let mid = 175;
        let happy = 350

        //return frame
        if(pos <= mid)
            return 2;
        else if(pos <= happy)
            return 1;
        else
            return 0;
    }
}