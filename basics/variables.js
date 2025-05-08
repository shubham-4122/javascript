const userId = 4122; // block scoped - cannot be redeclare and reinitiate / can't be change
let userMail = "abc@gmail.com"; // block scoped - cannot be redecalre but can change the value
var userPass = "abc123"; // functional scoped - can be redclare and and reinitiate

// userId = 4123 // get "TypeError: Assignment to constant variable" 
// let userMail = "bcd@gmail.com" SyntaxError: Identifier 'userMail' has already been declared

userMail = "bcd@gmail.com"

console.log(userId);
console.log(userMail);

console.table([userId, userMail, userPass]);
