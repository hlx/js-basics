const firstName = "Fred";
const lastName = "Johnson";
const age = 42;
const str = "Hello what is happening?";
let val;
let html;

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

//template strings

html = `
    <ul>
        <li>${firstName}</li>
        <li>${lastName}</li>
        <li>${age}</li>
        <li>${age > 30 ? "Over 30" : "Under 30"}</li>
    </ul>
`;

window.onload = function () {
  document.body.innerHTML += html;
};
