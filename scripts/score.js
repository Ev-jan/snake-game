class Score {
    _countCurrent = document.getElementById('count_current');
    _countBest = document.getElementById('count_best');
    _bestStored = parseInt(localStorage.getItem('bestScore'));
    constructor(score) {
        this._score = score;
    }
    draw() {
        this._countCurrent.innerText = `current score ${this._score}`;
        this._countBest.innerText = `best score ${this.checkBest()}`;
    }

    increase() {
        this._score += 1;
    }

    getSpeedThreshold() {
        if (this._score >= 3)
            return true
    }

    getScore() {
        return this._score
    }

    getBest() {
        return this._bestStored
    }

    storeBest() {
        localStorage.setItem('bestScore', `${this.checkBest()}`)
    }

    checkBest() {
        if (this._bestStored > this._score) {
            return this._bestStored
        }
        else return this._score
    }

    reset() {
        localStorage.setItem('bestScore', 'NaN');
        this._bestStored = parseInt(localStorage.getItem('bestScore'));
        this.checkBest();
        this.draw();
    }
}

export default Score;