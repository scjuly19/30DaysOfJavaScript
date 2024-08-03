const canvas = document.querySelector("#draw")
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 100;
context.strokeStyle = "#BADA55"
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0, saturation = 100, light = 50;
let direction = true;


function draw(e) {
    if (!isDrawing) return;
    context.strokeStyle = `hsl(${hue},${saturation}%,${light}%)`
    context.beginPath()
    context.moveTo(lastX, lastY)
    context.lineTo(e.offsetX, e.offsetY)
    context.stroke();
    lastX = e.offsetX;
    lastY = e.offsetY
    hue++;
    if (hue >= 360) {
        hue = 0;
    }
    if (context.lineWidth >= 100 || context.lineWidth <= 1) {
        direction = !direction
    }
    if (direction) {
        context.lineWidth++;
    } else {
        context.lineWidth--;

    }
}
canvas.addEventListener("mousedown", (e) => {
    isDrawing = true
    lastX = e.offsetX;
    lastY = e.offsetY
})

canvas.addEventListener("mousemove", draw)
canvas.addEventListener("mouseup", () => isDrawing = false)
canvas.addEventListener("mouseout", () => isDrawing = false)