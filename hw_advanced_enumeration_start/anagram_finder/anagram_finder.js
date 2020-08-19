const AnagramFinder = function (word) {
    this.word = word.toLowerCase();
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    // sort the original word alphabetically (eg. "cat" --> "act", "javascript" --> "aacijprstv")
    // filter the given words:
    // // sort each given word, if it matches the sorted original word, it's an anagram.
    const sortedOriginalWord = this.word.split("").sort().join("");
    return otherWords.filter((checkWord) => {
        if (this.word !== checkWord.toLowerCase()) {
            const sortedCheckWord = checkWord.toLowerCase().split("").sort().join("");
            return sortedCheckWord === sortedOriginalWord;
        }
    });
}

module.exports = AnagramFinder;
