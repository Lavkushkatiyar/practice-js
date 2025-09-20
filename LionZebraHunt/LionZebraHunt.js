const lion = "L";
const zebra = "Z";
let landOfHunt = "Z       L";
let isThereLion = false;
let isThereZebra = false;
let minDistance = Infinity;
let HuntStarts = false;
for (let i = 0; i < landOfHunt.length; i++) {
    if (landOfHunt[i] === "L") {
        isThereLion = true;
        let dist = 0;
        // checking the right side 
        for (let start = i + 1; start < landOfHunt.length; start++) {
            if (landOfHunt[start] === "Z") {
                isThereZebra = true;
                if (dist < minDistance) {
                    minDistance = dist;
                }
            }
            dist++;
        }
        dist = 0;
        // checking the left side 
        for (let start = i - 1; start >= 0; start--) {
              isThereZebra = true;
          
            if (landOfHunt[start] === "Z") {
                if (dist < minDistance) {
                    minDistance = dist;
                }
            }
                dist++;
        }

    }
}

if (isThereLion && isThereZebra) {
    console.log(minDistance);
}
else {
    console.log('-1');
}
