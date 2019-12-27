const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

let ground;
const boxes = [];
let bird1;
let backgroundImg;
let boxImg;
let birdImg;
let world, engine;
let mConstraint;
let slingshot;


function preload() {
    backgroundImg = loadImage("assets/Background.jpg");
    boxImg = loadImage("assets/box.png");
    birdImg = loadImage("assets/bird1.png");
}

function setup() {
    const canvas = createCanvas(800, 600);
    engine = Matter.Engine.create();
    world = engine.world;

    ground = new Ground(width / 2, height - 70, width, 20);
    for (let i = 0; i < 4; i++) {
        boxes[i] = new Box(450, 300 - i * 75, 84, 84);
    } 
    bird1 = new Bird(150, 250, 25);    

    slingshot = new SlingShot(150, 400, bird1.body);
    
    const mouse = Mouse.create(canvas.elt);
    const options = {
        mouse: mouse,
    }
    mouse.pixelRatio = pixelDensity();
    mConstraint = MouseConstraint.create(engine, options);

    World.add(world, mConstraint);
}


function keyPressed() {
    if (key == ' ') {   // IF SPACE PRESSED PLAY AGAIN
      for (let i = 0; i < 4; i++) {
      	World.remove(world, boxes[i].body);
      	boxes[i] = new Box(450, 300 - i * 75, 84, 84);
      }
      World.remove(world, bird1.body);
      bird1 = new Bird(150, 250, 25);
      slingshot.attach(bird1.body);
    }  
}

function mouseReleased() {
    setTimeout(() => {
      slingshot.fly();
    }, 100);
}


function draw() {
    background(backgroundImg);
    Engine.update(engine);
    ground.show();
    for (let box of boxes) {
        box.show();
    }
    slingshot.show();
    bird1.show();
}