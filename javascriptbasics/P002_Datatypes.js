// num datatype
let num=0;
console.log(num);
console.log(typeof num);
console.log("Number is:" +num);
console.log("Number is:",num);

// when declaring any number it's default datatype is num only when storing bigint when a suffix n is added in the number

let big=9022200220202020202002020202911020n;
let big1=9022200220202020202002020202911020;

console.log(big);
console.log(typeof big);
console.log(big1);
console.log(typeof big1);

// string datatype
let fname="venky";
console.log(fname);
console.log(typeof fname);

// null datatype //
let studentaddress=null;
console.log("student address is:"+studentaddress);
console.log(typeof studentaddress);


//object literal

let person={
    id:123,
    address:"1/214 12th street"
}

console.log(person);
console.log(typeof person)
console.log(person.id);
console.log(person["address"]);

//let , var,const

var id=101;
var id=201;
var id=301;
console.log(id);

let toolname="playwright";
toolname="selenium";

const sport="cricket";
sport="football";