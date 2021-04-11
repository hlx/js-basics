//iterator
function nameIterator(names) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < names.length
                ? { value: names[nextIndex++], done: false }
                : { done: true };
        },
    };
}

const namesArr = ["john", "jill", "ebenezer"];
const names = nameIterator(namesArr);

console.log(names.next());
console.log(names.next());
console.log(names.next());
console.log(names.next());

//generators
function* sayNames() {
    yield "Jack";
    yield "Jill";
    yield "Greg";
}

const newName = sayNames();
console.log(newName.next());
console.log(newName.next());
console.log(newName.next());
console.log(newName.next());

function* createIds() {
    let index = 0;

    while (true) {
        yield index++;
    }
}

const gen = createIds();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

//symbols
const KEY1 = Symbol();
const KEY2 = Symbol("sym2");

const myObj = {};

myObj[KEY1] = "Prop1";
myObj[KEY2] = "Prop2";

console.log(myObj[KEY1]);

//destructuring
let a, b;
[a, b, ...rest] = [100, 200, 300, 400, 500];

console.log(b);
console.log(rest);

const people = ["John", "Beth", "satan"];
const [person1, person2, person3] = people;
console.log(person3);

const person = {
    name: "John",
    age: 32,
    city: "NYC",
    gender: "male",
};

const { name, age, gender } = person;
console.log(name, age, gender);

//map
const map1 = new Map();
const key1 = "Some string";
const key2 = {};
const key3 = function () {};

map1.set(key1, "val1");
map1.set(key2, "val2");
map1.set(key3, "val3");

console.log(map1.get(key3));
console.log(map1.size);

for (let [key, value] of map1) {
    console.log(key + " = " + value);
}

const keyValArr = Array.from(map1);
console.log(keyValArr);

//set
const set1 = new Set();
set1.add(100);
set1.add("a string");
set1.add({ name: "john" });
set1.add(true);

set1.delete(100);

console.log(set1);
console.log(set1.size);
console.log(set1.has("a string"));
