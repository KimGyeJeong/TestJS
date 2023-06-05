const fetchData = callback => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log('Timer is done!');
// fetchData(text => console.log(text))
    fetchData()
        .then(done => {
            console.log(done);

            // fetchData().then(done2 => {
            //     console.log(done2);
            // });
            return fetchData();
        })
        .then(done2 => {
            console.log(done2);
        });
}, 2000);

console.log('hello');
console.log('hi');

