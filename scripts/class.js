class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = new Date(dob);
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }

    calculateAge() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    getsMarried(newLastName) {
        this.lastName = newLastName;
    }

    static addNumbers(x, y) {
        return x + y;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName); //calls the contructor of extended class

        this.phone = phone;
        this.membership = membership;
    }
}

const mary = new Person("Mary", "Williams", "11-12-1980");
mary.getsMarried("Smith");
console.log(mary.greeting());
console.log(Person.addNumbers(3, 4));

const john = new Customer("John", "Dee", "555-666-7777", "std");
console.log(john.greeting());
