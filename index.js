// alpha this function should return array of 25 numbers from 65
function _alpha() {
  return Array.from(Array(26)).map((e, i) => i + 65);
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
  var currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

class AlphaBeta {
  constructor() {
    this.value = alphabets();
  }
  get val() {
    return this.value;
  }
  //call get the alphabets
  call() {
    return this;
  }

  //from get an array of alphabets from one point to another, eg(from(D,G))
  from(start, end) {
    if (start && end) {
      let _start = alphabets().findIndex((val) => {
        return val === start;
      });
      let _end = alphabets().findIndex((val) => {
        return val === end;
      });
      this.value = alphabets().splice(_start, _end);
      return this;
    }
    throw new Error(
      "the from method expects 2 argument a start and an end string"
    );
  }

  //random randomize the alphabets
  random() {
    this.value = shuffle(this.value);
    return this;
  }
}

module.exports = AlphaBeta;

// module.exports = new AlphaBeta
//
