function oddNumber (number) {
    if(number % 2 === 1){
        let multipleNum = number * 2;
        return multipleNum;
    }
    else{
        let devideNum = number / 2;
        return devideNum;
    }
}
let num = 15;

const callingNum = oddNumber(num);
console.log(callingNum);
