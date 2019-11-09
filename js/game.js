const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

let ground;
const boxes = [];
let bird1;
let backgroundImg;
let world, engine;
let mConstraint;
let slingshot;


function preload() {
    //backgroundImg = loadImage("../assets/Background.jpg");
}

function setup() {
    const canvas = createCanvas(600, 400);
    engine = Matter.Engine.create();
    world = engine.world;

    ground = new Ground(width / 2, height - 10, width, 20);
    for (let i = 0; i < 3; i++) {
        boxes[i] = new Box(450, 300 - i * 75, 84, 100);
    } 
    bird1 = new Bird(150, 300, 25);    

    slingshot = new SlingShot(150, 300, bird1.body);
    
    const mouse = Mouse.create(canvas.elt);
    const options = {
        mouse: mouse,
    }
    mConstraint = MouseConstraint.create(engine, options);

    World.add(world, mConstraint);
}

function draw() {
    background(0);
    Engine.update(engine);
    ground.show();
    for (let box of boxes) {
        box.show();
    }
    slingshot.show();
    bird1.show();
}