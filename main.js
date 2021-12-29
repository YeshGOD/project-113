function preload()
{}

function setup()
{
    canvas = createCanvas(640, 400);
    canvas.position(110, 250);

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    fill(255 , 0 , 0);
    stroke(255 ,0 , 0)
    circle(100, 100, 20);
}

function take_snapshot()
{
    save('firstp5js.png');
}