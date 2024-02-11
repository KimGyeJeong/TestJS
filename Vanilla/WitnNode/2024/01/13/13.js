let test = 'hello world';

console.log(test);


const promiseTest = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve('promiseTest resolve');
    }, 2000);

});

promiseTest.then((data) => {
    console.log(data);
});

const promiseTest2 = new Promise((resolve, reject) => {

    setTimeout(() => {
        reject('promiseTest2 reject');
    }, 2000);

});

promiseTest2.then((data) => {
    console.log('then' + data);
}).catch(Error => {
    console.log('catch ' + Error);
});


promiseTest.then((e) => {
    console.log('then ' + e);
}).catch((e) => {
    console.log('err ' + e);
}).finally((e) => {
    console.log('finally ' + e);
    return promiseTest2;
}).then((e) => {
    console.log('then ' + e);
}).catch((e) => {
        console.log('err ' + e);
    }
);