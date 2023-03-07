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

let hoge: string = 'hoge';

let fuga: number = 0;

class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  add(point: Point) {
    return new Point(this.x + point.x, this.y + point.y);
  }
}

var p1 = new Point(0, 10);
var p2 = new Point(10, 20);
var p3 = p1.add(p2); // {x:10,y:30}

class SomeThing {
  static instances = 0;
  constructor() {
    SomeThing.instances++;
  }
}

var s1 = new SomeThing();
var s2 = new SomeThing();
console.log(SomeThing.instances); // 2

const iTakeItAll = (first, seconf, ...allOthers) => {
  console.log(allOthers);
}

iTakeItAll('foo', 'bar');
iTakeItAll('foo', 'bar', 'bas', 'qux');

let rect = { x: 0, y: 10, width: 15, height: 20 };

// bunnatudainyuu
let {x, y, width, height} = rect;
console.log(x, y, width, height);

rect.x = 10;
({x, y, width, height} = rect);
console.log(x, y, width, height);

let someArray = [9, 2, 5];
for (let index in someArray) {
  console.log(index); // 0, 1, 2
}

for (let item of someArray) {
  console.log(item); // 9, 2, 5 
}

let hello2: string = "is it me you're looking me?";
for (let char of hello2) {
  console.log(char); // is it me you're looking me?
}

const foo = async () => {
  try {
    let val = await getMePromise();
    console.log(val);
  } catch(err) {
    console.log('error');
  }
}

const getMePromise = () => {
  return new Promise.resolve();
}

