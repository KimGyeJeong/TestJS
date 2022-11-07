/*
파일을 읽거나 쓰는 방식에는 크게 두 가지 방식, 즉 버퍼를 이용하는 방식과 스트림을 이용하는 방식이 있음.

노드는 파일을 읽을 때 메모리에 파일 크기만큼 공간을 마련해두며 파일 데이터를 메모리에 저장한 뒤 사용자가 조작할 수 있도록 함.
이때 메모리에 저장된 데이터가 바로 버퍼임.

버퍼를 직접 다룰 수 있는 클래스 --> Buffer
 */

console.time('here');

const buffer = Buffer.from('저를 버퍼로 바꿔보세요');

console.log('from():', buffer);
console.log('length:', buffer.length);
console.log('toString():', buffer.toString());

const array = [Buffer.from('띄엄'), Buffer.from('띄엄'), Buffer.from('띄어쓰기')];
const buffer2 = Buffer.concat(array);
console.log('concat():', buffer2.toString());

const buffer3 = Buffer.alloc(5);
console.log('alloc():', buffer3);

console.timeEnd('here');

// 결과........
// from(): <Buffer ec a0 80 eb a5 bc 20 eb b2 84 ed 8d bc eb a1 9c 20 eb b0 94 ea bf 94 eb b3 b4 ec 84 b8 ec 9a 94>
// length: 32
// toString(): 저를 버퍼로 바꿔보세요
// concat(): 띄엄띄엄띄어쓰기
// alloc(): <Buffer 00 00 00 00 00>
// here: 6.87ms

// buffer 객체의 메서드
// Buffer.from(문자열): 문자열을 버퍼로 바꿔줌.
// Buffer.concat(배열): 배열 안에 든 버퍼들을 하나로 합쳐줌.
// Buffer.alloc(바이트): 빈 버퍼를 생성해줌. 바이트는 버퍼의 크기를 의미함.
// Buffer.toString(버퍼): 버퍼를 다시 문자열로 바꿔줌.

/*

 */