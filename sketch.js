let backgroundImg;
let width;
let height;
let paintIcon;
let cdPlayerIcon;
let cdPlayerBackground;
let titanicIcon;
let titanicBackground;
let backstreetBoys;
let startButton;

// variables for where the windows are on screen
let paintWindowX = 120;
let paintWindowY = 100;
let cdPlayerX = 100;
let cdPlayerY = 20;
let cdPlayerWidth = 300;
let cdPlayerHeight = 300 * (582/1186);
let titanicX = 60;
let titanicY = 420;
let titanicWidth = 300;
let titanicHeight = 300 * (538/730);

// variables to tell if a window is open
let isPaintOpen = false;
let isCDPlayerOpen = false;
let isTitanicPlayerOpen = false;

function preload() {
  backgroundImg = loadImage("bliss.jpg");
  startButton = loadImage("start.png");
  paintIcon = loadImage("ms_paint.png");
  paintFrameImg = loadImage("paintBoarder.jpg");
  cdPlayerIcon = loadImage("cd_player.png");
  cdPlayerBackground = loadImage("cdPlayerBackground.png");
  titanicIcon = loadImage("titanicIcon.png");
  titanicBackground = loadImage("titanicPlayer.png");
}

function setup() {
  pixelDensity(1);
  backstreetBoys = loadSound("minden_road.m4a");

  createCanvas(windowWidth, windowHeight);
  windowResized();
  addButtons();
  openDesktop();
}

