/**
 * 배열 및 객체 전개 연산자
 */
// 배열 연산
var array1 = ['one', 'two'];
var array2 = ['three', 'four'];
// var combined = [array1[0], array1[1], array2[0], array2[1]];
// var combined = array1.concat(array2);
// var combined = [].concat(array1, array2);
const combined = [...array1, ...array2];

// var first = array1[0];
// var second = array1[1];
// var three = array1[2] || 'empty';
const [first, second, three = 'empty', ...others] = array1;

// function func() {
//     var args = Array.prototype.slice.call(arguments);
//     var first = args[0];
//     var others = args.slice(1, args.length);
// }
function func(...args) {
    var [first, ...others] = args;
}

// 객체 연산
var objectOne = {
    one : 1,
    two : 2,
    other : 0
};
var objectTwo = {
    three : 3,
    four : 4,
    ohter : -1
};
// var combined2 = {
//     one : objectOne.one,
//     two : objectOne.two,
//     three : objectTwo.three,
//     four : objectTwo.four
// };
// var combined2 = Object.assign({}, objectOne, objectTwo);
// var combined2 = Object.assign({}, objectTwo, objectOne);
var combined2 = {
    ...objectOne,
    ...objectTwo
};
var combined2 = {
    ...objectTwo,
    ...objectOne
};

// var others2 = Object.assign({}, combined2);
// delete others.other;
var {other2, ...others2} = combined2;