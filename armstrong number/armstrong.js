let inputNumber = 153;


// findout the length of the inputNumber
let copyOfInputNumber = inputNumber;
let lengthCounter = 0;

while (copyOfInputNumber > 1) {
    copyOfInputNumber = copyOfInputNumber / 10;
    lengthCounter++;
}
console.log(lengthCounter);

// reseting the copyofInputNumber value to the orginal ones

copyOfInputNumber = inputNumber;

let cubeSumOfDigits = 0;
while (copyOfInputNumber > 0) { // here we are extracting the digit and adding cube of it to the cubeSumOfdigits variable
    let copyOfLength = lengthCounter;
    let lastDigitOfNumber = copyOfInputNumber % 10;
    cubeSumOfDigits += lastDigitOfNumber * lastDigitOfNumber * lastDigitOfNumber;
    copyOfInputNumber = (copyOfInputNumber - (copyOfInputNumber % 10)) / 10;
}
if ((cubeSumOfDigits === inputNumber)) {// validating the sum with the orginal inputNumber to print the output.
    console.log('True ' + inputNumber + ' is an armstrong number')
}
else {
    console.log('False ' + inputNumber + 'is not an armstrong number')

}


