export class ParrallaxBackground extends Phaser.GameObjects.TileSprite{
  constructor( scene, x, y, width, height, textureKey, frame = null, speed = { x : 10, y: 0 }){
    super( scene, x, y, width, height, textureKey, frame );
    this.generalSettings( scene );
    this.scrollSpeed = speed;
  }

  generalSettings( scene ){
    this.setOrigin( 0, 0 );
    scene.add.existing( this );
  }

  scroll( ){
    this.setTilePosition( this.tilePositionX + this.scrollSpeed.x, this.tilePositionY + this.scrollSpeed.y );
  }
}