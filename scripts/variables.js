let entity = "John Doe";

console.log(entity);
entity = "Ann Smith";
console.log(entity);

//const
const message = "hello from const";
// message = "boop"; //cant reassign to const
console.log(message);

//properties inside const_object can still be modified
const const_object = {
    name: "John",
    age : 30
}
const_object.name = "Sarah";

const numbers = [1,2,3,4,5];
numbers.push(6);

console.log(const_object);
console.log(numbers);