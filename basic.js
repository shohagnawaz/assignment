// var biscutPrice = 9;

// if( biscutPrice < 10 ) {
//     console.log("ami bicut khabo")
// }
// else {
//     console.log("Khali cha is better")
// }

// var date = new Date();

// console.log(date);

//Factorial

// function factorial(n) {
//     if(n == 0) {
//         return 1;
//     }
//     else {
//         return n * factorial(n-1);
//     }
// }

// let result = factorial(4);
// console.log(result);

// let n = 7;

// for(let i = 2; i < n-1; i++){
//     console.log(i, n % i)

//     if(n % i == 0) {
//         console.log("This is not a prime number");
//         break;
//     }
// }

//Find Larger Number

// function largerNumber(numbers) {
//     let larger = numbers[0];
//     for(let i = 0; i < numbers.length; i++) {
//         let element = numbers[i];
//         if (element > larger) {
//             larger = element;
//         };
//     };    
//     return larger;
// };

// let numbers = [11, 22, 33, 44, 55, 174, 66, 77, 88, 99];
// let output = largerNumber(numbers);
// console.log(output);

// let a = 5;
// let b = 7;
// console.log("Before swap a =", a, "b =", b)
// let temp = a;
// a = b;
// b = temp;
// console.log("After swap a =", a, "b =", b)

// let x = 5;
// let y = 7;
// x = x + y;
// y = x - y;
// x = x - y;
// console.log("After Swap x =", x, "y =", y)

// let p = 5;
// let q = 8;

// [p, q] = [q, p];
// console.log("After Swap p =", p, "q =", q)

//
// let num = 2.49;
// let result = Math.floor(num);
// let result2 = Math.ceil(num);
// let result3 = Math.round(num);
// let randomNum = Math.random() * 6;
// let output = Math.round(randomNum);
// console.log(output);

// let marks = [45, 50, 68, 90, 51, 23, 08, 64];
// let max = marks[0];
// for(let i = 0; i < marks.length; i++) {
//     let element = marks[i];
//     if(element > max){
//         max = element;
//     }
// }
// console.log(max);


// function getArraySum(marks) {
//     let sum = 0;
//     for(let i = 0; i < marks.length; i++) {
//     let element = marks[i];
//     sum = sum + element;
//     };
//     return sum;
// };
// let marks = [45, 50, 69, 95, 51, 23, 08, 64];
// let total = getArraySum(marks);
// console.log(total);

function add(a, b){
    return a + b;
}
console.log(add("adam" + "eve"));