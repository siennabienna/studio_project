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

# Starting the Main Coding





