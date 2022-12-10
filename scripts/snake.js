import { score } from "./main.js";

class Snake {
    #snakeBody = [{ x: 5, y: 5 }, { x: 5, y: 6 }];
    #newCells = 0;
    #inputDirection = { x: 0, y: 0 };
    #lastInputDirection = { x: 0, y: 0 };
    
    constructor() {
    this.snakeSpeed = 2;
    this.growthRate = 1;
    this.gameOver = false;
    }

    #control() {
        window.addEventListener('keydown', e => {
            switch (e.key) {
                case "ArrowUp":
                    if (this.#lastInputDirection.y !== 0) break
                    this.#inputDirection = { x: 0, y: -1 }
                    break
                case "ArrowDown":
                    if (this.#lastInputDirection.y !== 0) break
                    this.#inputDirection = { x: 0, y: 1 }
                    break
                case "ArrowLeft":
                    if (this.#lastInputDirection.x !== 0) break
                    this.#inputDirection = { x: -1, y: 0 }
                    break
                case "ArrowRight":
                    if (this.#lastInputDirection.x !== 0) break
                    this.#inputDirection = { x: 1, y: 0 }
                    break
            }
        })
    }

    #getInputDirection() {
        this.#lastInputDirection = this.#inputDirection;
        return this.#inputDirection
    }

    update() {
        if (this.#inputDirection.x !== 0 || this.#inputDirection.y !== 0) {
            for (let i = this.#snakeBody.length - 2; i >= 0; i--) {
                this.#snakeBody[i + 1] = { ...this.#snakeBody[i] }
            }
        }
        this.#control();
        this.#addCells();
        this.#inputDirection = this.#getInputDirection();
        this.#snakeBody[0].x += this.#inputDirection.x;
        this.#snakeBody[0].y += this.#inputDirection.y;
    }

    draw(gameBoard) {
        this.#snakeBody.forEach(cell => {
            const snakeCell = document.createElement('div');
            snakeCell.style.gridRowStart = cell.y;
            snakeCell.style.gridColumnStart = cell.x;
            snakeCell.classList.add('snake');
            gameBoard.appendChild(snakeCell)
        })
    }

    snakeGrows(amount) {
        this.#newCells += amount;
        score.increase();
    }

    onSnake(position, { ignoreHead = false } = {}) {
        return this.#snakeBody.some((cell, index) => {
            if (ignoreHead && index === 0) return false;
            return this.#equalPositions(cell, position)
        })
    }

    checkDeath(boudary) {
        this.gameOver = this.#outsideGameField(this.#getSnakeHead(), boudary) || this.#snakeEatSelf();
    }

    #outsideGameField(position, boudary) {
        return (
            position.x < 1 || position.x > boudary ||
            position.y < 1 || position.y > boudary
        )
    }

    #getSnakeHead() {
        return this.#snakeBody[0]
    }

    #snakeEatSelf() {
        return this.onSnake(this.#snakeBody[0], { ignoreHead: true })
    }

    #equalPositions(pos1, pos2) {
        return pos1.x === pos2.x && pos1.y === pos2.y
    }

    #addCells() {
        for (let i = 0; i < this.#newCells; i++) {
            this.#snakeBody.push({ ...this.#snakeBody[this.#snakeBody.length - 1] })
        }
        this.#newCells = 0;
    }
}

export default Snake;








