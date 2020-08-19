const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {
  searchSpace = this.phrase.toLowerCase();
  return this.alphabet.every((letter) => {
    return searchSpace.indexOf(letter) > -1;
  });
}

module.exports = PangramFinder;
