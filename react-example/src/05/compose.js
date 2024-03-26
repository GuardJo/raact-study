const multiply = x => a => a * x;
const add = x => a => a + x;

const multiplyTwo = multiply(2);
const multiplyThree = multiply(3);

const addFour = add(4);

// ((x + 4) * 3) * 2
const formula = x => multiplyTwo(multiplyThree(addFour(x))); 

// function compose() {
//     const funcArr = Array.prototype.slice.call(arguments);

//     return funcArr.reduce(
//         function (prevFunc, nextFunc) {
//             return function(value) {
//                 const args = Array.prototype.slice.call(arguments);
//                 return nextFunc(prevFunc.apply(null, args));
//             };
//         },
//         function(k) {return k}
//     );
// };
function compose(...funcArr) {
    return funcArr.reduce(
        function (prevFunc, nextFunc) {
            return function(...args) {
                return nextFunc(prevFunc(...args));
            };
        },
        function(k) {return k}
    );
};

const formulaWithCompose = compose(addFour, multiplyThree, multiplyTwo);
const result1 = formula(10);
const result2 = formulaWithCompose(10);

console.log(result1);
console.log(result2);