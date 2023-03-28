const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
//console.log(ctx);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	drawScreen()
});

function drawScreen(){

ctx.fillStyle = "#E0AC69";
ctx.fillRect(500, 75, 400, 500);

ctx.fillStyle = "black";
ctx.fillRect(500, 70, 400, 125);

ctx.fillStyle = "black";
ctx.fillRect(650, 300, 200, 75);

ctx.fillStyle = "black";
ctx.fillRect(530, 300, 170, 75);

ctx.fillStyle = "#E0AC69";
ctx.fillRect(650, 300, 75, 150);

ctx.fillStyle = "black";
ctx.fillRect(570, 470, 250, 20);

ctx.fillStyle = "black";
ctx.fillRect(550, 430, 100, 20);

ctx.fillStyle = "black";
ctx.fillRect(730, 430, 100, 20);

ctx.fillStyle = "black";
ctx.fillRect(515, 275, 350, 25);

}

drawScreen();