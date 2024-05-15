const validateBrackets = require('../index.js');

function runTests() {
  const tests = [
      { input: "{}", expected: true },
      { input: "{}(){}", expected: true },
      { input: "()[[Extra Characters]]", expected: true },
      { input: "(){}[[]]", expected: true },
      { input: "{}{Code}[Fellows](())", expected: true },
      { input: "[({}]", expected: false },
      { input: "(]", expected: false },
      { input: "{(})", expected: false },
      { input: "{", expected: false },
      { input: ")", expected: false },
      { input: "[}", expected: false },
      { input: "(((())))", expected: true },
      { input: "((({}))", expected: false },
      { input: "{[()()]}", expected: true },
      { input: "{[(])}", expected: false },
      { input: "", expected: true }, // edge case: empty string
      { input: "no brackets here", expected: true }, // edge case: no brackets
      { input: "[[[", expected: false }, // edge case: only opening brackets
      { input: "]]]", expected: false }, // edge case: only closing brackets
      { input: "[{({[{}]})}]", expected: true } // complex nested brackets
  ];

  tests.forEach((test, index) => {
      const result = validateBrackets(test.input);
      const passed = result === test.expected;
      console.log(`Test ${index + 1}: ${passed ? "Passed" : "Failed"}`);
      if (!passed) {
          console.log(`  Input: ${test.input}`);
          console.log(`  Expected: ${test.expected}, but got: ${result}`);
      }
  });
}

runTests();
