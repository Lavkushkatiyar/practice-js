const binaryOfNumber = 1010;
const substring = 10;
let temp = substring;
let copyOfbinary = binaryOfNumber;
let lengthOfString = 0;

//findout number in the substring
while (temp >= 1) {
    temp = temp / 10;
    lengthOfString++
}
console.log(lengthOfString);


 // comparing the numbers
  let multiplier =1;
 for(let start =0; start<lengthOfString;start++){
    multiplier = multiplier*10
 }
console.log(multiplier);
// multiplier to extract

let numberOfCount =0;
while(copyOfbinary>1){
 copyOfbinary = (copyOfbinary - (copyOfbinary%multiplier))/multiplier;
    if(substring === copyOfbinary){
        numberOfCount++;
    }
}
console.log(numberOfCount)



















//comparing the digit
// temp = substring
// while (temp > 1) {
//     find = binaryOfNumber % length;
//     if (find === temp) {
//         found++

//     }
//     temp = temp % length



// }
// console.log(found)