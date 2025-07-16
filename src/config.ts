import { Types } from "phaser";
import { Boot } from "./scenes/Boot";
import { Preloader } from "./scenes/Preloader";
import {Maps} from "./scenes/Maps";
import {Phase0} from "./scenes/Phase0";

const config: Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 450,
  parent: "game-container",
  scene: [Boot, Preloader, Phase0],
};

export default config;