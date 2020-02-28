var config = {
    type:Phase.AUTO,
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

var game = new Phase.game(config);