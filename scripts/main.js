import Snake from './snake.js';
import Apple from './apple.js';
import Score from './score.js';

const gameBoard = document.getElementById('game-board');
const quitBtn = document.getElementById("quit");
const pauseBtn = document.getElementById("pause");
export const snake = new Snake();
export const GRID_SIZE = 10;
const apple = new Apple(GRID_SIZE);
export const score = new Score(0);
let lastRenderTime = 0;
let pause = false;
let start = true;

window.addEventListener("load", () => {
    if (Number.isNaN(score.getBest())) {
        showStartMessage();
        start = false;
    }
})

gameBoard.addEventListener("click", function () {
    start = true;
})

quitBtn.addEventListener('click', () => { score.reset(), quit() })
pauseBtn.addEventListener('click', () => { togglePause() })

function gameLoop(currentTime) {
    if (score.getSpeedThreshold()) {
        snake.snakeSpeed = 4;
    }
    if (snake.gameOver) {
        score.storeBest();
        if (confirm("GAMEOVER. \n Press OK to start new game or \n QUIT below to quit & EXIT")) {
            window.location = '/';
        }
        return
    }

    window.requestAnimationFrame(gameLoop);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / snake.snakeSpeed) return;
    lastRenderTime = currentTime;
    if (start) {
        draw(gameBoard);
        quitBtn.style.display = 'inline-block';
        pauseBtn.style.display = 'inline-block';
    }

    if (!pause) {
        update();
    }
}

function draw(gameBoard) {
    gameBoard.innerHTML = ' ';
    snake.draw(gameBoard);
    apple.draw(gameBoard);
    score.draw();
}

function update() {
    snake.update();
    snake.checkDeath(GRID_SIZE);
    apple.update(snake, GRID_SIZE);
}

function togglePause() {
    if (!pause) {
        pause = true;
        pauseBtn.innerText = 'resume';
    }
    else if (pause) {
        pause = false;
        pauseBtn.innerText = 'pause';
    }
}

if (!pause) {
    window.requestAnimationFrame(gameLoop)
}

function quit() {
    window.close();
}

function showStartMessage() {
    const message = document.createElement('div');
    message.style.gridRowStart = 3;
    message.style.lineHeight = '3em';
    message.style.gridRowEnd = 10;
    message.style.gridColumnStart = 3;
    message.style.gridColumnEnd = 9;
    message.innerText = "Welcome! \n Click here to start. \n Use arrow keys to control & get moving";
    gameBoard.appendChild(message)
}



