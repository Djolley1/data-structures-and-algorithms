function repeatedWord(str) {

  const words = str.toLowerCase().match(/\b\w+\b/g);
  const wordSet = new Set();

  for (let word of words) {
      if (wordSet.has(word)) {
          return word;
      }
      wordSet.add(word);
  }
  return null;
}

module.exports = repeatedWord;
