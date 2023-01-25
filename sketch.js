var bgImage
var player1Image,player2Image,player3Image
var alienImage
var gamestate
var wave_end

function preload(){
  bgImage = loadImage('assets/bgImage.png')
  player1Image = loadImage('assets/ShipStage1.png')
  player2Image = loadImage('assets/ShipStage2.png')
  player3Image = loadImage('assets/ShipStage3.png')
  alienImage = loadImage('assets/Alien.png')
  var wave_end = loadImage('assets/WAVE COMPLETED.png')
}

function setup() {
  canvas = createCanvas(500,1000)
  game = new Game()
  game.start()
}

function draw() {
  background(bgImage)
}