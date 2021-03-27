// for
for (let i = 0; i < 10; i++) {
  //console.log(i);
  if (i === 2) {
    console.log("2 is my fav");
    continue;
  }

  if (i === 5) {
    break;
  }

  console.log(i);
}

// while
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

const cars = ["aaaa", "bbbb", "cccc", "dddd"];
for (let i = 0; i < cars.length; i++) {
  const element = cars[i];
  console.log(element);
}

cars.forEach((car, index, array) => console.log(`${car} ${index} ${array}`));

//map

//forin
const user = {
  firstNae: "John",
  lastName: "Doe",
  age: 30,
};

for (const x in user) {
  console.log(`${x} : ${user[x]}`);
}
