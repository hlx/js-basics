//const http = new easyHTTP();

// http.get(
//     "https://jsonplaceholder.typicode.com/posts",
//     function (err, response) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(response);
//         }
//     }
// );

// const data = {
//     id: 122,
//     title: "foo",
//     body: "bar",
//     userId: 133,
// };

// http.post(
//     "https://jsonplaceholder.typicode.com/posts",
//     data,
//     function (err, response) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(response);
//         }
//     }
// );

// http.put(
//     "https://jsonplaceholder.typicode.com/posts/1",
//     data,
//     function (err, response) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(response);
//         }
//     }
// );

// http.delete(
//     "https://jsonplaceholder.typicode.com/posts/1",
//     function (err, response) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(response);
//         }
//     }
// );

const data = {
    name: "John Doe",
    username: "johnny",
    email: "jd@aol.com",
};

const http = new EasyHTTP();

// http.get("https://jsonplaceholder.typicode.com/users")
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// http.post("https://jsonplaceholder.typicode.com/users",data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

// http.put("https://jsonplaceholder.typicode.com/users/2", data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

http.delete("https://jsonplaceholder.typicode.com/users/2")
    .then(data => console.log(data))
    .catch(err => console.log(err));
