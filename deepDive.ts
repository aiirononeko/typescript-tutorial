var foo = 123;
foo = '456';

var foo: number = '123';

interface Point2D {
  x: number;
  y: number;
}
interface Point3D {
  x: number;
  y: number;
  z: number;
}
var point2D: Point2D = { x: 0, y: 10 }
var point3D: Point3D = { x: 0, y: 10, z: 20 }
function iTakePoint2D(point: Point2D) { console.log('hoge') }

iTakePoint2D(point2D);
iTakePoint2D(point3D);
iTakePoint2D({ x: 0 });

class Point {
  constructor(public x: number, public y: number) {}
  add(point: Point) {
    return new Point(this.x + point.x, this.y + point.y);
  }
}

var p1 = new Point(0, 10);
var p2 = new Point(10, 20);
var p3 = p1.add(p2);

var inc = x => x + 1;

console.log(5 == '5');
console.log(5 === '5');
// We always have to use '===' or '!==' without null check.

var foo = {};
var bar = foo;

foo.baz = 123;
console.log(bar.baz);

var foo = {};
var bar = foo;
var baz = {};

console.log(foo === bar); // true
console.log(foo === baz); // false

const hello = () => {
  console.log('hello');
}

