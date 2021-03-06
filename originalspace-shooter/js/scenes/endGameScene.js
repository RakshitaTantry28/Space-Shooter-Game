class EndGameScene extends Phaser.Scene {
    constructor() {
        super('EndGame')
    }

    init(data) {
        this.score = data.totalScore;
    }

    preload() {
        this.load.image('end-game', 'assets/images/game-end.jpeg')
        this.load.image('play_again','assets/images/icons8.png')
    }

    create() {
        this.add.image(400, 300, 'end-game').setScale(0.7)
        this.add.text(180, 50, 'Your Score : ' + this.score, { fontSize: 48 })
        this.add.text(100, 535, 'Want to play again? ', { fontSize: 48 })
        this.startbtn = this.add.image(700, 560, 'play_again')
        this.startbtn.setInteractive();
        this.startbtn.on('pointerdown', this.PlayAgain, this)
        this.score = 0;
    }

    PlayAgain() {
        this.scene.start('Play');
    }
}