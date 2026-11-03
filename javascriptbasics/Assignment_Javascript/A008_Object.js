// Program 1. Student Object 
// Create a student object with the following properties: 
// • id  
// • name  
// • age  
// • course  
// • marks  
// Perform the following: 
// 1. Print the complete object.  
// 2. Print the student's name.  
// 3. Print the student's marks.  
// 4. Change the student's course.  
// 5. Update the student's marks.  
// 6. Add a new property city.  
// 7. Delete the age property.  

console.log("--- 1st Answer ---")

let student={
    id:101,
    name:'Venkatesh',
    age:26,
    course:'Playwright',
    marks:90
}
console.log(student);
// console.log(typeof student);
console.log(student.name);
console.log(student.marks);
student.course='selenium';
console.log(student.course);
student.marks=95;
console.log(student.marks);
student.city='Chennai';
console.log(student);
delete student.age;
console.log(student);

console.log("--- 2nd Answer ---");

// Program 2. Employee Object 
// Create an employee object containing: 
// id 
// name 
// department 
// designation 
// salary 
// Perform: 
// 1. Access each property using dot notation.  
// 2. Access each property using bracket notation.  
// 3. Update the salary.  
// 4. Add a location property.  
// 5. Delete the designation property. 

console.log("--- 2nd Answer ---");

let Employee={
    id:102,
    name:'Manikandan',
    department:'Tools',
    designation:'Software Engineer',
    salary:40000
}
console.log(Employee.id);
console.log(Employee.name);
console.log(Employee.department);
console.log(Employee.designation);
console.log(Employee.salary);

console.log(Employee["id"]);
console.log(Employee["name"]);
console.log(Employee["department"]);
console.log(Employee["designation"]);
console.log(Employee["salary"]);

Employee.salary=70000;
console.log(Employee);

Employee.city='Chennai';
console.log(Employee);

delete Employee.designation;
console.log(Employee);

// program 3.Create a testData object containing: 
// username 
// password 
// browser 
// environment 
// timeout 
// Use Object.keys() to: 
// 1. Get all property names.  
// 2. Count the number of properties.  
// 3. Check whether username exists. 

console.log("--- 3rd Answer ---");

let TestData={
    username:'Venky2409',
    password:'Ven#Ky@2409',
    browser:'Chrome',
    environment:'Test',
    timeout:20
}

let allkeys=Object.keys(TestData);
console.log(allkeys); // 1st part answer

let count=0;
for(let i in TestData){
    count++
}
console.log(count); //2nd part answer

let flag=false;
for(let i in TestData){
    if(i==='username'){
        flag=true 
    }
}
if(flag===true){
    console.log("key exists"); 
}
else{
    console.log("key doesn't exists");
    
}  // 3rd part answer


// Program 4.Create an object containing test configuration: 
// browser: "chromium" 
// headless: true 
// timeout: 30000 
// retries: 2 
// Use Object.values() to: 
// 1. Display all values.  
// 2. Check whether "chromium" exists.  
// 3. Count the number of configuration values.

console.log("--- 4th Answer ---");

let TestConfiguration={
    browser:'chromium',
    headless:true,
    timeout:30000,
    retries:2
}

let allvalues=Object.values(TestConfiguration);
console.log(allvalues);

let flag_test=false;
for(let i in TestConfiguration){
    if(TestConfiguration[i]==='chromium'){
        flag_test=true
    }
}
if(flag_test===true){
    console.log("Value exists");
}
else{
    console.log("Value doesn't exists");
}

let count_value=0;
for(let i in TestConfiguration){
    console.log(TestConfiguration[i]);
    count_value++;
}
console.log(count_value);


// Program 5.Create a user object: 
// username 
// role 
// department 
// experience 
// Use Object.entries() to print: 
// username : standard_user 
// role : tester 
// department : QA 
// experience : 5 

console.log("--- 5th Answer ---");
let user={
    username:'standard_user',
    role:'tester',
    department:'QA',
    experience:5
}

let userEntries=Object.entries(user);
console.log(userEntries);

// Program 6.Create: 
// const user = { 
// name: "John", 
// role: "Tester", 
// city: "Pune" 
// }; 
// Create a new object that: 
// • Contains all properties of user.  
// • Changes role to "Automation Engineer".  
// • Adds experience: 5.  
// The original object should remain unchanged.

console.log("--- 6th Answer ---");


// Program 7.Playwright Configuration Object 
// Create a configuration object: 
// browser 
// baseURL 
// headless 
// timeout 
// retries 
// Example: 
// { 
// } 
// browser: "chromium", 
// baseURL: "https://example.com", 
// headless: true, 
// timeout: 30000, 
// retries: 2 
// Perform: 
// 1. Print all configuration values.  
// 2. Change the browser.  
// 3. Change the timeout.  
// 4. Add screenshot: "only-on-failure".  
// 5. Check whether retries exists.  
// 6. Create a copy with a different baseURL.

let configuration={
    browser:'chromium',
    baseurl:'https://example.com',
    headless:true,
    timeout:30000,
    retries:2
}

let configuration_values=Object.values(configuration);
console.log(configuration_values);

configuration.browser='firefox';
console.log(configuration);

configuration.timeout=20000;
console.log(configuration);

configuration.screenshot='only-on-failure';
console.log(configuration);

let flag_config=false;
for(let i in configuration){
    if(i==='retries'){
        flag_config=true
    }
}
if(flag_config===true){
    console.log('retries key exists');
}
else{
    console.log('retries key does not exist');
}

let configuration_copy={... configuration}
console.log(configuration_copy);

configuration_copy.baseurl="https://www.zepto.com";
console.log(configuration_copy);








