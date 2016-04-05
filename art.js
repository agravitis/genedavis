var Art = function(canvas, width, height) {
    this.canvas = canvas;

    var pxMultiplier = 50;
    this.canvas.width = width * pxMultiplier;
    this.canvas.height = height * pxMultiplier;

    this.ctx = this.canvas.getContext("2d");


    var totalColored = 0;
    var numColors = 30;
    var colors = chroma.scale(['aqua', 'royalBlue', 'navy']).colors(numColors);
    for (var i = 0; totalColored < this.canvas.width; i++) {
	var lineWidth = Math.floor(Math.random() * (Math.random() > 0.95 ? 400 : 10));
	var color = colors[lineWidth > 30 ? Math.floor(numColors*0.4) + Math.floor(numColors*0.6 * Math.random()) : Math.floor(numColors * Math.random())];
	this.drawLine(color, totalColored, lineWidth);
	totalColored += lineWidth;
    }
};

Art.prototype.drawLine = function(color, leftOffset, width) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(leftOffset,0, width, this.canvas.height);
};

