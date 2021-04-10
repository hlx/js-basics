const user = { email: "jd@aol.com" };

try {
    // myFunction();
    if (user.name === undefined) {
        throw new SyntaxError("no name");
    }
} catch (e) {
    console.log(e);
    // console.log(e.message);
} finally {
    console.log("finally runs always");
}

console.log("app continues...");
