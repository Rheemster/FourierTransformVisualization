var canvas = document.getElementById("drawBoard");
var boardCtx = canvas.getContext("2d");

boardCtx.canvas.width  = window.innerWidth;
boardCtx.canvas.height = window.innerHeight;
boardCtx.lineWidth = 2;
boardCtx.strokeStyle = "#ffffff";
boardCtx.lineCap = "round";
boardCtx.lineJoin = "round";

function Display(){

	this.x1 = window.innerWidth / 2;
	this.y1 = window.innerHeight / 2;

	this.nextPoint = function(x2, y2){
		this.drawLine(this.x1, this.y1, x2, y2);
		this.x1 = x2;
		this.y1 = y2;
	}

	this.drawLine = function(x1, y1, x2, y2){
		pointList.addLine(x1, y1, x2, y2);
		console.log("Now drawing");
		this.drawPoints(pointList.points);
		//boardCtx.beginPath();
		//boardCtx.moveTo(x1, y1);
		//boardCtx.lineTo(x2, y2);
		//boardCtx.stroke();
	}

	this.drawPoints = function(daPoints){
		boardCtx.beginPath();
		console.log(daPoints.length);
		for (i = 0; i < daPoints.length; i ++){
			console.log(i);
			boardCtx.lineTo(daPoints[i][0], daPoints[i][1]);
		}
		boardCtx.stroke();
	}
}