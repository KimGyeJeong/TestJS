//Date
//날짜와 시간(연, 월, 일, 시, 분, 초, 밀리초)을 위한 메서드를 제공하는 빌트인 객체이면서 생성자 함수이다.

//new Date()
//Date 생성자 함수를 인수 없이 new 연산자와 함께 호출하면 현재 날짜와 시간을 가지는 Date 객체를 반환한다.
console.log(new Date());    //2023-03-15T10:39:36.003Z

//new Date(milliseconds)
//숫자 타입의 밀리초를 인수로 전달하면 1970년 1월 1일을 기점으로 인수로 전달된 밀리초만큼 경과한 날짜와 시간을 나타내는 Date 객체를 반환함
// 한국 표준시 KST는 협정 세계시 UTC+9
console.log(new Date(0));   //1970-01-01T00:00:00.000Z

console.log(new Date(86400000));   //1970-01-02T00:00:00.000Z


//new Date(dateString)
//날짜와 시간을 나타내는 문자열을 인수로 전달하면 지정된 날짜와 시간을 나타내는 Date 객체를 반환함
console.log(new Date('May 26, 2023 10:00:00'));  //2023-05-26T01:00:00.000Z
console.log(new Date('2023/05/20/10:00:00'));   //2023-05-20T01:00:00.000Z


//new Date(year, month[, day, hour, minute, second, millisecond])
//연, 월, 일, 시, 분, 초, 밀리초를 인수로 전달하면 지정된 날짜와 시간을 나타내는 Date 객체를 반환함

// 월을 나타내는 2는 3월을 의미함
console.log(new Date(2023, 2, 1));  //2023-03-01T00:00:00.000Z

console.log('2023/03/01 : ' + new Date('2023/03/01'));    //2023/03/01 : Wed Mar 01 2023 00:00:00 GMT+0900 (대한민국 표준시)



//Date 메서드
//Date.now
const now_1 = Date.now();
console.log(now_1); //1615800376000
console.log(typeof now_1);  //number
console.log(new Date(now_1));   //2021-03-15T01:39:36.000Z

//Date.parse
//인수로 전달된 지정 시간까지의 밀리초를 숫자로 반환함
const now_2 = Date.parse('Jan 2, 2023 00:00:00 UTC');
console.log(now_2); //1672617600000
//console.log(Date.parse('Jan 2, 2023 00:00:00 KTC'));  //1672617600000

//Date.UTC
//인수로 전달된 지정 시간까지의 밀리초를 숫자로 반환함
console.log(Date.UTC(1970, 0, 2));  //86400000
console.log(Date.UTC(2023, 2, 1));  //1672617600000

//Date.prototype.getFullYear
//Date 객체의 연도를 나타내는 정수를 반환함
console.log(new Date().getFullYear());  //2023
console.log(new Date(2023, 2, 1).getFullYear());  //2023

//Date.prototype.setFullYear
//Date 객체에 연도를 나타내는 정수를 설정함
const date_1 = new Date();

// 년도 지정
console.log(date_1.setFullYear(2024));  //1615800376000
console.log(date_1);    //2024-03-15T01:39:36.000Z
console.log(date_1.getFullYear());  //2024

// 년도/월/일 지정
console.log(date_1.setFullYear(2025, 4, 1));  //1615800376000
console.log(date_1);    //2025-05-01T01:39:36.000Z
console.log(date_1.getFullYear());  //2025

//Date.prototype.getMonth
//월을 나타내는 0~11의 정수를 반환함
console.log(new Date('2023/01/01').getMonth());  //0

//Date.prototype.setMonth
//월을 나타내는 0~11의 정수를 설정함
const date_2 = new Date();

// 월 지정
console.log(date_2.setMonth(0));    //1673792426461
//console.log(date_2.setMonth()); //1673792426461

// 월/일 지정
console.log(date_2.setMonth(11, 1));    //1701440508626
console.log(date_2);    //2023-12-01T01:39:36.000Z

//Date(일), Day(요일), Hours(시), Minutes(분), Seconds(초), Milliseconds(밀리초)
//getTime 메서드는 1970년 1월 1일 0시 0분 0초(UTC)를 기준으로 현재까지의 시간을 밀리초로 반환함
//setTime 메서드는 1970년 1월 1일 0시 0분 0초(UTC)를 기준으로 인수로 전달된 시간까지의 밀리초를 설정함


(function printNow(){
    const today = new Date();

    const dayNames = ['(일요일)', '(월요일)', '(화요일)', '(수요일)', '(목요일)', '(금요일)', '(토요일)'];

    // getDay 메서드는 해당 요일(0~6)을 나타내는 정수를 반환함
    const day = dayNames[today.getDay()];

    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();

    let hour = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    let ampm = hour >= 12 ? 'PM' : 'AM';

    // 12시간제로 변경
    hour %= 12;
    hour = hour || 12;  // hour가 0이면 12로 변경

    // 10 미만인 분과 초를 2자리로 변경
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;

    const now = `${year}년 ${month}월 ${date}일 ${day} ${hour}:${minute}:${second} ${ampm}`;
    console.log(now);

    // 1초마다 printNow 함수를 호출함
    setTimeout(printNow, 1000);

})();