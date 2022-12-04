class Snake {
    constructor() {
        this.length = length;
        this.location = location;

    }
    snakeMoves() {
/*the snake moves 1 cell in .5 sec, which is pretty fast. What is the mechanics of movement? 
Let' peek under the hood. yeah. let's do it.
Movement is a perpetual cycle of adding 1 cell every .5 sec to the snake's head and deleting one cell from 
the snake's posterior. How exectly should the adding happen? Cells that compose the snake are styled using 
a dedicated css class e.g. which changes cell color to green. This way, every cell ahead of the snake should
 automatically received this class, and every cell behind should lose it. Key points to keep in mind here: 
 styling class and cell coordinates. Default movement pattern would be that the snake moves one cell in front of 
 the other. The snake should also be able to turn = > event listener to be set on the snake that listens for 
 left, right, up down keys being pressed.*/
    }
    snakeCollides() {

    }
    snakeDevours() {

    }
    snakeGrows() {
        
    }
    snakeDies() {

    }
}   

class Field {
    constructor() {

    }
}

class Apple {
    constructor() {
        // here go the properties that define an apple
        this.color = color;
        this.location = location;
    }
    applePopsUp() {
        // here goes code that picks up a random cell on the field and turns it into apple
    }
}


