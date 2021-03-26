const person = {
  firstName: "Steve",
  lastName: "Dude",
  age: 30,
  hobbies: ["music", "sports"],
  getBirthYear: function () {
    return 2021 - this.age;
  },
};

let val;

val = person;
val = person.hobbies[1];
val = person.getBirthYear();

console.log(val);
