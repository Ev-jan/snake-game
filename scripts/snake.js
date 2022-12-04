import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 2;
const snakeBody = [   {x:5, y:5} ];
let newCells = 0

export function update() {
    const inputDirection = getInputDirection()
    for (let i = snakeBody.length - 2; i >=0;i--) {
        snakeBody[i+1] = {...snakeBody[i]}
    }
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}

export function draw(gameBoard) {
    snakeBody.forEach(cell => {
        const snakeCell = document.createElement('div')
        snakeCell.style.gridRowStart = cell.y
        snakeCell.style.gridColumnStart = cell.x
        snakeCell.classList.add('snake')
        gameBoard.appendChild(snakeCell)
    })
}

export function snakeGrows(amount) {
    newCells += amount
}

export function onSnake(position) {
    return snakeBody.some(cell => {
        return equalPositions(cell, position)
    })
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y
    
}