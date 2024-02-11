let counter = 0;

setInterval(() => {
    process.send({ grandChildcounter: counter++ });
}, 4000);