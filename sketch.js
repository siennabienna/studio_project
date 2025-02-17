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
let taskbar;
let date;
let internetIcon;
let internetBackground;
let catPictures = [];
let usenetIcon;
let usenetBackground;
let windowsFont;
let codeIcon;
let codeBackgrouond;

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
let internetX = 0;
let internetY = 60;
let internetWidth = 650;
let internetHeight = 650 * (577/962);
let usenetX = 0;
let usenetY = 60;
let usenetWidth = 500;
let usenetHeight = 500 * (621/628);
let codeX = 0;
let codeY = 0;
let codeWidth = 500;
let codeHeight = 500 * (649/823);

// variables to tell if a window is open
let isPaintOpen = false;
let isCDPlayerOpen = false;
let isTitanicPlayerOpen = false;
let isInternetOpen = false;
let isUsenetOpen = false;
let isCodeOpen = false;

function preload() {
  backgroundImg = loadImage("bliss.jpg");
  startButton = loadImage("start.png");
  taskbar = loadImage("taskbar.png");
  date = loadImage("date.png");
  paintIcon = loadImage("ms_paint.png");
  paintFrameImg = loadImage("paintBoarder.jpg");
  cdPlayerIcon = loadImage("cd_player.png");
  cdPlayerBackground = loadImage("cdPlayerBackground.png");
  titanicIcon = loadImage("titanicIcon.png");
  titanicBackground = loadImage("titanicPlayer.png");
  internetIcon = loadImage("internet.png");
  internetBackground = loadImage("internetBackground.png");
  usenetIcon = loadImage("usenet.png");
  usenetBackground = loadImage("usenetWindow.png");
  windowsFont = loadFont("Windows Regular.ttf");
  codeIcon = loadImage("studioProject.png");
  codeBackgrouond = loadImage("codeScreen.png");

  catPictures.push("Keyboard_cat.jpg");
  catPictures.push("mehcat.jpg");
  catPictures.push("catbacon.jpg");
}

function setup() {
  pixelDensity(1);
  textFont(windowsFont);
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
  usenetX = windowWidth - usenetWidth - 10;
  usenetY = windowHeight - usenetHeight - 90;
  refreshDesktop();
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

let internetBtn;
let closeInternetBtn;
let virusButton;

let usenetBtn;
let closeUsenetBtn;
let messageInput;
let sendButton;

let codeBtn;
let closeCodeBtn;
let codeDisplay;
let codeScreen;

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
  // internet icon
  internetBtn = createImg("void.png");
  internetBtn.position(0, 100);
  internetBtn.size(100, 100);
  internetBtn.hide();
  internetBtn.mousePressed(openInternet);
  // usenet icon
  usenetBtn = createImg("void.png");
  usenetBtn.position(100, 100);
  usenetBtn.size(100, 100);
  usenetBtn.hide();
  usenetBtn.mousePressed(openUsenet);
  // code icon
  codeBtn = createImg("void.png");
  codeBtn.position(0, 300);
  codeBtn.size(100, 100);
  codeBtn.hide();
  codeBtn.mousePressed(openCode);

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

  // internet window
  closeInternetBtn = createImg("void.png");
  virusButton = createImg("void.png");
  closeInternetBtn.hide();
  virusButton.hide();
  closeInternetBtn.position(internetX + internetWidth - 25, internetY);
  virusButton.position(internetX + 200, internetY + 270);
  closeInternetBtn.size(25, 25);
  virusButton.size(250, 50);
  virusButton.mousePressed(showCats);
  closeInternetBtn.mousePressed(closeInternet);

  // usenet window
  closeUsenetBtn = createImg("void.png");
  closeUsenetBtn.hide();
  closeUsenetBtn.position(usenetX + usenetWidth - 25, usenetY);
  closeUsenetBtn.size(25, 25);
  closeUsenetBtn.mousePressed(closeUsenet);
  messageInput = createInput();
  messageInput.position(usenetX + 35, usenetY + 440);
  messageInput.style("color", "white");
  messageInput.style("backgroundColor", "transparent");
  messageInput.size(350, 20);
  messageInput.hide();
  sendButton = createButton("Send");
  sendButton.size(50, 25);
  sendButton.position(usenetX + 35 + 360, usenetY + 440);
  sendButton.hide();
  sendButton.mousePressed(addMessageToForum);

  // code window
  closeCodeBtn = createImg("void.png");
  closeCodeBtn.hide();
  closeCodeBtn.position(codeX + codeWidth - 25, codeY);
  closeCodeBtn.size(25, 25);
  closeCodeBtn.mousePressed(closeCode);
  codeScreen = createSpan(addButtons);
  codeScreen.position(codeX + 20, codeY + 63);
  codeScreen.size(374, 230);
  codeScreen.style("overflow-y", "scroll");
  codeScreen.style("text-wrap", "pretty");
  codeScreen.hide();
}

