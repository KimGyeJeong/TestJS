// OS 모듈.
// 웹 브라우저에 사용되는 자바스크립트는 OS의 정보를 가져올 수 없지만
// 노드는 OS 모듈에 정보가 담겨 있어 정보를 가져올 수 있음.

const os = require('os');

console.log('운영체제 정보--------------------------------');
console.log('os.arch():', os.arch()); // 프로세서의 아키텍처를 보여줌.           process.arch와 동일
console.log('os.platform():', os.platform()); // 운영체제 플랫폼을 보여줌.      process.platform과 동일
console.log('os.type():', os.type()); // 운영체제의 종류를 보여줌.
console.log('os.uptime():', os.uptime()); // 운영체제 부팅 이후 흐른 시간(초)을 보여줌.  process.uptime()은 노드의 실행 시간.
console.log('os.hostname():', os.hostname()); // 컴퓨터의 이름을 보여줌.
console.log('os.release():', os.release()); // 운영체제의 버전을 보여줌.

console.log('경로--------------------------------');
console.log('os.homedir():', os.homedir()); // 홈 디렉터리 경로를 보여줌.
console.log('os.tmpdir():', os.tmpdir()); // 임시 파일 저장 경로를 보여줌.

console.log('cpu 정보--------------------------------');
console.log('os.cpus():', os.cpus()); // 컴퓨터의 코어 정보를 보여줌.
console.log('os.cpus().length:', os.cpus().length); // 코어 개수를 보여줌.

console.log('메모리 정보--------------------------------');
console.log('os.freemem():', os.freemem()); // 사용 가능한 메모리(RAM)를 보여줌.
console.log('os.totalmem():', os.totalmem()); // 전체 메모리 용량을 보여줌.

// 결과...........
// 운영체제 정보--------------------------------
//     os.arch(): x64
// os.platform(): win32
// os.type(): Windows_NT
// os.uptime(): 3523
// os.hostname(): TOTORO
// os.release(): 10.0.19044
// 경로--------------------------------
//     os.homedir(): C:\Users\pmwkd
// os.tmpdir(): C:\Users\pmwkd\AppData\Local\Temp
// cpu 정보--------------------------------
//     os.cpus(): [
//     {
//         model: 'AMD Ryzen 5 2600X Six-Core Processor           ',
//         speed: 3593,
//         times: { user: 473453, nice: 0, sys: 286281, idle: 2763562, irq: 43218 }
//     },
//     {
//         model: 'AMD Ryzen 5 2600X Six-Core Processor           ',
//         speed: 3593,
//         times: { user: 148265, nice: 0, sys: 197703, idle: 3177328, irq: 4093 }
//     },
//     {
//         model: 'AMD Ryzen 5 2600X Six-Core Processor           ',
//         speed: 3593,
//         times: { user: 425750, nice: 0, sys: 225125, idle: 2872421, irq: 1953 }
//     },
//     {
//         model: 'AMD Ryzen 5 2600X Six-Core Processor           ',
//         speed: 3593,
//         times: { user: 160328, nice: 0, sys: 147656, idle: 3215312, irq: 859 }
//     },
//     {
//         model: 'AMD Ryzen 5 2600X Six-Core Processor           ',
//         speed: 3593,
//         times: { user: 355046, nice: 0, sys: 178250, idle: 2989812, irq: 1593 }
//     },
//     {
//         model: 'AMD Ryzen 5 2600X Six-Core Processor           ',
//         speed: 3593,
//         times: { user: 163671, nice: 0, sys: 138875, idle: 3220562, irq: 812 }
//     },
//     {
//         model: 'AMD Ryzen 5 2600X Six-Core Processor           ',
//         speed: 3593,
//         times: { user: 460328, nice: 0, sys: 214656, idle: 2848125, irq: 1843 }
//     },
//     {
//         model: 'AMD Ryzen 5 2600X Six-Core Processor           ',
//         speed: 3593,
//         times: { user: 342937, nice: 0, sys: 151531, idle: 3028640, irq: 1171 }
//     },
//     {
//         model: 'AMD Ryzen 5 2600X Six-Core Processor           ',
//         speed: 3593,
//         times: { user: 583187, nice: 0, sys: 260109, idle: 2679812, irq: 4718 }
//     },
//     {
//         model: 'AMD Ryzen 5 2600X Six-Core Processor           ',
//         speed: 3593,
//         times: { user: 260531, nice: 0, sys: 118265, idle: 3144312, irq: 984 }
//     },
//     {
//         model: 'AMD Ryzen 5 2600X Six-Core Processor           ',
//         speed: 3593,
//         times: { user: 382781, nice: 0, sys: 167515, idle: 2972812, irq: 1750 }
//     },
//     {
//         model: 'AMD Ryzen 5 2600X Six-Core Processor           ',
//         speed: 3593,
//         times: { user: 480843, nice: 0, sys: 155296, idle: 2886968, irq: 2671 }
//     }
// ]
// os.cpus().length: 12
// 메모리 정보--------------------------------
//     os.freemem(): 17048551424
// os.totalmem(): 34289180672
