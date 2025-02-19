# Week 1

Link to Wepage: https://siennabienna.github.io/studio_project/

## Deciding on the theme ***Digital Folklore***
- I want to explore the origins of how computer culture has developed
- In my past experiments in the workshop tasks assignment, I enjoyed using humour, and I feel like I could connect this with internet identity and the idea of a 'meme'
- Online social spaces have always fascinated me, and I love to analyse the origins of trends on Tik Tok and Instagram from an outsiders perspective, and how different comminuties have developed to be the way that they are today
- I want to be able to reference to the early stages of online internet spaces - a crucial part of the development of modern technology culture
- In the workshop tasks, one thing that sparked this idea was using the old MS Paint background on the webcam art for workshop 9
- As my audience for this project is an internet audience, I want to be able to make these specific references that only this audience will understand
- I'm fascinated by how the internet was really the first 'place' on earth where people from comepletely different countries, cultures, identites and personalities could come together though shared interests on forums - it was a a way for personal expression to thrive without the confines of real life
- I want to explore the ways the artspace found itself on the internet - art was freed from the exclusivity of the art world and was avalible to make and view by anyone with an internet connection for the first time ever
- As someone who belives in the deinstitutionalization of art, this sounded like something I am willing to explore myself - I want to create some sort of artwork that can be viewed, changed, and understood by anyone in the world dispite economic or educational background


