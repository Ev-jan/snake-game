import { onSnake, snakeGrows } from './snake.js'
let apple = {x: 5, y: 1}
const GROWTH_RATE = 1

export function update() {
        if (onSnake(apple)) {
            snakeGrows(GROWTH_RATE)
            apple = {x: 20, y: 10}
        }
    }

export function draw(gameBoard) {
        const appleCell = document.createElement('div')
        appleCell.style.gridRowStart = apple.y
        appleCell.style.gridColumnStart = apple.x
        appleCell.classList.add('apple')
        gameBoard.appendChild(appleCell)
}