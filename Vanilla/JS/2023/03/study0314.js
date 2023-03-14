//Math

//Math.Pi
//Pi 값 반환
console.log(Math.PI);   //3.141592653589793

//Math메서드
//Math.abs
//인수로 전달된 숫자의 절대값(absolute value)을 반환. 절대값은 반드시 0또는 양수이어야 함
console.log(Math.abs(-1));  //1
console.log(Math.abs(1));   //1
console.log(Math.abs('1')); //1
console.log(Math.abs('-1'));    //1
console.log(Math.abs(0));   //0
console.log(Math.abs(''));  //0
console.log(Math.abs(null));    //0
console.log(Math.abs([]));  //0
console.log(Math.abs([4]));  //4
console.log(Math.abs({}));  //NaN
console.log(Math.abs('string'));   //NaN
console.log(Math.abs(undefined));  //NaN
console.log(Math.abs());    //NaN
console.log(Math.abs(NaN)); //NaN
console.log(Math.abs(Infinity));    //Infinity
console.log(Math.abs([4,5]));   //NaN

//Math.round
//인수로 전달된 숫자의 소수점 이하를 반올림한 정수를 반환함
console.log(Math.round(0.4));   //0
console.log(Math.round(0.5));   //1
console.log(Math.round(0.6));   //1
console.log(Math.round(-0.4));  //0
console.log(Math.round(-0.5));  //-0
console.log(Math.round(-0.6));  //-1
console.log(Math.round());  //NaN

//Math.ceil
//인수로 전달된 숫자의 소수점 이하를 올림한 정수를 반환함.
console.log(Math.ceil(0.4));    //1
console.log(Math.ceil(0.5));    //1
console.log(Math.ceil(-0.4));   //-0
console.log(Math.ceil(-0.5));   //-0
console.log(Math.ceil(1));  //1
console.log(Math.ceil(-1)); //-1
console.log(Math.ceil());   //NaN

//Math.floor
//인수로 전달된 숫자의 소수점 이하를 내림한 정수를 반환함.
console.log(Math.floor(0.4));   //0
console.log(Math.floor(0.5));   //0
console.log(Math.floor(-0.4));  //-1
console.log(Math.floor(-0.5));  //-1
console.log(Math.floor(1)); //1
console.log(Math.floor(-1));    //-1
console.log(Math.floor());  //NaN

//Math.sqrt
//인수로 전달된 숫자의 제곱근을 반환함
console.log(Math.sqrt(1));  //1
console.log(Math.sqrt(4));  //2
console.log(Math.sqrt(9));  //3
console.log(Math.sqrt(-9)); //NaN
console.log(Math.sqrt(0));  //0
console.log(Math.sqrt());   //NaN

//Math.random
//임의의 난수를 반환함. 0에서 1미만의 실수를 반환함
console.log(Math.random());
let random_1 = Math.floor((Math.random() * 10)+1);
console.log(random_1);  //1~10

//Math.pow
//첫번째 인수를 밑(base)으로, 두번째 인수를 지수(exponent)로 하는 거듭제곱을 반환함
console.log(Math.pow(2, 3));    //8
console.log(Math.pow(2, 4));    //16
console.log(Math.pow(2));    //NaN

// ES7에서 도입된 지수 연산자
console.log(2 ** 3);    //8
console.log(2 ** 4);    //16
// console.log(2 **);  // SyntaxError: Unexpected token ')'
console.log(2 ** 0);  //1

//Math.max
//전달 받은 인수중에서 가장 큰 수를 반환함, 인수가 전달되지 않으면 -Infinity를 반환함
console.log(Math.max(1));   //1
console.log(Math.max(1, 2));    //2
console.log(Math.max(1, 2, 3)); //3
console.log(Math.max());    //-Infinity

// 배열의 요소 중에서 최대값을 구하려면 Function.prototype.apply 메서드 또는 스프레드 문법을 사용해야함
console.log(Math.max.apply(null, [1, 2, 3]));  //3

// ES6 스프레드 문법
console.log(Math.max(...[1, 2, 3]));  //3

//Math.min
//전달받은 인수중에서 가장 작은 수를 반환함. 인수가 전달되지 않으면 Infinity를 반환함
console.log(Math.min(1));   //1
console.log(Math.min(1, 2));    //1
console.log(Math.min(1, 2, 3)); //1
console.log(Math.min());    //Infinity

// 배열의 요소 중에서 최소값을 구하려면 Function.prototype.apply 메서드 또는 스프레드 문법을 사용해야 함
console.log(Math.min.apply(null, [1, 2, 3]));  //1
console.log(Math.min(...[1, 2, 3]));  //1