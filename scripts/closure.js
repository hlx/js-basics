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
