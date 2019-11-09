const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.tabIndex = 1;



let bird;
let background;

bird = new Bird(100, 100, 50, 50, context, "../assets/bird1.png");
background = new Background(0, 0, canvas.width, canvas.height, context, "../assets/Background.jpg");

canvas.onkeydown = function keyDown(e) {
    if (e.keyCode == 87 || e.keyCode == 38)   // W key or arrow up
    {
        bird.step(0, -20);
    }
    if (e.keyCode == 83 || e.keyCode == 40)  // S key or arrow down
    {
        bird.step(0, 20);
    }
    if (e.keyCode == 68 || e.keyCode == 39)    // D key or arrow right
    {
        bird.step(20, 0);
    }
    if (e.keyCode == 65 || e.keyCode == 37)   // A key or arrow left
    {
        bird.step(-20, 0);
    }
}



function animate() {
    requestAnimationFrame(animate);
    background.draw();
    bird.draw();
    //bird.step((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10);
}


animate();






