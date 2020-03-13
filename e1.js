class e1 extends Phaser.Scene {
    constructor() {
        super({key: "e1"});
    }

    //load images   464, 378
    preload(){
        this.load.image('bg','assets/bg.png');
        this.load.image('shop','assets/shop.png');

        //pet
        this.load.spritesheet('char','assets/pet_sheet.png',{
            frameWidth: 464, frameHeight: 378
        });

        //work objects
        this.load.spritesheet('a_obj','assets/a_obj.png',{
            frameWidth: 261, frameHeight: 364
        });
        this.load.spritesheet('b_obj','assets/b_obj.png',{
            frameWidth: 261, frameHeight: 364
        });
        this.load.spritesheet('c_obj','assets/c_obj.png',{
            frameWidth: 261, frameHeight: 364
        });

        //work results
        this.load.image('r_good','assets/r_good.png');
        this.load.image('r_ok','assets/r_ok.png');
        this.load.image('r_bad','assets/r_bad.png');

        //buttons
        this.load.image('b_feed','assets/b_feed.png');
        this.load.image('b_shop','assets/b_shop.png');
        this.load.image('b_work','assets/b_work.png');

        //meter
        this.load.image('happy','assets/happy.png');
    }

    //load assets
    create(){
        let pos = 0;
        let frame = 2;
        let coins = 0;
        console.log(coins);

        let meter = this.add.image(pos,100,'happy');           //draw meter
        this.image = this.add.image(375,550,'bg');             //draw bg

        let pet = this.add.sprite(375,750,'char');          //draw pet (sad)
        pet.setFrame(frame);

        //feed
        const FEED_PRESS = this.add.image(187,1000,'b_feed')
                           .setInteractive()
                           .on('pointerdown', () => {       //change pos of meter / swtich frames
                                pos += 10;
                                meter.destroy();
                                meter = this.add.image(pos,100,'happy').setDepth(-1);
                                pet.setFrame(this.frameChange(pos));
                                console.log("new coin amount: " + coins);
                            });

        //shop
        const SHOP_PRESS = this.add.image(374,1000,'b_shop')
                           .setInteractive()
                           .on('pointerdown', () => {
                                const SHOP = this.add.image(374,500,'shop')
                                           .setInteractive()
                                           .on('pointerdown', () => {
                                                SHOP.destroy();
                                           });
                            });
        //work
        const WORK_PRESS = this.add.image(562,1000,'b_work')
                           .setInteractive()
                           .on('pointerdown', () => {
                                //coins += this.work();
                                console.log(this.work());
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

    work(){
        
        //points added
        let ptsAdded = 0;
        let result;

        let cardChoice;

        //card positions
        const POS1 = 100;
        const POS2 = 374;
        const POS3 = 650;
        let posArray = [POS1, POS2, POS3];

        //card choices
        let a_frame = Math.floor(Math.random() * 4);
        let b_frame = Math.floor(Math.random() * 4);
        let c_frame = Math.floor(Math.random() * 4);

        //shuffle cards
        posArray = this.shuffle(posArray);

        //pick cards
        let a_card = this.add.sprite(posArray[0], 500, 'a_obj')
                    .setFrame(a_frame)
                    .setInteractive()
                    .on('pointerdown', () => {
                        ptsAdded = 2;
                        result = this.image = this.add.image(200,325,'r_good');
                        this.destroyCards(a_card, b_card, c_card, result);
                        return ptsAdded;
                    });
        let b_card = this.add.sprite(posArray[1], 500, 'b_obj')
                    .setFrame(b_frame)
                    .setInteractive()
                    .on('pointerdown', () => {
                        ptsAdded = 1;
                        result = this.image = this.add.image(200,325,'r_ok');
                        this.destroyCards(a_card, b_card, c_card, result);
                        console.log("returning " + ptsAdded);

                        return ptsAdded;
                    });
        let c_card = this.add.sprite(posArray[2], 500, 'c_obj')
                    .setFrame(c_frame)
                    .setInteractive()
                    .on('pointerdown', () => {
                        ptsAdded = -1;
                        result = this.image = this.add.image(200,325,'r_bad');
                        this.destroyCards(a_card, b_card, c_card, result);
                        console.log("returning " + ptsAdded);

                        return ptsAdded;
                    });
    }

    

    //when card is clicked
    destroyCards(cardA,cardB,cardC,result) {
        this.wait(3000);
        cardA.destroy();
        cardB.destroy();
        cardC.destroy();
        //result.destroy();
    }

    //shuffle array (adapted from https://bost.ocks.org/mike/shuffle/)
    shuffle(arr) {
        let counter = arr.length;
    
        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            let index = Math.floor(Math.random() * counter);
    
            // Decrease counter by 1
            counter--;
    
            // And swap the last element with it
            let temp = arr[counter];
            arr[counter] = arr[index];
            arr[index] = temp;
        }
    
        return arr;
    }

    //wait function
    wait(ms) {
        console.log("start wait");
        this.time.addEvent({
            delay: ms,
            callback: ()=>{
                //wait x ms
                console.log("waiting");
            },
            loop: false
        });
        console.log("end wait");
    }
}