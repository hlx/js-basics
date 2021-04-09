document.getElementById("sandbox").style.display = "none";
document.querySelector(".container.custom").style.display = "none";

document
    .querySelector(".fetchContainer #button1")
    .addEventListener("click", getText);

function getText() {
    fetch("data.txt")
        .then((response) => response.text())
        .then((data) => {
            console.log(data);
            document.querySelector(".fetchContainer #output").innerHTML = data;
        })
        .catch((error) => console.log(error));
}

document
    .querySelector(".fetchContainer #button2")
    .addEventListener("click", getJSON);

function getJSON() {
    fetch("customers.json")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            let output = `<ul>`;
            data.forEach((post) => {
                output += `<li>${post.name}</li>`;
            });
            output + `</ul>`;
            document.querySelector(
                ".fetchContainer #output"
            ).innerHTML = output;
        })
        .catch((error) => console.log(error));
}

document
    .querySelector(".fetchContainer #button3")
    .addEventListener("click", getExternal);

function getExternal() {
    fetch("https://api.github.com/users")
        .then(handleErrors)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            let output = `<ul>`;
            data.forEach((user) => {
                output += `<li>${user.login}</li>`;
            });
            output + `</ul>`;
            document.querySelector(
                ".fetchContainer #output"
            ).innerHTML = output;
        })
        .catch((error) => console.log(error));
}

function handleErrors(res) {
    if (!res.ok) throw new Error(res.error);
    return res;
}
