var config = {
    type:Phaser.AUTO,
    width:800,
    height:600,
    physics: {
        default: 'arcade',
        arcade: {
            gavity: {y : 200}
        }
    },
    scene: [e1]
};

var game = new Phaser.Game(config);