function draw() {
  if (isPaintOpen) {
    pixelsPaint();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  cdPlayerX = windowWidth - cdPlayerWidth - 10;
  resetDesktop();
}

// variables for all the buttons in each window
let paintBtn;
let closePaintBtn;

let cdPlayerBtn;
let closeCdPlayerBtn;
let cdPlayerPlay;
let cdPlayerStop;

let titanicBtn;
let closeTitanicBtn;
let hourglassImg;

function addButtons() {
  // paint icon
  paintBtn = createImg("void.png");
  paintBtn.position(0, 0);
  paintBtn.size(100, 100);
  paintBtn.hide();
  paintBtn.mousePressed(openPaintWindow);
  // cd player icon
  cdPlayerBtn = createImg("void.png");
  cdPlayerBtn.position(100, 0);
  cdPlayerBtn.size(100, 100);
  cdPlayerBtn.hide();
  cdPlayerBtn.mousePressed(openCDPlayer);
  // titanic player icon
  titanicBtn = createImg("void.png");
  titanicBtn.position(200, 0);
  titanicBtn.size(100, 100);
  titanicBtn.hide();
  titanicBtn.mousePressed(openTitanicPlayer);

  // paint window
  redSlider = createSlider(0, 255);
  greenSlider = createSlider(0, 255);
  blueSlider = createSlider(0, 255);
  redSlider.hide();
  greenSlider.hide();
  blueSlider.hide();
  closePaintBtn = createImg("void.png");
  closePaintBtn.position(paintWindowX + 375, paintWindowY);
  closePaintBtn.size(25, 25);
  closePaintBtn.hide();
  closePaintBtn.mousePressed(closePaintWindow);

  // cd player window
  closeCdPlayerBtn = createImg("void.png");
  cdPlayerPlay = createImg("void.png");
  cdPlayerStop = createImg("void.png");
  closeCdPlayerBtn.hide();
  cdPlayerPlay.hide();
  cdPlayerStop.hide();
  closeCdPlayerBtn.position(cdPlayerX + cdPlayerWidth - 25, cdPlayerY);
  cdPlayerPlay.position(cdPlayerX + 205, cdPlayerY + 70);
  cdPlayerStop.position(cdPlayerX + 230, cdPlayerY + 70);
  closeCdPlayerBtn.size(25, 25);
  cdPlayerPlay.size(25, 25);
  cdPlayerStop.size(25, 25);
  closeCdPlayerBtn.mousePressed(closeCDPlayer);
  cdPlayerPlay.mousePressed(playMusic);
  cdPlayerStop.mousePressed(stopMusic);

  // titanic window
  closeTitanicBtn = createImg("void.png");
  hourglassImg = createImg("hourglass.gif");
  closeTitanicBtn.hide();
  hourglassImg.hide();
  closeTitanicBtn.position(titanicX + titanicWidth - 25, titanicY);
  hourglassImg.position(titanicX + 110, titanicY + 60);
  closeTitanicBtn.size(25, 25);
  hourglassImg.size(80, 80);
  closeTitanicBtn.mousePressed(closeTitanicPlayer);
}

// for every window, i have a function that opens the window (shows the buttons),
// a function that draws any graphics (draw) and a function that closes it
// (hides the buttons and refreshes the desktop)
function openDesktop() {
  paintBtn.show();
  cdPlayerBtn.show();
  titanicBtn.show();

  drawDesktop();
}

function drawDesktop() {
  image(backgroundImg, 0, 0, windowWidth, windowHeight);
  image(paintIcon, 0, 0,100,100);
  image(cdPlayerIcon,100, 0,100,100);
  image(titanicIcon,200, 0,100,100);
  image(startButton, 0, windowHeight - 85);
}

function resetDesktop() {
  drawDesktop();

  if(isPaintOpen)
    drawPaintWindow();
  if(isCDPlayerOpen)
    drawCDPlayer();
  if(isTitanicPlayerOpen)
    drawTitanicPlayer();
}

// code for the titanic player window

function openTitanicPlayer() {
  closeTitanicBtn.show();
  hourglassImg.show();
  isTitanicPlayerOpen = true;
  drawTitanicPlayer();
}

function drawTitanicPlayer() {
  image(titanicBackground, titanicX, titanicY, titanicWidth, titanicHeight);
}

function closeTitanicPlayer() {
  closeTitanicBtn.hide();
  hourglassImg.hide();
  isTitanicPlayerOpen = false;
  resetDesktop();
}

// code for the cd player window
function openCDPlayer() {
  closeCdPlayerBtn.show();
  cdPlayerPlay.show();
  cdPlayerStop.show();
  isCDPlayerOpen = true;
  drawCDPlayer();
}

function drawCDPlayer() {
  image(cdPlayerBackground, cdPlayerX, cdPlayerY, cdPlayerWidth, cdPlayerHeight);
}

function closeCDPlayer() {
  closeCdPlayerBtn.hide();
  cdPlayerPlay.hide();
  cdPlayerStop.hide();
  isCDPlayerOpen = false;
  resetDesktop();
}

function playMusic() {
  backstreetBoys.play();
}

function stopMusic() {
  backstreetBoys.stop();
}

// code for the paint window
let webcam;
let ballSystem = [];
let scale = 18;

let redSlider;
let greenSlider;
let blueSlider;

let paintFrameImg;

let drawingX = 60, drawingY = 40;
let drawingWidth = 375, drawingHeight = 300;

function openPaintWindow() {
  isPaintOpen = true;
  webcam = createCapture(VIDEO);
  webcam.size(400 / scale, 400 / scale);
  webcam.hide();

  drawingX = 60 + paintWindowX;
  drawingY = 40 + paintWindowY;
  drawingWidth = 375 + paintWindowX;
  drawingHeight = 300 + paintWindowY;

  ballSystem = [];

  for (let i = 0; i < 200; i++) {
    rx = random(drawingX + 15, drawingWidth - 15);
    ry = random(drawingY + 15, drawingHeight - 15);
    rr = random(4, 10);
    ballSystem[i] = new Ball(rx, ry, rr);
  }

  redSlider.position(paintWindowX + 250, paintWindowY + 320);
  greenSlider.position(paintWindowX + 250, paintWindowY + 335);
  blueSlider.position(paintWindowX + 250, paintWindowY + 350);
  redSlider.show();
  greenSlider.show();
  blueSlider.show();
  closePaintBtn.show();

  drawPaintWindow();
}

function drawPaintWindow() {
  image(paintFrameImg, paintWindowX, paintWindowY, 400, 400);
}

function closePaintWindow() {
  webcam.remove();
  redSlider.hide();
  greenSlider.hide();
  blueSlider.hide();
  isPaintOpen = false;
  resetDesktop();
}

function pixelsPaint() {
  // filter(GRAY); 
  webcam.loadPixels();
  for (x = 0; x < ballSystem.length; x++) {
    ballSystem[x].move();
    ballSystem[x].show();
    ballSystem[x].checkEdges();
  }
}

class Ball {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x = this.x + random(-8, 8);
    this.y = this.y + random(-8, 8);
  }

  show() {
    let px = (this.x - paintWindowX) / scale;
    let py = (this.y - paintWindowY) / scale;
    let webcamColour = webcam.get(px, py);
    fill(webcamColour[0] + redSlider.value(), webcamColour[1] + greenSlider.value(), webcamColour[2] + blueSlider.value(), 100);
    noStroke();
    rect(this.x, this.y, this.r, this.r, 5);
  }

  checkEdges() {
    if (this.x < drawingX + 15) {
      this.x = drawingX + 15;
    } else if (this.x > drawingWidth - 15) {
      this.x = drawingWidth - 15;
    }
    if (this.y < drawingY + 15) {
      this.y = drawingY + 15;
    } else if (this.y > drawingHeight - 15) {
      this.y = drawingHeight - 15;
    }
  }
}
