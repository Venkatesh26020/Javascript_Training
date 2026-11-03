// Program 1: Create a Student Class 
// Problem Statement: 
// Create a Student class with properties name, age, and course. Create 
// two objects and display their details.

console.log('--- 1st Answer ---');

class Student{
    name;
    age;
    course;
    constructor(name,age,course){
        this.name=name,
        this.age=age,
        this.course=course
    }
    getname(){
        console.log("Name of the Student is: "+this.name);   
    }
    getage(){
        console.log("Age of Student is: "+this.age);   
    }
    getcourse(){
        console.log("Course name of the Student is: "+this.course);   
    }
}

let s1=new Student('Venkatesh',26,'Playwright');
s1.getname();
s1.getage();
s1.getcourse();

let s2=new Student('Manikandan',24,'Digital Marketing');
s2.getname();
s2.getage();
s2.getcourse();


// Program 3: Employee Class 
// Problem Statement: 
// Create an Employee class with name, salary, and 
// department. Create a method that calculates a 10% bonus and 
// displays the total salary. 

class Employee{
    name;
    salary;
    constructor(name,salary){
        this.name=name,
        this.salary=salary
    }
    totalsalary(){
        let totalsalary=(this.salary+(0.1*this.salary));
        console.log(totalsalary);
    }
}
let e1=new Employee('Venkatesh',34789);
e1.totalsalary();
