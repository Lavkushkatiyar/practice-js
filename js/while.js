
let range = 100;
let number =0;
while (number<range) {
    number++;
    if(number%3==0 || number%5==0){
        continue;
    }
    console.log(number);
}