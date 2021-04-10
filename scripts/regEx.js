// let re;
// re = /hello/i;

// console.log(re);
// console.log(re.source);

// //exec()
// let res = re.exec("hello world");

// //test()
// res = re.test("Hello");

// //match()
// const str = "Hello there";
// res = str.match(re);

// //search()
// res = str.search(re);
// console.log(res);

// //replace
// const newStr = str.replace(re, "Hi");
// console.log(newStr);

let re;
re = /hello/;

const str = "Hello world";
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
    if (re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}

reTest(re, str);
