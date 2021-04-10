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
//literal
re = /hello/;
re = /hello/i;

//metacharacter symbols
re = /^h/i; //must start with
re = /d$/i; //must end with
re = /he.lo/i; //matches any one character
re = /h*o/i; //matches any character
re = /gre?a?y/i; //matches optional character
re = /gre?a?y\?/i; //escape character

//character sets
re = /gr[ae]y/i; //must be a or e
re = /[^G]ray/; //anything exept "G"
re = /[A-Z]ray/; //any uppercase
re = /[A-Za-z]ray/; //any case

//quantifiers
re = /Hel{2}o/i; //must occur exactly {m} times
re = /Hel{2,4}o/i;
re = /Hel{2,}o/i;

//shorthand classes
re = /\w/; //word character
re = /\W/; //non word character
re = /\d/; //digit character
re = /\D/; //non digit character
re = /\s/; //whitespace character
re = /\S/; //non space character
re = /Hell\b/i;

//assertions
re = /x(?=y)/; //match x only if followed by y
re = /x(?!y)/; //match x only if NOT followed by y

const str = "Hellox Hellxy";
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
