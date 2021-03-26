const numbers = [1, 3, 5, 7, 9, 100, 33, 11];
const numbers2 = new Array(1, 3, 5, 7, 9);

let val;
val = numbers.length;
val = numbers.indexOf(5);

numbers.push(666);
numbers.unshift(-13);
numbers.pop();
numbers.shift();

/*
 .splice
 .reverse
 .concat
 .sort
*/


numbers.sort(); //sorts like strings
numbers.sort((x,y)=> x-y); // sorts like numbers, y-x sorts in reverse

//find
 function over10(num) {
     return num > 10;
 }
 val = numbers.find(over10);

console.log(numbers);
console.log(val);
