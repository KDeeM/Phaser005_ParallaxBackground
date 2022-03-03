import { Scene1 } from "./game/scene1.js";

var Game, GameConfig;

function init(){
  GameConfig = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTRE_BOTH
    },
    scene: [ Scene1 ]
  }
  Game = new Phaser.Game( GameConfig );
}

window.addEventListener("load", init);