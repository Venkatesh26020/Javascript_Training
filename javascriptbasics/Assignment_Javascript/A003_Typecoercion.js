// 1st problem
let price="500"
let quantity="3"
let total_price=Number(price);
let Quantity=Number(quantity);
let result=total_price*Quantity
console.log(result);

// 2nd Problem
let total="1000";
let tax="200";
let total_rate=Number(total);
let total_tax=Number(tax);
let total_result=total_rate+total_tax;
console.log(total_result);

// 3rd Problem
let actual = "100";
let expected = 20;
// What will be the output of:
// console.log(actual + expected); -- (10020)

// 4th Problem
// Consider:
// let actual = "100";
// let expected = 20;
// What will be the output of:
// console.log(actual - expected); -- (80)

// Problem 5 — UI Value and Assertion
// A UI displays:
// 100
// The automation code receives it as:
// let actualPrice = "100";
// let expectedPrice = 100;
// Check the result of:
// console.log(actualPrice == expectedPrice); -- (true)
// console.log(actualPrice === expectedPrice); -- (false)

// 6th Problem
let actualprice="500";
let expectedprice=500;
// console.log(actualprice === expectedprice);
let actual_price=Number(actualprice);
console.log(actual_price===expectedprice);

//7th Problem
let timeout="30000";
let timeout_result=Number(timeout);
console.log(timeout_result);
console.log(typeof(timeout_result));

// 8th Problem
let orderId=12345;
let order=String(orderId);
console.log(order);
console.log("ORDER-"+(order));

//9th Problem

let status="true";
let original_status=Boolean("status");
console.log(original_status);

// 10th Problem
let number="5";
let total_number=Number(number);
console.log(total_number);

// 11th Problem 
let amount="799",no_of_toys="2",discount="100";
let total_amount=Number(amount);
let toys=Number(no_of_toys);
let total_discount=Number(discount);
let output=((total_amount*toys)-total_discount);
console.log(output);
console.log(typeof(output));

