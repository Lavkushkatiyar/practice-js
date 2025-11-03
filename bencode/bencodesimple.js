function encodeObject(input) {
  let encodedString = "";
  for (let i = 0; i < input.length; i++) {
    encodedString += encoding(input[i]);
  }
  return "l" + encodedString + "e";
}

function encoding(data) {
  const dataType = typeof data;
  switch (dataType) {
    case "number": return "i" + data + "e";
    case "string": return data.length + ":" + data;
    case "object": return encodeObject(data);
  }
}

function decodedNumber(dataString, curentPosition) {
  curentPosition++;
  const endPostion = dataString.indexOf('e', curentPosition);
  const number = +dataString.slice(curentPosition, endPostion);
  curentPosition = endPostion + 1;
  return number;
}

function decodedObject(dataString, curentPosition) {
  curentPosition++;
  const nestedObject = [];
  while (dataString[curentPosition] !== 'e') {
    nestedObject.push(decodeElement(dataString, curentPosition));
    curentPosition++;
  }
  return nestedObject;
}

function stringValue(dataString, curentPosition) {
  const colonPos = dataString.indexOf(':', curentPosition);
  const lengthOfString = parseInt(dataString[colonPos - 1], 10);
  curentPosition = colonPos + 1;
  const stringValue = dataString.slice(curentPosition, curentPosition + lengthOfString);
  curentPosition += lengthOfString;
  return stringValue;
}

function decodeElement(dataString, curentPosition) {
  const currentElement = dataString[curentPosition];
  console.log(currentElement, "hii");
  switch (currentElement) {
    case "i": return decodedNumber(dataString, curentPosition);
    case "l": {
      console.log(curentPosition, "hu");
      return decodedObject(dataString, curentPosition);
    }
    default:
      console.log("i was here ", curentPosition);
      return stringValue(dataString + "", curentPosition);
  }
}

function decoding(dataString) {
  const decodedArray = [];
  let curentPosition = 0;

  const parsed = decodeElement(dataString, curentPosition);;

  if (typeof parsed === "object") {
    for (let item of parsed) {
      decodedArray.push(item);
    }
    return decodedArray;
  }
  return parsed;

}
function formatText(inputs, actualOutput, expectedOutput) {
  return `
   Inputs  : ${inputs}
   Actual  : ${actualOutput}
   Expected: ${expectedOutput}
   ----`;
}
function testCode(description, userinput, expectedOutput) {
  const actualOutput = decoding(userinput);
  console.log(actualOutput);
  // console.log(expectedOutput);
  const isEqual = actualOutput === expectedOutput;
  const symbol = isEqual ? "✅" : "❌";

  const headline = `${symbol} ${description}`;
  console.log(headline);

  if (!isEqual) {
    const input = `[ ${userinput}]`;
    const details = formatText(input, actualOutput, expectedOutput);
    console.log(details);
  }
}
function decodingTestCase() {

  console.log('\n decoding \n');
  //testCode("checking for the integer", "i123e", 123);
  //testCode("checking for the string", "5:hello", "hello");
  testCode("checking for the objects ", "li1e3:twol5:threei4eee", [1, "two", ["three", 4]]);

  console.log();
}
function incodingTestCase() {

  console.log('\n encoding \n');
  testCode("checking for the integer", 123, "i123e");
  testCode("checking for the string ", "special!@#$chars", "16:special!@#$chars");
  testCode("checking for the object ", ["apple", 123, ["banana", -5]], "l5:applei123el6:bananai-5eee");
  // testCode("checking for the string", "5:hello", "hello");
  // testCode("checking for the objects ", "li1e3:twol5:threei4eee", [1, "two", ["three", 4]]);

  console.log();
}
function main() {
  //incodingTestCase();
  decodingTestCase();


}
main();
