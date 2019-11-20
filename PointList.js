function PointList(resolution){

	this.resolution = resolution;
	this.points = [];

	this.addLine = function(x1, y1, x2, y2){
		length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
		segmentLength = (length / this.resolution);
		for (n = 0; n < Math.floor(length / segmentLength); n += 1){
			console.log("Pushing");
			this.points.push([Math.floor(((n * (x2 - x1))/segmentLength) + x1), Math.floor(((n * (y2 - y1))/segmentLength) + y1)]);
		}
		console.log("POINTS LIST")
		for (i = 0; i < this.points.length; i++){
			console.log(this.points[i]);
		}
	}
}