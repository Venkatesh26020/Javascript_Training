// 1. Create variable and identify the datatype

let a=25;
console.log(a);
console.log(typeof(a));
let b="JavaScript";
console.log(b);
console.log(typeof(b));
let c=true;
console.log(c);
console.log(typeof(c));
let d;
console.log(d);
console.log(typeof(d));
let e=null;
console.log(e);
console.log(typeof(e));
let f=123.45;
console.log(f);
console.log(typeof(f));
let g=12345678901234567890n
console.log(g);
console.log(typeof(g));
let h=Symbol("id");
console.log(h);
console.log(typeof(h));

// 2. Create Variables of Different Datatypes

let fname="Venky";
console.log(fname);
let age=25;
console.log(age);
let isActive=false;
console.log(isActive);
let date;
console.log(date);
let address=null;
console.log(null);
let n=1234567n;
console.log(n);
let s=Symbol("name");
console.log(s);
let emp={
    empid:18498,
    empname: "Venkatesh"
}
console.log(emp);


//  3. Predict the Output
// Without running the code, predict the output:
(typeof 100);
// Number
(typeof "100");
// String
(typeof true);
// Boolean
(typeof undefined);
// Undefined
(typeof null);
// object
(typeof 100n);
// Bigint

// 4. Student Information
// Create variables to store:
// - Student name
// - Student age
// - Student percentage
// - Whether the student has completed the course
// - Student's grade
// Use appropriate JavaScript datatypes.

let student={
    Studentname:"Manikandan",
    Studentage: 22,
    studentpercentage:85,
    isCompleted:true,
    studentgrade:"A"
}

// 5.Create two variables:
// let userName;
// let userEmail = null;
// Print both values and their datatypes.
// Then answer:
// 1. What is the difference between undefined and null?
// 2. What does typeof userName return?
// 3. What does typeof userEmail return?
// 4. Why is typeof null considered unusual in JavaScript?

let username;
let userEmail=null;
console.log(username);
console.log(typeof (username))
console.log(userEmail);
console.log(typeof (userEmail));

// undefined means variable declared without initialization whereas in null the value of the variable is unknown
// undefined
// object
// Legacy bug in Javascript

