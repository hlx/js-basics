let re;
re = /hello/i;

console.log(re);
console.log(re.source);

//exec()
let result = re.exec("hello world");

//test()
result = re.test("Hello");

//match()
const str = "Hello there";
result = str.match(re);

//search()
result = str.search(re);
console.log(result);

//replace
const newStr = str.replace(re, "Hi");
console.log(newStr);
