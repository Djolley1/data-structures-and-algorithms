const repeatedWord = require('./index.js');

function testRepeatedWord() {

  let input1 = "Once upon a time, there was a brave princess who...";
  console.assert(repeatedWord(input1) === "a", `Test 1 Failed: ${repeatedWord(input1)}`);

  let input2 = "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...";
  console.assert(repeatedWord(input2) === "it", `Test 2 Failed: ${repeatedWord(input2)}`);

  let input3 = "It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...";
  console.assert(repeatedWord(input3) === "summer", `Test 3 Failed: ${repeatedWord(input3)}`);

  let input4 = "This is a unique string with no repetition";
  console.assert(repeatedWord(input4) === null, `Test 4 Failed: ${repeatedWord(input4)}`);

  let input5 = "hello hello world";
  console.assert(repeatedWord(input5) === "hello", `Test 5 Failed: ${repeatedWord(input5)}`);

  console.log("All test cases passed!");
}

testRepeatedWord();
