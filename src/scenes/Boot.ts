import { Scene } from 'phaser';

export class Boot extends Scene {
  constructor() {
    super({ key: 'Boot' });
  }

  preload() {
    this.load.image('logo', 'assets/image.png');
  }

  create() {
    this.add.image(400, 225, 'logo').setInteractive();
    this.input.on('pointerdown', () => {
      this.scene.start('Preloader');
    }
    );
  }
}

