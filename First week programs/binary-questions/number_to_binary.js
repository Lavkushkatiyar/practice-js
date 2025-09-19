// To change number to binary
const inputNumber = 10;
let binaryOfNumber = 0;
let temp = inputNumber;
let counter = 0;
let powerToMultipy = 1;

while (temp > 1) {
    if (temp % 2 == 0) {
        binaryOfNumber = binaryOfNumber + 0 * powerToMultipy;
    } else {
        binaryOfNumber = binaryOfNumber + 1 * powerToMultipy;
        temp = temp - 1;
    }
    temp = (temp - (temp % 2)) / 2;
    counter++;
    powerToMultipy = powerToMultipy * 10;
}
binaryOfNumber = binaryOfNumber + 1 * powerToMultipy;
console.log(binaryOfNumber)