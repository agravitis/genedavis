/**
 * Auto-generate art in the style of Gene Davis.  
 *
 *
 * (Work in progress; no UX except for the output just now)
 * (petty cool though)
 * (also, solid work by the chroma.js people on that library, especialy the bezier and lightness correction stuff)
 */

var Art = function(canvas, width, height) {
    this.canvas = canvas;

    var pxMultiplier = 50;
    this.canvas.width = width * pxMultiplier;
    this.canvas.height = height * pxMultiplier;

    this.ctx = this.canvas.getContext("2d");

    var totalColored = 0;
    var numColors = 50;
    var colors = chroma.scale(['rgb(45, 186, 242)', 'royalBlue', 'navy']).correctLightness(true).colors(numColors);

    var narrowColor = 5;
    var wideColor = 100;

    for (var i = 0; totalColored < this.canvas.width; i++) {
	var lineWidth = Math.floor(Math.random() * (Math.random() > 0.97 ? wideColor * 2 : narrowColor * 2));
	var color = colors[lineWidth > wideColor / 2 ? Math.floor(numColors*0.6) + Math.floor(numColors*0.4 * Math.random()) : Math.floor(numColors * Math.random())];
	this.drawLine(color, totalColored, lineWidth);
	totalColored += lineWidth;
    }
};

Art.prototype.drawLine = function(color, leftOffset, width) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(leftOffset,0, width, this.canvas.height);
};

