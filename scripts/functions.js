// function declaration
function greet(firstName = "John", lastName = "Smith") {
    return `Hello ${firstName} ${lastName}`;
}
console.log(greet("Tiberius"));

// function expressions
const square = function (x) {
    return x * x;
};
console.log(square(4));

// immediately invokable function expressions - IIFEs
(function (str) {
    console.log("IIFE " + str);
})("blurpent");

//property methods

const todo = {
    add: function () {
        console.log("Add todo");
    },
    edit: function (id) {
        console.log(`Edit todo ${id}`);
    },
};

todo.delete = function () {
    console.log("Delete todo");
};

todo.add();
todo.edit(666);
todo.delete();

//arrow functions

//returning object
const message = () => ({ msg: "hello" });
