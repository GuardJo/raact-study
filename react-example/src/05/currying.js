// a x b 연산
function multiply(a, b) {
    return a * b;
};

// 2배 연산
function multiplyTwo(a) {
    return multiply(a, 2);
};

// function multiplyX(x) {
//     return function(a) {
//         return multiply(a, x);
//     };
// };
const multiplyX = x => a => multiply(a, x);

const multiplyThree = multiplyX(3);
const multiplyFour = multiplyX(4);

// const result1 = multiplyThree(3); // 3 * 3 = 9
const result1 = multiplyX(3)(3);
// const result2 = multiplyFour(4); // 4 * 3 = 12
const result2 = multiplyX(4)(3);

const equation = (a, b, c) => x => ((x * a) * b) + c;

const x = 10;
const resutl = equation(2, 3, 4)(10);