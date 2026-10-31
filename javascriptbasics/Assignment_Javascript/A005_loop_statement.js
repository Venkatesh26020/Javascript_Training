// Check whether number is prime

let num=21;
for(let i=2;i<=Math.floor(Math.sqrt(num));i++){
    if(num%i===0){
        console.log(`${num} is not prime`);
        break;
    }
}

// even numbers between 1 to 50

let n=50;
for(let i=1;i<=n;i++){
    if(i%2===0){
        console.log(i);
    }
}

// Multiplication Table from 1 to 10

let multiply=3;
for(let i=1;i<=10;i++){
    console.log(multiply*i);
}

let fact=1;
let a=10;
for(let i=1;i<=a;i++){
    fact=fact*i;
}
console.log(`The factorial of ${a} is:` +fact);

let number=20;
for(let i=1;i<=number;i++)
{
    if(i===10){
        break;
    }
    else{
        console.log(i);
    }
}

// count the digits of the number

let b=2435;
let count=0;
let rem=0;
while(b>0){
    rem=b%10;
    b=Math.floor(b/10);
    count++;
}
console.log(`The count of digits of number is ${count}`);


// Skip even numbers

let c=20;
for(let i=1;i<=c;i++){
    if(i%2===0){
        continue
    }
    else{
        console.log(i)
    }
}