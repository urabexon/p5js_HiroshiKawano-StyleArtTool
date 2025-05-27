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
    // noLoop();

    marginH = 150;
    marginV = 150;

    // gap between each rectangle
    gap = 0;
    gsize = 120 + gap;

    wMin = 1;
    wMax = 30;
    colorMin = 0;
    colorMax = 5;
    cW = width - marginH * 2.4;
    cH = height - marginV * 2;
    tLen = floor((cW / gsize)) * floor((cH / gsize));
    rowLen = floor(cW / gsize);

    var colLen = floor(cH / gsize);

    realW = rowLen * gsize;
    realH = colLen * gsize;
    marginH = (width - realW) * 0.5;
    marginV = (height - realH) * 0.5;
    cLen = 0;
    rowLenCurrent = 0;
    colNum = 0;
    rWPre = 0;
    rW = 0;
    seed = random(99999);
}

function draw() {
    background(colors[4]);
    rectMode(CORNER);
}

function shadow(r, g, b, a) {
    drawingContext.shadowOffsetX = 10;
    drawingContext.shadowOffsetY = 20;
    drawingContext.shadowBlur = 50;
    drawingContext.shadowColor = "rgba(" + r + "," + g + "," + b + "," + a + ")";
}

function keyPressed() {
    if (keyCode === 83)
        saveForPrint("sketch.jpg", "A3", 300);
}
