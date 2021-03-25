const firstName = "Fred";
const lastName = "Johnson";
const age = 42;
const str = "Hello what is happening?";
let val;

val = firstName + " " + lastName;
val += " " + age;
val += " Nickname: 'Blorg'";

val = firstName.concat(" ", lastName);

/*
.toUpper()
.toLower()
.indexOf()
.lastIndexOf()
.charAt()
.substring()
.slice()
.replace()
.includes()
*/

val = str.split(" ");

console.log(val);
console.log(val.length);
