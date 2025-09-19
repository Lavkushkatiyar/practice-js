
const startRange = 50;
const endRange = 100
let ourFinding;
for(let numberToCheck = startRange; numberToCheck < endRange; numberToCheck++){
ourFinding = numberToCheck %2 ==0 ? 'is Even' : 'is Odd'
console.log(numberToCheck, ourFinding)
}
