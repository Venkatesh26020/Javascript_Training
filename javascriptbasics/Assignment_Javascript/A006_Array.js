// Employee Management System
console.log('--- 1st Answer ---');

let Employee=['Rahul','Priya','Amit'];
let add_employee=Employee.push('Sneha');
console.log(Employee);
let remove_employee=Employee.pop();
console.log(Employee);
let beginadd_employee=Employee.unshift('Manager');
console.log(Employee);
let firstremove_employee=Employee.shift();
console.log(Employee);

// 2. Shopping Cart Application 
// Scenario: 
// An e-commerce website manages products in a shopping cart. 
// Question: 
// Declare an array with "Mobile", "Laptop", "Mouse" and: 
// 1. Add "Keyboard" to the cart  
// 2. Display all products in reverse order  
// 3. Convert all cart items into a single string separated by " | "  
console.log('--- 2nd Answer ---');

let Shopping=['Mobile','Laptop','Mouse'];
let add_shopping=Shopping.push('Keyboard');
console.log(Shopping);
let rev_shopping=Shopping.reverse();
console.log(rev_shopping);
let join_shopping=Shopping.join(" | ");
console.log(join_shopping);

// 3. Browser Tabs Automation 
// Scenario: 
// A browser automation framework tracks currently opened tabs. 
// Question: 
// Declare an array with "Google", "YouTube", "ChatGPT" and: 
// 1. Close the last opened tab  
// 2. Add "GitHub" as the first tab  
// 3. Display tabs in reverse order  
console.log('--- 3rd Answer ---');

let browser=['Google','Youtube','ChatGPT'];
browser.pop();
console.log(browser);
browser.unshift('Github');
console.log(browser);
let rev_browser=browser.reverse()
console.log(rev_browser);

// 4. Food Delivery Orders 
// Scenario: 
// A food delivery application maintains current orders. 
// Question: 
// Declare an array with "Pizza", "Burger", "Pasta" and: 
// 1. Add "Sandwich" to the orders  
// 2. Remove the first order  
// 3. Display all orders as a comma-separated string  
console.log('--- 4th Answer ---');

let Food=['Pizza','Burger','Pasta'];
Food.push('Sandwich');
console.log(Food);
Food.shift();
console.log(Food);
let join_food=Food.join(' , ');
console.log(join_food);

// 5. Student Attendance System 
// Scenario: 
// A school application maintains student attendance. 
// Question: 
// Declare an array with "Ankit", "Riya", "Karan" and: 
// 1. Add "Neha" at the beginning  
// 2. Remove the last student from the list  
// 3. Create a separate copy of the attendance list 
console.log('--- 5th Answer ---');

let student=['Ankit','Riya','Karan'];
student.unshift('Neha');
console.log(student);
student.pop();
console.log(student);
let copy_student=[... student];
console.log(copy_student);


// 6. QA Test Case Management 
// Scenario: 
// A QA engineer stores executed test cases. 
// Question: 
// Declare an array with "LoginTest", "PaymentTest", "SearchTest" and: 
// 1. Create another copy of the same array  
// 2. Extract only the first 2 test cases  
// 3. Display test cases in reverse order  
console.log('--- 6th Answer ---');

let test_case=['LoginTest','PaymentTest','SearchTest'];
let copy_test_case=[... test_case];
console.log(copy_test_case);
test_case.pop();
console.log(test_case);
let rev_test_case=test_case.reverse();
console.log(rev_test_case);

// 7. Movie Recommendation App 
// Scenario: 
// A movie application stores recommended movies. 
// Question: 
// Declare an array with "Inception", "Avatar", "Titanic" and: 
// 1. Add "Interstellar" to the movie list  
// 2. Replace "Titanic" with "Jawan"  
// 3. Convert all movie names into a single string separated by "-" 
console.log('--- 7th Answer ---');

let movies=['Inception','Avatar','Titanic'];
movies.push('Interstellar');
console.log(movies);
movies[2]='Jawan';
console.log(movies)
let join_movies=movies.join(" - ");
console.log(join_movies);

// 8. Product Inventory Management 
// Scenario: 
// An admin manages product inventory. 
// Question: 
// Declare an array with "Mobile", "Laptop", "Tablet", "Camera" and: 
// 1. Remove "Tablet" from inventory  
// 2. Add "Smart Watch" after "Laptop"  
// 3. Create a duplicate copy of updated inventory 
console.log('--- 8th Answer ---');

let product=['Mobile','Laptop','Tablet','Camera'];
product.splice(2,1);
console.log(product);
product.splice(2,0,'Smart Watch');
console.log(product);
let copy_product=[... product];
console.log(copy_product);

