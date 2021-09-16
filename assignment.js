// (Here will be github-link)
// Kilometer To Meter
function kilometerToMeter(ktm) {
    let result = ktm * 1000;
    return result;
};
let kiloToM = kilometerToMeter(10);
//console.log(kiloToM);

// Budget Calculator
function budgetCalculator(w, m, l) {
    let watch = w * 50;
    let mobile = m * 100;
    let laptop = l * 500;
    let sum = watch + mobile + laptop;
    return sum;
};
let total = budgetCalculator(2, 2, 3);
//console.log(total);

// Hotel Cost
function hotelCost(day) {
    let cost = 0;
    if (day <= 10) {
        cost = day * 100;
    }
    else if (day <= 20) {
        let first10 = 10 * 100;
        let reamining = day - 10;
        let second20 = reamining * 80;
        cost = first10 + second20;
    }
    else  {
        let first10 = 10 * 100;
        let second20 = 10 * 80;
        let reaming = day - 20;
        let thirdPart = reaming * 60;
        cost = first10 + second20 + thirdPart;
    }
    return cost;
};
let totalCost = hotelCost(30);
//console.log(totalCost);

// Finst Longest word in a array javascript use for loop
const arr = ["Bakul", "Shahana", "Banna", "Shohag", "Shohan", "Sujon"];
let longest = "";
for (let i = 0; i < arr.length; i++) {
    if (arr.length > longest.length) {
        longest = arr.length;
    }
    console.log(longest);
}