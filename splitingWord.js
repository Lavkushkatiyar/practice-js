function isVowel(char) {
  if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
    return true;
  }
  return false;
}

function getnextConsonent(word, indx) {
  for (let index = indx; index < word.length; index++) {
    if (!isVowel(word[index])) return index;
  }
}

function getnextVowel(word, indx) {
  for (let index = indx; index < word.length; index++) {
    let currentChar = word[index];
    if (isVowel(currentChar)) return index;
  }
  return "";
}
function splitiingWord(word) {
  if (word === "") return word;
  let evaluatedAnswer = word[0];
  for (let index = 0; index < word.length - 1; index++) {
    const currentChar = word[index];
    if (isVowel(currentChar)) {
      const nextConsonent = getnextConsonent(word, index);
      evaluatedAnswer += word[nextConsonent];
      index = nextConsonent - 1;
    }
    else {
      const nextVowel = getnextVowel(word, index);
      evaluatedAnswer += word[nextVowel];
      index = nextVowel - 1;
    }
      console.log("index " , index);
  }
  
  return evaluatedAnswer;
}
function combiningLeftCharcters(word, evaluatedResult) {
  let finalAnswer = evaluatedResult;
  if (finalAnswer === "") return finalAnswer;
  let counter = 0;
  for (let index = 0; index < word.length; index++) {
    if (word[index] === evaluatedResult[counter]) {
      counter++;
    }
    else {
      finalAnswer += "," + word[index];
    }
  }
  return finalAnswer;
}

function toPrintResult(actualAnswer, evaluatedResult) {
  const expectedAnswer = "expected result = " + actualAnswer;
  const evaluatedAnswer = " evaluated result = " + evaluatedResult;
  const wholeMessage = expectedAnswer + " || " + evaluatedAnswer;
  return wholeMessage;
}

function resultIndicator(evaluatedResult, actualResult) {
  return evaluatedResult === actualResult ? "✅" : "❌";
}

function testCode(word, actualAnswer) {
  const evaluatedResult = splitiingWord(word);
  const finalResult = combiningLeftCharcters(word, evaluatedResult);
  const indicator = resultIndicator(finalResult, actualAnswer);
  const input = "[" + word + " , " + actualAnswer + "]";
  console.log(indicator, input, toPrintResult(actualAnswer, finalResult));
}

function main() {
  testCode('hello', 'helo,l');
  testCode("apple", "ape,p,l");
  testCode("there", "tere,h");
  testCode("hello", "helo,l");
  testCode("", "");
}

main();
