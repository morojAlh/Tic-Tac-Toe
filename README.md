# Tic-Tac-Toe
![ezgif com-crop](https://user-images.githubusercontent.com/37349702/49332006-edf66100-f5b6-11e8-8456-5a9ab0ec1fce.gif)

## Table of Contents

* [Instructions](#instructions)
* [Introduction to the game](#introduction-to-the-game)
* [Usage](#usage)
* [Next Step](#Next-Step)
* [Resources](#Resources)


## Instructions

Tic Tac Toe is my first project in WDI with GA, It's all about HTML pages, styling with CSS and also JavaScript and jQuery and some other libraries.
In the project I create two HTML pages `index.html` it's the landeing page and `game.html`, also one file for styling `style.css` and one file for javascript `main.js`.

## Introduction to the game
Tic Tac Toe is a game for two players, Earth 🌍 and Sun 🌕, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.

Players can win in these situations:
- Horizontal 
 <img src="https://user-images.githubusercontent.com/37349702/49328193-401a9080-f57d-11e8-96d7-3efcac30c3a6.png" width="350" title="hover text">

- Vertical
<img width="350" alt="vertical" src="https://user-images.githubusercontent.com/37349702/49330328-f2fae680-f59d-11e8-96a3-623401cbf46a.png">

- Diagonal
<img width="350" alt="diagonal" src="https://user-images.githubusercontent.com/37349702/49330332-ff7f3f00-f59d-11e8-94ea-4c2d26dc68b5.png">

Otherwise, it will be no winner (tie):

<img width="350" alt="tie" src="https://user-images.githubusercontent.com/37349702/49330432-84b72380-f59f-11e8-9d36-c690fb69d280.png">

You can play the game from [Here](https://morojalh.github.io/Tic-Tac-Toe/).

## Usage

- **jQuery**:
  Is a javaScript library. To setup, your code with jQuery library put this code in the `<head>` of HTML page.
  ```
  <script src="https://code.jquery.com/jquery-3.3.1.js"
  integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
  crossorigin="anonymous"></script>
  ```
  [Learn More](https://jquery.com)

- **animate.css**:
  Is a bunch of cool, fun, and cross-browser animations for you to use in your projects. To setup, your code with animate.css library put this code in the `<head>` of HTML page.
  ```
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">
  ```
  I use it to animate the winner object.
  [Learn More](https://github.com/daneden/animate.css)

- **Google Fonts API**:
  Setup your code with Google Fonts API by putting this code in the `<head>` of HTML page.
  ```
  <link href="https://fonts.googleapis.com/css?family=Font+Name" rel="stylesheet">
  ```
  replace `Font+Name` with the font you want form haer [Google Fonts](https://fonts.google.com).

  I used [Chakra Petch](https://fonts.google.com/specimen/Faster+One) for all text in pages and [Faster One](https://fonts.google.com/specimen/Chakra+Petch) only for the header in `inedx.html`.

  [Learn More](https://fonts.google.com)

- **Bootstrap**:
    Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Copy-paste the stylesheet `<link>` into your `<head>` before all other stylesheets to load our CSS.
    ```
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
    integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
    crossorigin="anonymous">
    ```
    [Learn More](https://getbootstrap.com)
    
- **SweetAlert**:
    SweetAlert makes popup messages easy and pretty. Copy-paste the stylesheet `<script>` into your `<head>`.
    ```
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    ```
    [Learn More](https://sweetalert.js.org)

## Next Step

There are some features I want to add in the game:
- Add a one player game.
- Add more planets (Mars, Jupiter, Venus ... etc) so the user can choose one of them.

## Resources

- [Tic-tac-toe](https://en.wikipedia.org/wiki/Tic-tac-toe).
- [HTML - Audio](https://tutorialehtml.com/en/html-tutorial-embed-audio/).
- [Music from Interstellar Teaser by Hans Zimmer](https://www.youtube.com/watch?v=XN8N-5MAIUU).