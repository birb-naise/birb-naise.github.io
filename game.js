var config = {
    type:Phaser.AUTO,
    width:750,
    height:1100,
    physics: {
        default: 'arcade',
        arcade: {
            gavity: {y : 200}
        }
    },
    scene: [e1]
};

var game = new Phaser.Game(config);