function countZero (zero) {
let isArr = zero.split("");
let j = 0;
for(let i = 0; i < isArr.length; i++ ){
    if(isArr[i] === "0" ){
        j++
    }
}
    return j;
}
let binaryString = "11001110000101";
let string = countZero(binaryString);
console.log(string);