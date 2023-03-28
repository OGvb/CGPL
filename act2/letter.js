const canvas = document.getElementById('canvas1');

if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = "#202020";
	ctx.fillRect(0, 150, 50, 350);
    ctx.beginPath();
    ctx.lineWidth = "30";
    ctx.strokeStyle = "#202020";
    ctx.moveTo(0, 150);
    ctx.lineTo(50, 150);
    ctx.bezierCurveTo(150, 400, 150, 800, 150, 100);
    ctx.lineTo(150, 300);
    ctx.stroke()
}