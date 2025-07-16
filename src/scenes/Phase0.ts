import { Scene } from "phaser";

export class Phase0 extends Scene {
  maria: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody | undefined;

  constructor() {
    super({ key: "Phase0" });
  }
}