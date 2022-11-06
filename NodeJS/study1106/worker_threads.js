// 노드에서 멀티 스레드 방식으로 작업하는 방법.

const {
    Worker, isMainThread, parentPort,
} = require('worker_threads');

if(isMainThread){   //부모일때 실행
    const worker = new Worker(__filename);
    worker.on('message', message => console.log('from worker', message));
    worker.on('exit', () => console.log('worker exit'));
    worker.postMessage('ping');
}else{              //워커일때 실행
    parentPort.on('message', (value) => {
        console.log('from parent', value);
        parentPort.postMessage('pong');
        parentPort.close();
    });
}

// 결과........
// from parent ping
// from worker pong
// worker exit

/*
isMainThread를 통해 현재 코드가 메인 스레드(기존에 동작하던 싱글 스레드를 메인 스레드 또는 부모 스레드라고 부름.)에서 실행되는지, 아니면 우리가 생성한 워커 스레드에서 실행되는지 구분됨.
메인 스레드에서는 new Worker를 통해 현재 파일(__filename)을 워커 스레드에서 실행시키고 있음. 물론 현재 파일의 else부분만 워커 스레드에서 실행 됨.

부모에서는 워커 생성 후 worker.postMessage로 워커에 데이터를 보낼 수 있음. 워커는 parentPort.on('message') 이벤트 리스너로 부모로부터 메시지를 받고,
parentPort.postMessage로 부모에게 메시지를 보냄. 부모는 worker.on('message') 이벤트 리스너로 워커로부터 메시지를 받음.
메시지를 한 번만 받고 싶으면 once('message')를 사용

워커에서 on 메서드를 사용할 때는 직접 워커를 종료해야 함!
parentPort.close()를 하면 부모와의 연결이 종료 됨. 종료될 때는 worker.on('exit') 이벤트 리스너가 실행됨.
 */