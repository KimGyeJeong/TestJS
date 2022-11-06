//child_process

// 노드에서 다른 프로그램을 실행하고 싶거나 명령어를 수행하고 싶을 때 사용하는 모듈
// 이 모듈을 통해 다른 언어의 코드(예. 파이썬)를 실행하고 결과값을 받을 수 있음.

const exec = require('child_process').exec;

const process = exec('dir');

process.stdout.on('data', function(data){
    console.log(data.toString());
}); // 실행 결과를 받아옴.

process.stderr.on('data', function(data){
    console.error(data.toString());
}); // 실행 중 에러가 발생했을 때 받아옴.

// 결과........
// C ����̺��� �������� �̸��� �����ϴ�.
// ���� �Ϸ� ��ȣ: 14C0-D558
//
//
// C:\Users\pmwkd\WebstormProjects\studynodejs\nodejs\study1106 ���͸�
//
// 2022-11-06  ���� 07:28    <DIR>          .
// 2022-11-06  ���� 07:28    <DIR>          ..
// 2022-11-06  ���� 04:01             1,696 cipher.js
// 2022-11-06  ���� 07:28               584 exec.js
// 2022-11-06  ���� 01:25             1,088 hash.js
// 2022-11-06  ���� 01:25               474 pbkdf2.js
// 2022-11-06  ���� 07:14             1,663 prime-worker.js
// 2022-11-06  ���� 03:52               706 prime.js
// 2022-11-06  ���� 06:01             1,851 util.js
// 2022-11-06  ���� 03:45             1,347 worker_data.js
// 2022-11-06  ���� 03:35             1,796 worker_threads.js
// 9�� ����              11,205 ����Ʈ
// 2�� ���͸�  126,291,877,888 ����Ʈ ����
