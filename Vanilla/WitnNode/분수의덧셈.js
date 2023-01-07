var answer = [0, 0];
//
// let denum1 = 1;
// let num1 = 2;
// let denum2 = 3;
// let num2 = 4;

let denum1 = 9;
let num1 = 2;
let denum2 = 1;
let num2 = 3;

// if(num1%num2 === 0){
//     let tempnum = num1/num2;
//     denum2*=tempnum;
//     denum1+=denum2;
//     answer[0] = denum1;
//     answer[1] = num1;
//
//     console.log(answer)
// }
// else if(num2%num1 === 0){
//     //이게 실행중..
//     let tempnum = num2/num1;
//
//     //2
//     // console.log(tempnum)
//     denum1*=tempnum;
//     denum2+=denum1;
//
//     answer[0]=denum2;
//     answer[1]=num2;
//
//     console.log(answer)
// }
// else{
//     denum1*=num2;
//     denum2*=num1;
//
//     answer[0]=denum1+denum2;
//     answer[1]=num1*num2;
//
//     console.log('33333333')
//     console.log(answer)X
//
// }

let dnum = denum1 * num2 + denum2 * num1;
console.log(dnum)
let num = num1 * num2;
console.log(num)

function cal_gcd(a, b) {
    return a % b === 0 ? b : cal_gcd(b, a % b)
}

let gcd = cal_gcd(dnum, num);

answer[0] = dnum/gcd;
answer[1] = num/gcd;
console.log(answer)