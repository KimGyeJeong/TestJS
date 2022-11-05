const {URL} = require('url');

const myURL = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');

console.log('searchParams:', myURL.searchParams);
console.log('searchParams.getAll():', myURL.searchParams.getAll('category'));
console.log('searchParams.get():', myURL.searchParams.get('limit'));
console.log('searchParams.has():', myURL.searchParams.has('page'));

console.log('searchParams.keys():', myURL.searchParams.keys());
console.log('searchParams.values():', myURL.searchParams.values());

myURL.searchParams.append('filter', 'es3');
myURL.searchParams.append('filter', 'es5');
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.set('filter', 'es6');
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.delete('filter');
console.log(myURL.searchParams.getAll('filter'));

console.log('searchParams.toString():', myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString();

// 결과.........
// searchParams: URLSearchParams {
//     'page' => '3',
//         'limit' => '10',
//         'category' => 'nodejs',
//         'category' => 'javascript' }
// searchParams.getAll(): [ 'nodejs', 'javascript' ]
// searchParams.get(): 10
// searchParams.has(): true
// searchParams.keys(): URLSearchParams Iterator { 'page', 'limit', 'category', 'category' }
// searchParams.values(): URLSearchParams Iterator { '3', '10', 'nodejs', 'javascript' }
// [ 'es3', 'es5' ]
//     [ 'es6' ]
//     []
// searchParams.toString(): page=3&limit=10&category=nodejs&category=javascript

//getAll(키) : 키에 해당하는 모든 값을 가져옴
//get(키) : 키에 해당하는 첫 번째 값만 가져옴
//has(키) : 해당 키가 있는지 없는지 검사
//keys() : searchParams의 모든 키를 반복기 객체로 가져옴
//values() : searchParams의 모든 값을 반복기 객체로 가져옴
//append(키, 값) : 해당 키를 추가함. 이미 해당 키가 있으면 그 값을 유지한 채로 값만 추가함
//set(키, 값) : 해당 키를 추가함. 이미 해당 키가 있으면 값을 덮어씀
//delete(키) : 해당 키를 제거함
//toString() : 조작한 searchParams 객체를 다시 문자열로 만듦
