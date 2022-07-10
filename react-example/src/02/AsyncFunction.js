/**
 * 비동기 함수
 */

// 기존 자바스크립트 방식
function work1(onDone) {
    setTimeout(() => onDone('Successed Work 1'), 100);
}

function work2(onDone) {
    setTimeout(() => onDone('Successed Work 2'), 200);
}

function work3(onDone) {
    setTimeout(() => onDone('Successed Work 3'), 300);
}

function urgentWork() {
    console.log('Emergency Work');
}

work1(function (msg1) {
    console.log('done after 100ms: ', msg1);
    work2(function (msg2) {
        console.log('done after 300ms: ', msg2);
        work3(function (msg3) {
            console.log('done after 600ms: ', msg3);
        });
    });
});
urgentWork();

//ES6의 비동기 처리 방식
const es_work1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Successed Work1');
        }, 100);
    });
};

const es_work2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Successed Work2');
        }, 200);
    });
};

const es_work3 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Successed Work3');
        }, 300);
    });
};

const nextWorkOnDone = (msg1) => {
    console.log('done after 100ms:' + msg1);
    return es_work2();
};

es_work1()
    .then(nextWorkOnDone)
    .then((msg2) => {
        console.log('done after 200ms:' + msg2);
        return es_work3();
    })
    .then((msg3) => {
        console.log('done after 300ms:' + msg3);
    });
urgentWork();
