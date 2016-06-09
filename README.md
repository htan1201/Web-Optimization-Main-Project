# Website Performance Optimization portfolio project

## Objectives:
To optimize the website to meet the following criteria:
* Make sure `index.html` page achieves at least a score of 90 from [`PageSpeed` Insights](https://developers.google.com/speed/pagespeed/insights/).

* Optimize `pizza.html` by altering the codes in `main.js` and upon optimization, it must have a consitent 60 fps when scrolling.

* Time to resize the pizza by using the pizza slider in pizza.html is less than 5ms

---

## Optimization Part 1: Optimize `index.html` for [`PageSpeed` Insights](https://developers.google.com/speed/pagespeed/insights/).
* Go to line 11 and comment/delete the line as that font slows down the inital page loading time.
* Using grunt, minify the CSS and JavaScript that is used in `index.html`.
* Upon minifying the CSS and JavaScript Files, put them inline into `index.html`.
* Go to a `<link>` that is linked to print.css, insert a "media=print" so it wont load unless the user is going to print the page.
* Optimizing the images. There are 2 images that should be optimized in this page, profilepic.jpg and pizzeria.jpg.
* For this project, I have used [Compressor.io](https://compressor.io/) to compress and resize pizzeria.jpg using [picresize.com](http://www.picresize.com/). However, I have also done it with grunt by using its plug-in, imagemin.

## Optimization Part 2: Alter `main.js` to improve the performance of `pizza.html` when scrolling.

### updatePosition() Optimization
* In `main.js`, I have used `use strict` to secure the codes.
* After doing so, I changed `var items = document.querySelectorAll('.mover')` to `var items = document.getElementsByClassName('mover')` as it is faster.

* Next, I took out `document.body.scrollTop/1250` and put it into its own variable outside of the for loop. There is no reason why this calculation should be done in the for-loop again and again, as it will return the same constant.

* Then, I created an array `var phase = []` to store the phase for the pizzas.

* As observed, the result of `(i % 5)`, will only give the following results: 
..* 0
..* 1
..* 2
..* 3
..* 4
  Hence, a for loop that goes from 0 to 4 was created to insert the value of `phase[]` from 0 to 4.

* I have also created a variable called `lenItems` to indicate the amount of pizzas in the background and using the for-loop to update its position based on its phase.

* In `document.addEventListener` I have also taken out a few variables that is not suitable to be inside the for-loop. Such as the following: 
..* `elem`
..* `movingPizzas`

* In `var movingPizzas`, I have changed `document.querySelectorAll()` to `document.getElementByID()` as it is faster.

* Initially, the number of pizzas rendered in the page was 200. However, the users only see a handful of it. Hence, to calculate the amount of pizzas to be rendered to the page, the following was done:
..* Get the screen height.
..* Find the number of rows.
..* And the number of pizzas to be rendered is `rows * cols`.

### style.css Optimization

Upon optimizing `main.js`, there will still be a few jank happening. Hence, a modification in CSS was needed. The modification is as the following:

```
.mover {
  position: fixed;
  width: 256px;
  z-index: -1;
  -webkit-will-change: transform;
  -moz-will-change: transform;
  will-change: transform;
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
}
```

## Optimization Part 3: Time to resize the pizza by using the pizza slider in pizza.html is less than 5ms.

* In order to reduce the time taken to resize the pizza, the function `determineDX()` was deleted.

* Upon deleting `determineDx()`, there were codes that were repeated in `changePizzaSizes()` and also it was using document.querySelectorAll(). Hence, I changed `document.querySelectorAll()` to `document.getElementsByClassName()` to make it faster. Then, it was declared as a variable outside the loop.

* Upon declaring it into a variable, there was a switch-case added to speed up the changing of pizza sizes.

---

## How to run the application.
1. Download the whole folder into your computer
2. To inspect the site on your phone, a local server is needed.

```
$> cd /path/project-folder
$> python -m SimpleHTTPServer 8080
```
3. Open a browser and visit `localhost:8080`

4. Download and install ngrok to make your local server accessible remotely.

```
$> cd /path/project-folder
$> ngrok 8080
```

5. Copy the public URL ngrok generated and try running it through PageSpeed Insights and Chrome DevTools.

Alternatively, ou can use the project uploaded in this link: [Project 4 - Web Optimization](http://htan1201.github.io/Web-Optimization-Main-Project/)

---

## Installing Grunt

**Before installing Grunt, you must have installed Git and Node.js with npm.**

**A very important reminder for windows user. When installing grunt using git cmd, RUN GIT AS ADMINISTRATOR or USE "SUDO"**

To install Grunt, you may follow the insturctions in [THIS LINK](http://gruntjs.com/getting-started).