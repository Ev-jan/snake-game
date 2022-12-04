// class Main {
//     constructor(){
//         this.gameBoard = new gameBoard();
//         this.snake = new Snake();
//         this.apple = new Apple();
//         this.score = new score(0);
//     }
//     update() {
//         //updates elements of the game or data following some events
//     }

//     create() {
//         //creates all parts of the game
//     }
// }

// class gameBoard {
//     constructor() {
//         // creates the playing field
//     }
// }

// class Snake {
//     constructor() {
//         // snake initialization: initial position, color, length etc
//     }

//     snakeDies() {

//     }

//     control(){
//         // snake control logic, handles keyboard 
//     }

//     update() {
//         // this method defines conditions for the snake to change 
//     }
//     create() {
//     // sets the logic that will create the snake
//     }
// } 

// class Apple {
//     constructor() {
//         // color, size, initial position etc
//     }
//     create(){
//         //creates apples
//     }
//     getPosition() {
//         // returns position of each new apple
//     }

// }

// class Score {
//     constructor(score) {
//         //
//         this._score = score;
//     }
//     create() {
//         // creates block that displays scores
//     }
//     increase() {
//         this._score += 1;
//         this.create();
//     }
//     reset(){
//         // resets scores to 0 when snake dies
//     }
// }
import {update as updateSnake, draw as drawSnake, SNAKE_SPEED} from './snake.js'
import {update as updateApple, draw as drawApple} from './apple.js';

let lastRenderTime = 0;
const gameBoard = document.getElementById('game-board');

function main(currentTime) {
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
    console.log('Render');
    lastRenderTime = currentTime;
    draw()
    update()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateApple()
}


function draw () {
    gameBoard.innerHTML = ' '
    drawSnake(gameBoard)
    drawApple(gameBoard)
}

draw()
