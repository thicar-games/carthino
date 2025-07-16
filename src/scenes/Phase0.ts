import { Scene } from "phaser";

export class Phase0 extends Scene {
  maria: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody | undefined;

  constructor() {
    super({ key: "Phase0" });
  }

  preload() {
    this.load.spritesheet("maria", "assets/maria.png", {
      frameWidth: 64,
      frameHeight: 64,
    });
  }

  create() {
    this.maria = this.physics.add.sprite(400, 225, "maria");

    this.anims.create({
      key: "andar-direita",
      frames: this.anims.generateFrameNumbers("maria", { start: 87, end: 95 }),
      frameRate: 10,
      repeat: -1,
    });

    this.maria.play("andar-direita");
    this.maria.setVelocityX(100);
  }
}