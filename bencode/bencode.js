
function isInvlidInput(input) {
    return false;
}
function isInteger(input) {
    if (input + "" === "NaN") return false;
    return typeof input === "number";
}
function isString(input) {
    return typeof input === "string";
}
function isObject(input) {
    return typeof input === "object";
}
function objectOutput(message) {
    return "l" + message + "e";
}
function incoding(input) {
    if (isInvlidInput(input)) return '';
    if (isInteger(input)) return (input === 0) ? "ie" : "i" + input + "e";

    if (isString(input)) return input.length + ":" + input;

    if (isObject(input)) {
        let text = "";
        for (let i = 0; i < input.length; i++) {

            if (isObject(input[i])) text += incoding(input[i]);

            else text += isInteger(input[i]) ? "i" + input[i] + "e" : input[i].length + ":" + input[i];
        }
        return objectOutput(text);
    }

}
function getAllInteger(input) {
    let text = '';
    for (let i = 0; i < input.length; i++) {
        if (isNaN(+input[i])) return text;
        text += input[i];
    }
    return text;
}
function decoding(inputString) {
    const outputArr = [];
    let curentPosition = 0;

    function decodeElement() {
        if (inputString[curentPosition] === 'i') {
            curentPosition++;
            const endPostion = inputString.indexOf('e', curentPosition);
            const number = +inputString.slice(curentPosition, endPostion);
            curentPosition = endPostion + 1;
            return number;
        }

        if (inputString[curentPosition] === 'l') {
            curentPosition++;
            const nestedObject = [];
            while (inputString[curentPosition] !== 'e') {
                nestedObject.push(decodeElement());
            }
            curentPosition++;
            return nestedObject;
        }

        const colonPos = inputString.indexOf(':', curentPosition);
        const lengthOfString = +inputString.slice(curentPosition, colonPos);
        curentPosition = colonPos + 1;
        const stringValue = inputString.slice(curentPosition, curentPosition + lengthOfString);
        curentPosition += lengthOfString;
        return stringValue;
    }
    const parsed = decodeElement();

    if (Array.isArray(parsed)) {
        for (let item of parsed) {
            outputArr.push(item);
        }
        return outputArr;
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
    console.log(expectedOutput);

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
    testCode("checking for the integer", "i123e", 123);
    testCode("checking for the string", "5:hello", "hello");
    testCode("checking for the objects ", "li1e3:twol5:threei4eee", [1, "two", ["three", 4]]);

    console.log();
}
function main() {
     incodingTestCase();
    decodingTestCase();


}
main();
