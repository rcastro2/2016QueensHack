// Slide 5 - Assets
game.load.image('bk','assets/bk2.png');
game.load.image('hero','assets/dude.png');
game.load.image('diamond','assets/diamond.png');
game.load.image('alien','assets/alien1.png');
game.load.image('gameover','assets/gameover.png');

// Slide 7 - Game Objects
bk = new Background('bk');

// Slide 8 - Game Objects Functions
bk.scroll(-2)

// Slide 9 - Sprite Objects
hero =  new Sprite('hero');
hero.resizeBy(25);

// Slide 10 - Moving Sprites
if (keys.right.isDown)
{
	hero.vx = 100;
}
else if (keys.left.isDown)
{
	hero.vx = -100;
}

if (keys.up.isDown)
{
	hero.vy = -100;
}
else if (keys.down.isDown)
{
	hero.vy = 100;
}

// Slide 11 - Practice
diamond = new Sprite('diamond',world.width,world.randomY);
diamond.vx = -150;

// Slide 12 - Text Object & Score
score = 0;
scoreText = new Text(10,10);
scoreText.text = "Score: " + score;

// Slide 13 - Collision
if(hero.collidedWith(diamond)){
	diamond.moveTo(world.width, world.randomY);
	score += 100;
	scoreText.text = "Score: " + score;
}

// Slide 14 - 16 - Practice
alien = new Sprite('alien',world.width,world.randomY);
alien.resizeBy(25);
alien.vx = -200;

health = 100
healthText = new Text(200,10);
healthText.text = "Health: " + health;

if(hero.collidedWith(alien)){
  alien.moveTo(world.width, world.randomY);
  health -= 10;
  healthText.text = "Health: " + health;
}

// Slide 17 - OffScreen
if(diamond.isOffScreen('left')){
	diamond.moveTo(world.width,world.randomY);
}

if(alien.isOffScreen('left')){
	alien.moveTo(world.width,world.randomY);
}

// Slide 18 - Gameover
gameover = new Sprite('gameover',200,250);
gameover.visible = false;

if(health <= 0){
  gameover.visible = true;
}

// Slide 19 - 20 - Sounds
game.load.audio('zip','assets/hitCoin_sound.ogg');
game.load.audio('die','assets/hit.wav');
game.load.audio('music','assets/background_music.ogg');

zip = new Sound('zip');
die = new Sound('die');
music = new Sound('music');
music.play();

zip.play();

die.play();