// for every window, i have a function that opens the window (shows the buttons),
// a function that draws any graphics (draw) and a function that closes it
// (hides the buttons and refreshes the desktop)
function openDesktop() {
  paintBtn.show();
  cdPlayerBtn.show();
  titanicBtn.show();
  internetBtn.show();
  usenetBtn.show();
  codeBtn.show();

  drawDesktop();
}

function drawDesktop() {
  image(backgroundImg, 0, 0, windowWidth, windowHeight);
  image(paintIcon, 0, 0,100,100);
  image(cdPlayerIcon,100, 0,100,100);
  image(titanicIcon,200, 0,100,100);
  image(taskbar, 0, windowHeight - 40, windowWidth, 40);
  image(startButton, 0, windowHeight - 40, 40 * (58/28), 40);
  image(date, windowWidth - 40 * (86/28), windowHeight - 40, 40 * (86/28), 40);
  image(internetIcon, 0, 100, 100, 100);
  image(usenetIcon, 100, 100, 100, 100);
  image(codeIcon, 0, 300, 100, 100);
}

function refreshDesktop() {
  drawDesktop();

  if(isPaintOpen)
    drawPaintWindow();
  if(isCDPlayerOpen)
    drawCDPlayer();
  if(isTitanicPlayerOpen)
    drawTitanicPlayer();
  if(isInternetOpen)
    drawInternet();
  if(isUsenetOpen)
    drawUsenet();
  if(isCodeOpen)
    drawCode();
}

// code for code

function openCode() {
  isCodeOpen = true;
  closeCodeBtn.show();
  codeScreen.show();
  drawCode();
}

function drawCode() {
  image(codeBackgrouond, codeX, codeY, codeWidth, codeHeight);
}

function closeCode() {
  isCodeOpen = false;
  closeCodeBtn.hide();
  codeScreen.hide();
  refreshDesktop();
}

// code for usenet

function openUsenet() {
  isUsenetOpen = true;
  closeUsenetBtn.show();
  messageInput.show();
  sendButton.show();
  drawUsenet();
}

let messages = [];
function drawUsenet() {
  image(usenetBackground, usenetX, usenetY, usenetWidth, usenetHeight);
  
  textSize(12);
  fill(255);
  for(let i = 0; i < messages.length; i++) {
    text("> " + messages[i], usenetX + 35, usenetY + 269 + i * 15);
  }
  text('Type Your Response... ', usenetX + 35, usenetY + 430);
}

function addMessageToForum() {
  messages.push(messageInput.value());
  messageInput.value("");
  refreshDesktop();
}

function closeUsenet() {
  closeUsenetBtn.hide();
  messageInput.hide();
  sendButton.hide();
  isUsenetOpen = false;
  refreshDesktop();
}

// code for the internet

function openInternet() {
  isInternetOpen = true;
  closeInternetBtn.show();
  virusButton.show();
  drawInternet();
}

function drawInternet() {
  image(internetBackground, internetX, internetY, internetWidth, internetHeight);
}

function closeInternet() {
  closeInternetBtn.hide();
  virusButton.hide();
  isInternetOpen = false;
  refreshDesktop();
}

function showCats() {
  for(let i = 0; i < 10; i++) {
    let img = createImg(random(catPictures));

    img.position(random(0, windowWidth - 400), random(0, windowHeight - 400));
    img.mousePressed(() => {
      img.remove();
    });
  }
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
  refreshDesktop();
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
  backstreetBoys.stop();
  isCDPlayerOpen = false;
  refreshDesktop();
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
  refreshDesktop();
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
