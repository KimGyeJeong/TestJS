/*
 정수1: 1
 정수2: 2
 정수3: 3
 정수4: 4
 정수5: 5
 정수6: 0

 누적합 : 15, 평균 : 3 

프롬프트 순서대로 나와야함 탈출해서 누적합과 평균을 구해보자*/

let sum = 0;
let getNum = 0;
let count = 0;

while(true){
    getNum = +prompt('정수 : ');
    count++;
    sum += getNum;
    if(getNum === 0){
        break;
    }
}
console.log(`누적합 : ${sum}, 평균 : ${sum/(count-1)}`);