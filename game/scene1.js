import { ParrallaxBackground } from "./components.js";

export class Scene1 extends Phaser.Scene{
  constructor(){
    super( "Scene1" );
  }

  preload(){
    this.load.image("bg1", "game/assets/background/opt/j1.png");
    this.load.image("bg2", "game/assets/background/opt/j2.png");
    this.load.image("bg3", "game/assets/background/opt/j3.png");
  }
  
  create(){
    this.bg3 = new ParrallaxBackground( this, 0, 0, 0, 1080, "bg3", undefined, {x: 3, y: 0} );
    this.bg2 = new ParrallaxBackground( this, 0, 0, 0, 1080, "bg2", undefined, {x: 4, y: 0} );
    this.bg1 = new ParrallaxBackground( this, 0, 0, 0, 1080, "bg1", undefined, {x: 5, y: 0} );
  }

  update(){
    this.bg1.scroll();
    this.bg2.scroll();
    this.bg3.scroll();
  }
}