function makeAvg(numbers) {
    let numLength = numbers.length;
    let sum = 0;
    for (let number of numbers) {
        sum = sum + number;
    }
    console.log(sum);
    let avarage = sum / numLength;
    return avarage;
}
let intger = [24, 55, 15, 20, 19, 21, 23, 31];
let callaingNum = makeAvg(intger);
console.log(callaingNum);

