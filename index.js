
/* Colors */
let bgColor = "#637a96";
let lineColor =  '#7dd897';


function setCanvasSize() {
    let canvas = document.getElementById('title__img');
    canvas.width = document.body.clientWidth;
    let height_ratio = 0.2;
    if (document.body.clientWidth > 860) {
        height_ratio = 0.1;
    }
    canvas.height = canvas.width * height_ratio;
}

function drawEKG() {
    let canvas = document.getElementById('title__img');
    let ctx = canvas.getContext('2d');
    /* fill background */
    ctx.fillStyle = bgColor;
    ctx.fillRect(0,0, canvas.width, canvas.height);

    ctx.fillStyle = lineColor;
    

}

window.onload = () => {
    setCanvasSize();
    drawEKG();
}
window.onresize = () => {
    setCanvasSize();
    drawEKG();
}
