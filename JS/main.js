// let x = 532443+"";

// let str ="";

// for(let i = x.length-1;i>=0;i--){
//   str+=x.charAt(i);
// }
// console.log(str);

// q2

// for (let i = 0 ; i <= 15 ;i++){
//     if(i % 2 == 0)
//         console.log(`${i} is even`);
//     else
//         console.log(`${i} is odd`);

// }

// q3

let str = "orange";
let asciiCodes = [];
let result = '';


for (let i = 0; i < str.length; i++) {
    asciiCodes.push(str.charCodeAt(i));
}

function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {

        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {

                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}



let sortedNumbers = bubbleSort(asciiCodes);


for (let i = 0; i < asciiCodes.length; i++) {

    result += String.fromCharCode(asciiCodes[i]);
}

console.log(result);

// q4

// let num = prompt("Enter Number");
// let s2 = "";

// for (let i = 0; i < num.length ; i++) {
//   if (+num[i] % 2 == 0 && +num[i + 1] % 2 == 0){
//      s2 += num[i] + "-";
// } 
// else if(+num[i]%2==0 && +num[i + 1] % 2 != 0)
//     s2 += num[i] ;
//   else 
//   s2 += num[i];
// }

// console.log(s2);

// q5

// function AgeChecker(age) {
//   return age >= 18 ? "The user is Adult" : "The user is Minor";
// }

// console.log(AgeChecker(20));
// console.log(AgeChecker(15));


