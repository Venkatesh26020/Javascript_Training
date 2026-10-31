let enteredUsername = "admin@emalil.com";
let enteredPassword = "admin@123";

const correctusername = "admin@emalil.com";
const correctPassword = "admin@123";  

if(enteredUsername===correctusername && enteredPassword===correctPassword){
    console.log('Login is Successful')
}else{
    console.log('Invalid credentials')
}