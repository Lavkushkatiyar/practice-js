function isVowel(character) {
  return character === "a" || character === "e" || character === "i" || character === "o" || character === "u";
}

function findNext(word, startIndex, needVowel) {
  for (let index = startIndex; index < word.length; index++) {
    const currentChar = word[index];
    if (needVowel) {
      if (isVowel(currentChar)) return index;
    } else {
      if (!isVowel(currentChar)) return index;
    }
  }
  return -1;
}

function vowelConsonentsSequance(word) {
  if (word === "") return "";

  let sequence = word[0];
  let needVowel = !isVowel(word[0]);
  let currentIndex = 0;

  while (currentIndex < word.length) {
    const nextIndex = findNext(word, currentIndex + 1, needVowel);
    if (nextIndex === -1) break;
    sequence += word[nextIndex];
    currentIndex = nextIndex;
    needVowel = !needVowel;
  }
  return sequence;
}

function combinedLeftovers(word) {
  let finalResult = "";
  let remaining = word;
  let firstPart = true;

  while (remaining.length > 0) {
    let seq = vowelConsonentsSequance(remaining);
    if (seq === "") break;

    if (firstPart) {
      finalResult = seq;
      firstPart = false;
    } else {
      finalResult += "," + seq;
    }
    let leftover = "";
    let counter = 0;
    for (let index = 0; index < remaining.length; index++) {
      if (counter < seq.length && remaining[index] === seq[counter]) {
        counter++;
      } else {
        leftover += remaining[index];
      }
    }
    remaining = leftover;
  }

  return finalResult;
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
  const evaluatedResult = combinedLeftovers(word);
  const indicator = resultIndicator(evaluatedResult, actualAnswer);
  const input = "[" + word + " , " + actualAnswer + "]";
  console.log(indicator, input, toPrintResult(actualAnswer, evaluatedResult));
}

function main() {
  testCode("apple", "ape,p,l");
  testCode("there", "tere,h");
  testCode("hello", "helo,l");
  testCode("abyss", "ab,y,s,s");
  testCode("this", "tis,h");
  testCode("", "");
  testCode("cat", "cat");
  testCode("boat", "bot,a");
  testCode("applee", "ape,pe,l");
  testCode("rhythm", "r,h,y,t,h,m");
  testCode("programming", "pogamin,r,r,m,g");
  testCode("beautiful", "betiful,a,u");
  testCode("sequoia", "sequ,o,i,a");
  testCode("strength", "sen,t,r,g,t,h");
  testCode("education", "educatin,o");
  testCode("aeiou", "a,e,i,o,u");
  testCode("zzz", "z,z,z");
  testCode("mississippi", "misisipi,s,s,p");
  testCode("onomatopoeia", "onomatopo,e,i,a");
  testCode("aaabbb", "ab,ab,ab");
  testCode("aauubbcc", "ab,ab,uc,uc");
}

main();
