const fetchData =callback => {
    setTimeout(() => {
        callback('Done!');
    }, 1500);
};

setTimeout(() => {
console.log('Timer is done!');
fetchData(text => console.log(text))
}, 2000);

console.log('hello');
console.log('hi');

