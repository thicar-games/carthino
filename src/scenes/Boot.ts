import { Scene } from 'phaser';

export class Boot extends Scene {
  constructor() {
    super({ key: 'Boot' });
  }

  preload() {
    this.load.image('logo', 'assets/logo.png');
  }

  create() {
    this.add.image(400, 225, 'logo');
  }
}