![image](https://github.com/user-attachments/assets/f44f1192-4907-4404-9157-b9910b63b879)

One of the first viral internet memes - Dancing Baby (1996)

[Some history about the dancing baby](https://techcrunch.com/2014/06/15/a-brief-history-of-the-dancing-baby-meme/)

## Ways I would like to Explore this Theme
- Making references to the internet at a crucial stage of its development - not only in the visual aspects, but also how it is coded
- Use some type of humor that will tie it to both the origins of computer art - but also perhaps in a way that a modern internet audience would still find it humourous
- References to wider culture in the world at the moment, communicated by early internet imagery - eg, the Trump assasination attempt shown through pixelated images (perhaps like an online version of Rauschenberg)
- Not try to convey a storyline, but more an idea or feeling

## Ideas for Code
- Some sort of interactive sketch using the user imput events learned in workshop tasks, perhaps similar to an old online forum (like very early Facebook, perhaps the user is able to navigate between different 'profiles' that all work together to discuss some type of modern day subject like AI)
- A gallery type sketch of memories - showing parts of the early internet that has significant impacts (such as the development of URLs or the beginning of code), or perhaps things that shaped me and my internet journey (things like club penguin, early youtube, cool math games, and maybe a reference to my parents old computer that had a very loud fan and would heat up horribly) - The gallery could be a mixture of images, text, and interactive aspects like letting the user draw all over it with a pen tool
- A desktop screensaver type of page where each icon could be opened into a new piece of interactive art - some might have silly old GIFs, some might have just text, some might have images relevant to current culture (but made to fit in the theme by turning them into GIFs or using pixels)

## Preliminary Code Experiments
I decided that the idea I connected with best was the desktop page with different icons. I decided that the best way to start experimenting with code for this idea would be to figure out how to do the background for the desktop. 

![image](https://github.com/user-attachments/assets/ce37be16-af0a-4f5e-baa8-d3e42d403b90)

My idea for how the desktop should look - I want it to feel/represent an old desktop.

### Problemsolving Window Sizing
Desktop screens in the 90s were often in 4/3 screen ratio, so I wanted to try making it to that size. I wanted to make it so that if the browser was resized by the user, it would still maintain this ratio.
- I want it so that the desktop always has a 4:3 ratio width to height
- I want it so the desktop always fits inside the screen, and for it to fit it needs to be smaller that both the width and height of the screen
- When the width is the smaller dimension, I can use that dimension as the width, and then shorten it to get the height
- The height becomes the smaller dimension when it's less than the width scaled down by 3/4, because that means even if you scale the width down, it would still be bigger than the height measurement, thus overflowing the screen

I made this preliminary code to see how it worked:

```js
function setup() { 
  if(windowWidth > windowHeight * (4/3)) 
    createCanvas (windowHeight * (4/3), windowHeight); 
  else 
    createCanvas (windowwidth, windowWidth * (3/4)); 
} 
function draw() { 
  background(0); 
} 
function windowResized() { 
  if(windowWidth > windowHeight * (4/3)) 
    resizeCanvas (windowHeight * (4/3), windowHeight); 
  else 
  resizeCanvas (windowWidth, windowWidth * (3/4)); 
}
```

This worked okay, but it had large white spaces and I didn't like it. I decided on a more simple approach which was just to size the canvas to the window without any ratios.

```js
let background Img;
let width;
let height;
function preload() {
  backgroundImg = loadImage("bliss.jpg");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(0);
  image(backgroundImg, 0, 0, windowWidth, windowHeight);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight); 
}
```
In this code, I added the background 'Bliss', which was the standard background for early Windows versions.

[History of the Bliss Wallpaper](https://www.pcworld.com/article/444752/the-story-behind-the-windows-xp-bliss-photo-and-what-it-looks-like-today.html)


![image](https://github.com/user-attachments/assets/8970fcad-86c6-4dd7-9e64-b5384d929033)

I was super happy with the result!

## Potential Next Steps
- I want to start designing the icons and windows that will be openable on the desktop. I want to do them in old Windows 95 design to fit into my theme of ***Digital Folklore***
- I will try and come up with ideas for several windows that make reference to early computer culture, as well as modern day
- I want to bring in my MS Paint window from the Workshop Tasks assignment
- Figure out how to make windows on the desktop open and closeable at the users' control

# Starting with the Main Project
### Designing the Windows
I First started the project by doing some rough drawings for what I wanted on the pop-up windows.

![image](https://github.com/user-attachments/assets/ef681796-3e20-4680-a27e-eb7d5de73c0d)

My first Idea was to create a simulation of an online forum using the same input techniques from the poem code from the workshop tasks. I based this sketch off of Usenet, which I found after some research was a very very early online chat room established in 1980. 

![image](https://github.com/user-attachments/assets/4656651f-8a5b-48bd-86cb-decc35080327)

A screenshot from a 2004 chatroom on Usenet. I thought this would be important to include as I wanted to make references to the forum culture on the early internet, and how primitive chat rooms were the first steps to the social media giants we have today.

For this window, I wanted it to include a reference to those modern day message spaces, so I put something that somebody may text over an Instagram chat in 2025 in as the chat. By putting something unexprectantly modern in, I wanted the user to make a mental reference to where we are now as a stark comparison. 

Here was my design for it that I made in Google Drawings:

![image](https://github.com/user-attachments/assets/102a2ec6-911f-4666-a5a1-bb99b4c7e183)

Next,

## Coding the MS Paint Window

The first window I decided to code was the MS paint window, as I already had the code ready to go from the workshop assignment. All I needed to figure out was how to open and close the window using an icon and an X button. One problem I ran into very quickly was assigning the icon image to a button to open the window. This is because buttons are put on top of the drawing so it would never sit underneath the window. To problem solve this, I made a 'void' image that was just a blank image to act as the button. I placed this void image over the desktop icon. This way, the icon would be clickable but not sit on top of the window.

```js
 createCanvas(windowWidth, windowHeight);
  windowResized();
  addButtons();
  openDesktop();
```
This let me add the buttons as the desktop was drawn.

```js
function addButtons() {
  // paint icon
  paintBtn = createImg("void.png");
  paintBtn.position(0, 0);
  paintBtn.size(100, 100);
  paintBtn.hide();
  paintBtn.mousePressed(openPaintWindow);
```
This was to make the 'void' button detect the click and open the paint window.

```js
function openDesktop() {
  paintBtn.show();
  drawDesktop();
}

```
After the 'void' button is created, the function `openDesktop()` makes the button clickable by showing it, then calls `drawDesktop()` which takes care of drawing the MS Paint icon itself on the desktop along with any future icons.

```js
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
```
The function `addButtons()` takes care of creating all the buttons and other elements that aren't drawn on the canvas before the rest of the program runs, so that I don't have to delete them and create them again every time the user closes and opens a window. This makes it so that the window also has memory of any inputs made by the user when it is re-opened. This bit of code also takes care of creating a 'void' button to sit on top of the x drawn in the corner of the window to close it.


```js
function openPaintWindow() {
  isPaintOpen = true;
  redSlider.show();
  greenSlider.show();
  blueSlider.show();
  closePaintBtn.show();

  drawPaintWindow();
}
```
This states that the window is open, shows the inputs along with the x to close the window, and then also calls the function `drawPaintWindow()` that as the name would suggest, draws the paint window.

```js
function drawPaintWindow() {
  image(paintFrameImg, paintWindowX, paintWindowY, 400, 400);
}
```
The code that draws the window is separated from the code that opens it so that when a window is closed, the canvas with the drawing of the desktop can be refreshed and all the backgrounds of the windows that are open can be re-drawn, without also re-doing all the operations on the buttons or the actual behaviour of the window. 

I did this by using the variable `isPaintOpen` in an `if` statement to know whether or not to draw the background in the fuction `refreshDesktop`. I got the idea of seperating opening the window and drawing the window because the code for MS Paint needs to create a reference to the webcam everytime the window is opened. I thought that would be too computationally expensive to do everytime the desktop is refreshed.

```js
function refreshDesktop() {
  drawDesktop();

  if (isPaintOpen)
    drawPaintWindow();
  if (isCDPlayerOpen)
    drawCDPlayer();
  if (isTitanicPlayerOpen)
    drawTitanicPlayer();
  if (isInternetOpen)
    drawInternet();
  if (isUsenetOpen)
    drawUsenet();
  if (isCodeOpen)
    drawCode();
}
```

The rest of the code came from my last assignment.

```js
function closePaintWindow() {
  webcam.remove();
  redSlider.hide();
  greenSlider.hide();
  blueSlider.hide();
  isPaintOpen = false;
  refreshDesktop();
}
```
This is the function I used to close the window when the user presses the x button. It hides the inputs used by the window and does any window-specific operations required for the closing, which in the case of the MS Paint window is to remove the reference to the webcam. Lastly, it refreshes the drawing of the desktop with `isPaintOpen` set to false so it doesn't draw the window anymore.

## Coding the Music Player

Next, I decided to code the music player, as I wanted to see if I could add music to my code easily. To start, I first added the same opening and closing setup as the paint window and the paint icon, by explanding the functions `addButtons()` and  `openDesktop()` and adding some new functions  `openCDPlayer()`, `drawCDPlayer()` and `closeCDPlayer()`. 

I found a [useful sketch](https://editor.p5js.org/p5/sketches/Sound:_Load_and_Play_Sound) on p5 to point me in the right direction for adding the music. I first sarted by loading a recording of a Backstreet Boys song I had made into the code, `backstreetBoys = loadSound("minden_road.m4a");`. I chose to use the Backstreet Boys as I felt an older song would contribute to my goal for the artwork to create the feeling of being on an old desktop. Also I thought it was funny.

```js
cdPlayerPlay = createImg("void.png");
cdPlayerStop = createImg("void.png");
cdPlayerPlay.hide();
cdPlayerStop.hide();
cdPlayerPlay.position(cdPlayerX + 205, cdPlayerY + 70);
cdPlayerStop.position(cdPlayerX + 230, cdPlayerY + 70);
cdPlayerPlay.size(25, 25);
cdPlayerStop.size(25, 25);
cdPlayerPlay.mousePressed(playMusic);
cdPlayerStop.mousePressed(stopMusic);
```
I wanted the play and stop buttons on the window to be functional, so I added some other 'void' buttons on top of their drawings to make them clickable.


```js
function playMusic() {
  backstreetBoys.play();
}

function stopMusic() {
  backstreetBoys.stop();
}
```
I then made 2 functions `playMusic()` and `stopMusic()` that would start and stop the sound.

For this window I also added some new variables `cdPlayerX`, `cdPlayerY`, `cdPlayerWidth`, `cdPlayerHeight` to help me position the window and the various buttons in it more consistently. I kept this habit for all the following windows.

After some feeback from some peers, I was advised to make it so that pressing the corner x button would stop the music as well as the stop button on the window. To do this, I added the line `backstreetBoys.stop()` to the `closeCDPlayer()` function. 

## Coding the Movie Player

After adding the same open and close setup to this window, all I had to do was find an appropriate way to make the loading screen. I thought of maybe finding an API that would allow me to do this, but then after some research, I found that the Windows 95 loading screen was a very cute hourglass that would be easist to include by finding a GIF. 

I found the GIF I wanted to use online, and then I found a [p5 sketch](https://editor.p5js.org/kjhollen/sketches/S1bVzeF8Z) to use as a reference of how to put the GIF into the code. The trouble with using a GIF is that they can't be drawn on the canvas like regular images because then they wouldn't move. However after some research I found that images that sit on top of the canvas, like the 'void' I used to make the drawing clickable, can display the animation of a GIF.

```js
  hourglassImg = createImg("hourglass.gif");
  hourglassImg.hide();
  hourglassImg.position(titanicX + 110, titanicY + 60);
  hourglassImg.size(80, 80);
```
Since the GIF works like the 'void' images, I had to add the code to create it to `addButtons()`.

## Coding the Internet Explorer

I made a clickable download button with the 'void' image technique, and I wrote a function `showCats()`, that uses a for loop to add a bunch of clickable images of cats, by picking random strings from a list of image file names `catPictures`. The function then positions the image randomly on the screen, and I used an anonymous function so that when the user clicks on a cat image, the image closes.

## Coding the Online Forum

- I added an input box and a button, and I made the input box transparent using CSS
- The regular font didn't work well, so I asked ghen and he helped me add some code to the HTML that grabs a font from a font file and sets it as the font for the whole website, with CSS.
```css
<style>
  @font-face {
      font-family: "Windows Regular";
      src: url("Windows Regular.ttf");
  }
  
  * {
      font-family: "Windows Regular";
  }
</style>
```

- I added an array variable to store all the messages the user sends on the forum. When they press the Send button, I added a function addMessageToForum() that saves what the user wrote in the array, then clears the input box and refreshes the drawing.

```js
function addMessageToForum() {
  messages.push(messageInput.value());
  messageInput.value("");
  refreshDesktop();
}
```

- In the function that draws the forum window, I added some code that writes all the messages stored in the array with text() commands. For this to look right, I used the loadFont() function to be able to use a custom font font in p5. I read how to use the function on [this page](https://p5js.org/reference/p5/loadFont/#:~:text=loadFont()%20can%20load%20fonts,canvas%20and%20in%20HTML%20elements.)

```js
let messages = [];
function drawUsenet() {
  image(usenetBackground, usenetX, usenetY, usenetWidth, usenetHeight);

  textSize(12);
  fill(255);
  for (let i = 0; i < messages.length; i++) {
    text("> " + messages[i], usenetX + 35, usenetY + 269 + i * 15);
  }
  text('Type Your Response... ', usenetX + 35, usenetY + 430);
}
```
- While coding this I ran into a bug where my code wouldn't save the text of the message into the array, but the whole function to get the value of the input box, as text. Since for the next window I had to display some code, I thought I could use this to get some of the code of my project to show up in the project itself.

## Coding the Studio Project Files

- Since the text for the code was gonna be multiple lines long, I used a span. I created the span in `addButtons()`.

```js
codeScreen = createSpan(addButtons);
```
- I tried it out and this would create a span that has all the code for the addButtons function in it.

- I found that even if I set a constrained size to the span, the text would just overflow out of it. I did some research and found this [article](https://www.w3schools.com/css/css_overflow.asp), which explains you can use CSS to make it so the overflowing text is handled by adding a scrollbar to the span. I added this line here to make it work on my span.

```js
codeScreen.style("overflow-y", "scroll");
```
