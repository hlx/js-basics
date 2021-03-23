/*
    two types: 
    - primitive (string, number, bool, null, undefined, symbols(es6))
    - reference (arrays, objects,functions...)
*/

//PRIMITIVES
const text      = "blahblah";
const number    = 666;
const bool      = true;
const null_test = null;
const sym       = Symbol();
let undf_test; //undefined

//REFERENCE
const array = [2,5,8,13];
const obj   = {
    a: "test1",
    b: 334
};
const today = new Date();

//TYPEOF
console.log(typeof sym +" "+typeof obj);