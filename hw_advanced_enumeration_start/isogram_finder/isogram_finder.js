const IsogramFinder = function (word) {
    this.word = word;
}

IsogramFinder.prototype.isIsogram = function () {
    // for every letter in word
    // remove that letter from word by index
    // test if letter still in word
    // if it is, it's not an isogram
}

module.exports = IsogramFinder;
