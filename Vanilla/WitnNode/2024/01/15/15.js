console.log('test');

class Test {
    constructor() {
        this.test = 'abcd';
        //test = 'abcd';    // ReferenceError: test is not defined
    }

    test() {
        // console.log(this.test);  // 'abcd'
        console.log(test);          // 'abcd'
    }

}

console.log(new Test().test);