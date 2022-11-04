const string = "abc";
const number = 1;
const boolean = true;
const obj = {
    outside: {
        inside: {
            key: "value",
        },
    },
};

console.time("전체 시간");
console.log("평범한 로그입니다. 쉼표로 구분해 여러 값을 찍을 수 있습니다.");
console.log(string, number, boolean);
console.error("에러 메시지는 console.error에 담아주세요");

console.table([{ name: "제로", birth: 1994 }, { name: "hero", birth: 1988 }]);

console.dir(obj, { colors: false, depth: 2 });
console.dir(obj, { colors: true, depth: 1 });

console.time("시간 측정");
for (let i = 0; i < 100000; i++) {}
console.timeEnd("시간 측정");

function b() {
    console.trace("에러 위치 추적");
}
function a() {
    b();
}
a();

console.timeEnd("전체 시간");

// console.time(레이블) : console.timeEnd(레이블)과 대응되어 같은 레이블을 가진 time과 timeEnd 사이의 시간을 측정합니다.
// console.log(내용) : 콘솔에 내용을 출력합니다.
// console.error(에러 내용) : 에러를 콘솔에 표시합니다.
// console.table(배열) : 배열의 요소로 객체 리터럴을 넣으면, 객체의 속성들이 테이블 형식으로 표현됩니다.
// console.dir(객체, 옵션) : 객체를 콘솔에 표시할 때 사용합니다. 첫 번째 인수로 표시할 객체를 넣고, 두 번째 인수로 옵션을 넣습니다.
// console.trace(레이블) : 에러가 어디서 발생했는지 추적할 수 있게 합니다.