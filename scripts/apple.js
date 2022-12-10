import { snake } from "./main.js";
import { GRID_SIZE } from "./main.js";

class Apple {
    apple = this.#getPosition();
    constructor(apple) {
        apple = this.apple;
    }

    draw(gameBoard) {
        const appleCell = document.createElement('div');
        appleCell.style.gridRowStart = this.apple.y;
        appleCell.style.gridColumnStart = this.apple.x;
        appleCell.classList.add('apple');
        gameBoard.appendChild(appleCell)
    }

    #getPosition() {
        let newPosition;
        while (newPosition == null || snake.onSnake(newPosition)) {
            newPosition = {
                x: Math.floor(Math.random() * GRID_SIZE) + 1,
                y: Math.floor(Math.random() * GRID_SIZE) + 1
            };
        }
        return newPosition
    }

    update(snake) {
        if (snake.onSnake(this.apple)) {
            snake.snakeGrows(snake.growthRate);
            this.apple = this.#getPosition(GRID_SIZE);
        }
    }
}

export default Apple;



