const dep2 = require('./dep2');

console.log('require dep2', dep2);

module.exports = () => {
    console.log('require dep2', dep2);
};

// require dep1 {}
// require dep2 [Function (anonymous)]
// require dep2 [Function (anonymous)]
// dep1 {}
// (node:38228) Warning: Accessing non-existent property 'Symbol(nodejs.util.inspect.custom)' of module exports inside circular dependency
// (Use `node --trace-warnings ...` to show where the warning was created)
// (node:38228) Warning: Accessing non-existent property 'constructor' of module exports inside circular dependency
// (node:38228) Warning: Accessing non-existent property 'Symbol(Symbol.toStringTag)' of module exports inside circular dependency
// (node:38228) Warning: Accessing non-existent property 'Symbol(nodejs.util.inspect.custom)' of module exports inside circular dependency
// (node:38228) Warning: Accessing non-existent property 'constructor' of module exports inside circular dependency
// (node:38228) Warning: Accessing non-existent property 'Symbol(Symbol.toStringTag)' of module exports inside circular dependency

/*
dep1의 module.exports 가 함수가 아니라 빈 객체로 표시됨.
이러한 현상을 순환 참조(circular reference)라고 함.

순환 참조가 있을 경우에는 순환 참조되는 대상을 빈 객체로 만듬. 이때 에러가 발생하지 않고 조용히 빈객체로 변경되므로 예기치 못한 동작이 발생할 수 있음.
순환 참조가 발생하지 않도록 구조를 잘 잡는 것이 중요함.
 */