// 9. Online Course Platform 
// Scenario: 
// An online learning platform stores enrolled courses. 
// Question: 
// Declare an array with "JavaScript", "Playwright", "Cypress" and: 
// 1. Remove the first course  
// 2. Add "TypeScript" at the beginning  
// 3. Extract only the last 2 courses  
console.log('--- 9th Answer ---');

let courses=['Javascript','Playwright','Cypress'];
courses.shift();
console.log(courses);
courses.unshift('Typescript');
console.log(courses);
let slice_courses=courses.slice(1,3);
console.log(slice_courses);

// 10. Music Playlist Application 
// Scenario: 
// A music app stores favorite songs. 
// Question: 
// Declare an array with "Song1", "Song2", "Song3" and: 
// 1. Display playlist in reverse order  
// 2. Remove the last song  
// 3. Add "NewSong" at the beginning  
// 4. Convert playlist into a single string  
console.log('--- 10th Answer ---');

let playlist=['Song1','Song2','Song3'];
playlist.pop();
console.log(playlist);
playlist.unshift('Newsong');
console.log(playlist);
let join_playlist=playlist.join(' , ');
console.log(join_playlist);

// 11. Bug Tracking System 
// Scenario: 
// A software team tracks bugs using arrays. 
// Question: 
// Declare an array with "Bug101", "Bug102", "Bug103" and: 
// 1. Add "Bug104"  
// 2. Remove "Bug102"  
// 3. Create a copy of the bug list  
console.log('--- 11th Answer ---');

let bug=['Bug101','Bug102','Bug103'];
bug.push('Bug104');
console.log(bug);
let del_bug=bug.splice(1,1);
console.log(bug);
let copy_bug=[... bug];
console.log((copy_bug));


// 12. Daily Tasks Planner 
// Scenario: 
// A task planner application stores daily tasks. 
// Question: 
// Declare an array with "Wake Up", "Exercise", "Study" and: 
// 1. Add "Meeting" to the task list  
// 2. Remove the first task  
// 3. Reverse all tasks  
// 4. Display all tasks in a single string separated by " -> " 
console.log('--- 12th Answer ---');

let tasks=['Wake Up','Exercise','Study'];
tasks.push('Meeting');
console.log(tasks);
tasks.shift();
console.log(tasks);
let rev_tasks=tasks.reverse();
console.log(rev_tasks);
let join_tasks=tasks.join(" -> ");
console.log(join_tasks);

// 13. Mobile Contacts List 
// Scenario: 
// A mobile app stores contact names. 
// Question: 
// Declare an array with "Ram", "Shyam", "Mohan" and: 
// 1. Add "Sita" at the beginning  
// 2. Remove the last contact  
// 3. Extract only the first 2 contacts  
console.log('--- 13th Answer ---');

let mobile_contacts=['Ram','Shyam','Mohan'];
mobile_contacts.unshift('Sita');
console.log(mobile_contacts);
mobile_contacts.pop();
console.log(mobile_contacts);
let get_mobile_contacts=mobile_contacts.splice(2,1);
console.log(mobile_contacts);

// 14. Sports Team Selection 
// Scenario: 
// A coach manages selected players. 
// Question: 
// Declare an array with "Virat", "Rohit", "Gill" and: 
// 1. Add "Hardik" to the team  
// 2. Replace "Gill" with "KL Rahul"  
// 3. Display players in reverse order  
console.log('--- 14th Answer ---');

let players=['Virat','Rohit','Gill'];
players.push('Hardik');
console.log(players);
let replace_players=players.splice(2,1,'Rahul');
console.log(players);
let rev_players=players.reverse();
console.log(rev_players);


// 15. Real-Time Automation Framework Scenario 
// Scenario: 
// An automation framework stores failed test names. 
// Question: 
// Declare an array with "LoginFail", "CheckoutFail", "SearchFail" and: 
// 1. Add "ProfileFail"  
// 2. Remove the first failed test  
// 3. Create another copy of the failed tests array  
// 4. Extract only the first 2 failed tests  
// 5. Replace "CheckoutFail" with "PaymentFail"  
// 6. Convert all failures into a single comma-separated string
console.log('--- 15th Answer ---');

let automation=['LoginFail','CheckoutFail','SearchFail'];
automation.push('ProfileFail');
console.log(automation);
automation.shift();
console.log(automation);
let copy_automation=[... automation];
console.log(copy_automation);
let get_automation=automation.splice(2,1);
console.log(automation);
automation[0]='PaymentFail';
console.log(automation);
let join_automation=automation.join(' , ');
console.log(join_automation);





