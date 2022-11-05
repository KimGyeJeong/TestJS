// WHATWG 방식의 url 대신 기존 노드의 url을 사용할때, search 부분을 사용하기 쉽게 객체로 만드는 모듈

const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
const query = querystring.parse(parsedUrl.query);

console.log('querystring.parse():', query);
console.log('querystring.stringify():', querystring.stringify(query));

// 결과.........
// querystring.parse(): [Object: null prototype] {
//     page: '3',
//         limit: '10',
//         category: [ 'nodejs', 'javascript' ]
// }
// querystring.stringify(): page=3&limit=10&category=nodejs&category=javascript

// querystring.parse(쿼리) : 주어진 URL 쿼리를 자바스크립트 객체로 분해함
// querystring.stringify(객체) : 분해된 URL 쿼리를 문자열로 다시 조립함