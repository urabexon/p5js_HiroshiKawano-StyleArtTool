var marginH, marginV;
var gsize;
var tLen;
var cLen;
var rowLen, rowLenCurrent;
var w;
var rWPre;
var rW;
var colNum;
var cW, cH, realW, realH;
var gap;
var colorMin, colorMax;
var wMin, wMax;
var seed;

var colors = [
    [60, 105, 226], // blue
    [234, 184, 53], // yellow
    [205, 48, 40],  // red
    [20, 20, 20],   // black
    [232, 227, 220] // white
];

function setup() {
    createCanvas(720, 1080);
    noLoop();

    marginH = 150;
    marginV = 150;
}

function keyPressed() {
    if (keyCode === 83)
        saveForPrint("sketch.jpg", "A3", 300);
}
