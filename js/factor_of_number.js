const inputNumber = 4;
let numberOfFactors = 0;
for(let start =1; start<=inputNumber;start++)
if(inputNumber%start==0){
    numberOfFactors++;
}

console.log('the number of factors of ',inputNumber,'are ',numberOfFactors)