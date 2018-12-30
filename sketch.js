let drawtheLine = false;
let lastX;
let lastY;
let x;
let y;

let index = 0;


function setup() {
    createCanvas(windowWidth, windowHeight)
    background(255);
}
window.onmousedown = () => drawtheLine = true;
window.onmouseup = () => drawtheLine = false;

let drawing = [];

onmousemove = (e) => { x = e.clientX, y = e.clientY }

loaddrawing = () => {
    clear();
    console.log("Redraw clicked");

    for(let i = 0; i < drawing.length; i++){
        strokeWeight(2);
        stroke(0);
        line(drawing[i][0], drawing[i][1], drawing[i][2], drawing[i][3]);
    }

}

function draw() {
    frameRate(30);
    if (drawtheLine === true) {
        strokeWeight(2);
        stroke(0);
        line(lastX, lastY, x, y);
        drawing.push([lastX, lastY, x, y]);
        lastX = x;
        lastY = y;
    } else {
        stroke(255);
        lastX = x;
        lastY = y;
    }

}