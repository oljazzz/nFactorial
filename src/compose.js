const square = (x) => x * x;

console.log(square(4));

const half = (x) => x/2;

const compose = (f1, f2) => value => f1(f2(value));

console.log(half(9));

console.log(compose(half, square)(10));

