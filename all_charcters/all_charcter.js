// so in this one we are going to print all the substring of an string 
let inputString = 'Hello!';
let iS = inputString;

console.log('Number of character in the string is ', iS.length);
let stringOutPut = ""
for(let start =0 ; start<iS.length; start++){//
for(let insideCounter = 0 ; insideCounter < start ; insideCounter++){
    let tempString ="";
    tempString = tempString + iS[insideCounter];

    console.log(tempString);
   
}
 console.log();
}