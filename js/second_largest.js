let a = 352;
let b =53;
let c =999 ;
if( a < b && b < c || b <a && b>c){
    console.log("b is the second largest");
}
if( a < c && c < b || c <a && c >b){
    console.log("c is the second largest");
}
if( b < a && a < c || c<a && a<b){
    console.log("a is the second largest");
}