const human = {
    firstName: "Steve",
    lastName: "Dude",
    age: 30,
    hobbies: ["music", "sports"],
    getBirthYear: function () {
        return 2021 - this.age;
    },
};

let val;

val = human;
val = human.hobbies[1];
val = human.getBirthYear();

console.log(val);

//OOP
function PersonTest(name, yearOfBirth) {
    this.name = name;
    this.yob = yearOfBirth;
    this.calculateAge = function () {
        const year = new Date().getFullYear();
        return year - this.yob;
    };
}
const brad = new PersonTest("Brad", 1983);
console.log(brad.calculateAge());

//primitives vs objects
const name1 = "Jeff";
const name2 = new String("Jeff");
console.log(typeof name1 + "  " + typeof name2);

const arr = new Array(1, 2, 3, 4);
console.log(typeof arr);

//prototypes
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = dob ? new Date(dob) : new Date("1985");
}

Person.prototype.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
};

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};

Person.prototype.greeting = function () {
    return `Hello there ${this.firstName} ${this.lastName}`;
};

const john = new Person("John", "Doe", "8-12-90");
const mary = new Person("Mary", "Johnson", "March 20 1978");
console.log(`${mary.getFullName()}, ${mary.calculateAge()}`);
console.log(john.greeting());

function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}
// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

const customer = new Customer("Kit", "Bump", "123", "Standard");
console.log(customer);
