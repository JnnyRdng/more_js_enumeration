const IsogramFinder = function (word) {
    this.word = word.toLowerCase().split("");
}

IsogramFinder.prototype.isIsogram = function () {
    // for every letter in word
    // ~~remove that letter from word by index~~
    // ~~test if letter still in word~~
    // ~~if it is, it's not an isogram~~
    // scrap that.
    // if index of letter === lastIndexOf(letter) it's a unique character
    return this.word.every((letter, index, word) => {
        return word.lastIndexOf(letter) === index;
    });
}

module.exports = IsogramFinder;
