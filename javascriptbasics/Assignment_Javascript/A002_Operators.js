// 1.console.log(1 + "2" + 3); -- 123
// 2.console.log(1 + 2 + "3"); -- 33
// 3.console.log("5" * true); -- 5
// 4.console.log(10 > 5 > 1); -- true
// 5.let a = 2;
//     let b = a++ + ++a;
//     console.log(a, b);   -- a=4,b=6

// 6.let a = 3;
// console.log(a++ + a++ + ++a);  -- a=6, b=13

// 7.console.log(5 * 2 == "10"); true

// 8.
// let x = 1;
// let y = ++x + x++ + x;
// console.log(x, y); x=3, y=7

// 9.console.log(10 > 5 && 20 < 30); true

// 10.console.log(null || undefined || "Playwright"); Playwright

let a=2;
let b=a++ + ++a;
console.log(a,b);

let c=3;
let d=c++ + c++ + ++c;
console.log(c,d);

let x=1;
let y=++x + x++ + x;
console.log(x,y)

console.log(10>5 && 20<30);
console.log("5" * true);