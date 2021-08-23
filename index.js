// alpha this function should return array of 25 numbers from 65
function _alpha() {
    return Array.from(Array(26)).map((e, i) => i + 65)
}

//alphabets retutn an array of character code
function alphabets() {
    return _alpha().map((x) => String.fromCharCode(x));
}

/**
 * 
 * @param {Array} array 
 * @returns {Array}
 *  Fisher-Yates (aka Knuth) Shuffle 
 */
//shuffle return a shuffled array
function shuffle(array) {
    var currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

// const alphaBeta = {
//     alphabets: [],
//     call: () => {
//         this.alphabets = alphabets()
//         return this
//     },

// }

// function AlphaBeta(c) {
//     this._alphabets = alphabets()
// }

// AlphaBeta.prototype.random = function () {
//     this._random = shuffle(this._alphabets)
//     return this
// }
class AlphaBeta {
    constructor() {
        this.value = alphabets();
    }

    call() {
        return this.value;
    }
    random() {
        this.value = shuffle(this.value)
        return this.value
    }

}

module.exports = new AlphaBeta()

// module.exports = new AlphaBeta
//