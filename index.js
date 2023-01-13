// alerts, confirms and prompts
const user = {};
user.name = prompt("What is your name?", "admin");
user.age = prompt("Your age?", 0);
user.gender = prompt("Your gender: ", "")
alert(`name: ${user.name}\nage: ${user.age}\ngender: ${user.gender}`);
console.log(user);

// only enter the number prompt
let number;
do {
   number = prompt("Enter the number: ", 0);     
} while (isNaN(number));


// if to switch
let a = +prompt('a?', '');
console.log(a) // number
a = +a
console.log(a) // number

switch(a) {
    case 0:
        alert("0");
        break;
    case 1:
        alert("1");
        break;
    case 2:
    case 3:
        alert("2, 3");
        break;
    default:
        console.log(a);
}

// sum of all even numbers 1-100
let sum = 0;
for (let i = 1; i < 101; i++) {
    if (i % 2 == 0) sum += i;
}
console.log(sum);

// rewrite from "for" to "while"
let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
}