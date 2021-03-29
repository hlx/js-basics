function outer() {
    let b = 10;
    function inner() {
        let a = 20;
        console.log("a= " + a + " b= " + b);
        a++;
        b++;
    }
    return inner;
}

let first = outer();
let second = outer();

first();
first();
first();

second();

/* added closure example from YDKNJS https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/apB.md */

function range(start, end) {
    start = Number(start) || 0;

    if (end === undefined) {
        return function getEnd(end) {
            return getRange(start, end);
        };
    } else {
        end = Number(end) || 0;
        return getRange(start, end);
    }

    // **********************

    function getRange(start, end) {
        var ret = [];
        for (let i = start; i <= end; i++) {
            ret.push(i);
        }
        return ret;
    }
}

range(3, 3); // [3]
range(3, 8); // [3,4,5,6,7,8]
range(3, 0); // []

var start3 = range(3);
var start4 = range(4);

start3(3); // [3]
start3(8); // [3,4,5,6,7,8]
start3(0); // []

let x = start4(6); // [4,5,6]
console.log(x);
