function main(){

}

var pointList = new PointList(5);
var display = new Display();

function mousehasbeenclicked(event){
	console.log(event.clientX, event.clientY);
	display.nextPoint(event.clientX, event.clientY);
}