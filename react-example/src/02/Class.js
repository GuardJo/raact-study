/**
 * 클래스
 */

// function Shape(x, y) {
//     this.name = 'Shape';
//     this.move(x, y);
// }

// Shape.create = function(x, y) {
//     return new Shape(x, y);
// }
// Shape.prototype.move = function(x, y) {
//     this.x = x;
//     this.y = y;
// }
// Shape.prototype.area = function() {
//     return 0;
// };
// Shape.prototype = {
//     move: function(x, y) {
//         this.x = x;
//         this.y = y;
//     },
//     area : function() {
//         return 0;
//     }
// };

// var s = new Shape(0, 0);
// s.area();

// function Circle(x, y, radius) {
//     Shape.call(this, x, y);
//     this.name = 'Circle';
//     this.radius = radius;
// }
// Object.assign(Circle.prototype, Shape.prototype, {
//     area : function() {
//         return this.radius * this.radius;
//     }
// });
// var c = new Circle(0, 0, 10);
// c.area();
// console.log(c.area());

class Shape {
    static create(x, y) {
        return new Shape(x, y);
    }

    constructor(x, y) {
        this.move(x, y);
    }

    move(x, y) {
        this.x = x;
        this.y = y;
    }

    area() {
        return 0;
    }
}

var s = new Shape(0, 0);
console.log(s.area());

class Circle extends Shape {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }

    area() {
        if (this.radius === 0) {
            return super.area();
        }

        return this.radius * this.radius;
    }
}

var c = new Circle(0, 0, 10);
console.log(c.area());