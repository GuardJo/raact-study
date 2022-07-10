/**
 * 가변 변수와 불변 변수
 */

let num = 1;
num = num * 3;
let str = '문자';
str = '다른 문자';
let arr = [];
arr = [1, 2, 3];
let obj = {};
obj = {
    name : '새 객체'
};

const num2 = 1;
num2 = 3;
const str2 = '문자';
str2 = '새 문자';
const arr2 = [];
arr2 = [1, 2, 3];
const obj2 = {};
obj2 = {
    name:'새 객체'
};

const arr3 = [];
arr3.push(1);
arr3.splice(0, 0, 0);
arr3.pop();
const obj3 = {};
obj3['name'] = '내 이름';
Object.assign(obj3, {name : '새 이름'});
delete obj3.name;