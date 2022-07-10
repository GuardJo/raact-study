/**
 * 화살표 함수
 */

function add(first, second) {
    return first + second;
}

var add = function(first, second) {
    return first, second;
};

var add = (first, second) => {
    return first + second;
};

var add = (first, second) => first + second;

var addAndMultiple = (first, second) => ({add : first + second, multiply : first * second});