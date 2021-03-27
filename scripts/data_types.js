/*
    two types: 
    - primitive (string, number, bool, null, undefined, symbols(es6))
    - reference (arrays, objects,functions...)
*/

//PRIMITIVES
const text = "blahblah";
const number = 666;
const bool = true;
const null_test = null;
const sym = Symbol();
let undf_test; //undefined

//REFERENCE
const array = [2, 5, 8, 13];
const obj = {
  a: "test1",
  b: 334,
};
const today = new Date();

//TYPEOF
console.log(typeof sym + " " + typeof obj);

//TYPE CONVERSIONS
let val;

//number
val = 5;
//number to string
val = String(5);
//bool to string
val = String(true);
// array to string
val = String([1, 2, 3]);
// same can be done with .toString()
val = [1, 2, 3, 4].toString();
// string to number
val = Number("5");
// parsing int
val = parseInt("100.32");
// parsing float
val = parseFloat("101.34");

console.log(val);
console.log(typeof val);
console.log(val.length);

//TYPE COERSION
const val1 = "5";
const val2 = 6;
const sum = val1 + val2;
console.log(sum + " " + typeof sum);
