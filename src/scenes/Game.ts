import Phaser from "phaser";

export default class Demo extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  preload() {
    this.load.image("ball", "assets/default-ball.png");
  }

  create() {
    const ball = this.physics.add.image(100, 450, "ball");
    ball.setBounce(1);
    ball.setCollideWorldBounds(true);
    ball.body.setGravityY(1000);
  }
}
