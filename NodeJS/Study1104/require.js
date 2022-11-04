console.log('require가 가장 위에 오지 않아도 됩니다.');

module.exports = '저를 찾아보세요.';

require('../Study1103/var');

console.log('require.cache 입니다.');
console.log(require.cache);
console.log('require.main 입니다.');
console.log(require.main === module);
console.log(require.main.filename);

// 결과 ....
// require가 가장 위에 오지 않아도 됩니다.
//     require.cache 입니다.
//     [Object: null prototype] {
//     'C:\\Users\\pmwkd\\WebstormProjects\\studynodejs\\nodejs\\study1104\\require.js': Module {
//         id: '.',
//             path: 'C:\\Users\\pmwkd\\WebstormProjects\\studynodejs\\nodejs\\study1104',
//             exports: '저를 찾아보세요.',
//             filename: 'C:\\Users\\pmwkd\\WebstormProjects\\studynodejs\\nodejs\\study1104\\require.js',
//             loaded: false,
//             children: [ [Module] ],
//             paths: [
//             'C:\\Users\\pmwkd\\WebstormProjects\\studynodejs\\nodejs\\study1104\\node_modules',
//             'C:\\Users\\pmwkd\\WebstormProjects\\studynodejs\\nodejs\\node_modules',
//             'C:\\Users\\pmwkd\\WebstormProjects\\studynodejs\\node_modules',
//             'C:\\Users\\pmwkd\\WebstormProjects\\node_modules',
//             'C:\\Users\\pmwkd\\node_modules',
//             'C:\\Users\\node_modules',
//             'C:\\node_modules'
//         ]
//     },
//     'C:\\Users\\pmwkd\\WebstormProjects\\studynodejs\\nodejs\\Study1103\\var.js': Module {
//         id: 'C:\\Users\\pmwkd\\WebstormProjects\\studynodejs\\nodejs\\Study1103\\var.js',
//             path: 'C:\\Users\\pmwkd\\WebstormProjects\\studynodejs\\nodejs\\Study1103',
//             exports: { odd: '홀수입니다', even: '짝수입니다' },
//         filename: 'C:\\Users\\pmwkd\\WebstormProjects\\studynodejs\\nodejs\\Study1103\\var.js',
//             loaded: true,
//             children: [],
//             paths: [
//             'C:\\Users\\pmwkd\\WebstormProjects\\studynodejs\\nodejs\\Study1103\\node_modules',
//             'C:\\Users\\pmwkd\\WebstormProjects\\studynodejs\\nodejs\\node_modules',
//             'C:\\Users\\pmwkd\\WebstormProjects\\studynodejs\\node_modules',
//             'C:\\Users\\pmwkd\\WebstormProjects\\node_modules',
//             'C:\\Users\\pmwkd\\node_modules',
//             'C:\\Users\\node_modules',
//             'C:\\node_modules'
//         ]
//     }
// }
// require.main 입니다.
//     true
// C:\Users\pmwkd\WebstormProjects\studynodejs\nodejs\study1104\require.js


// require.cache는 require로 불러온 모듈의 캐시를 보여줍니다.
// require.main은 실행 중인 모듈을 보여줍니다.
// require.main.filename은 실행 중인 모듈의 파일 경로를 보여줍니다.
// require.main === module은 실행 중인 모듈과 require.main이 같은지 비교한 결과를 보여줍니다.
// require.main === module은 항상 true가 나옵니다.