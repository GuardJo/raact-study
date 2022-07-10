/**
 * ES6에서 추가된 배열 함수
 */

// forEach()
function parse(qs) {
    const queryString = qs.substr(1);
    const chunks = qs.split('&');
    let result = {};

    chunks.forEach((chunk) => {
        const [key, value] = chunk.split('=');
        result[key] = value;
    });

    return result;
}

// map()
function parse(qs) {
    const queryString = qs.substr(1);
    const chunks = qs.split('&');
    const result = chunks.map((chunk) => {
        const [key, result] = chunk.split('=');
        return {key : key, value : value};
    });

    return result;
}

// reduce()
function parse(qs) {
    const queryString = qs.substr(1);
    const chunks = qs.split('&');
    const result = chunks.map((chunk) => {
        const [key, result] = chunk.split('=');
        return {key : key, value : value};
    });

    const obj = result.reduce((result, item) => {
        result[item.key] = item.value;
        return result;
    }, {})

    return result;
}