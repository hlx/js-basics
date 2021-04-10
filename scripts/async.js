async function foo() {
    const promise = new Promise((res, rej) => {
        setTimeout(() => res("Hello!"), 1000);
    });

    const error = false;
    if (!error) {
        const res = await promise;
        return res;
    } else {
        await Promise.reject(new Error("something went wrong"));
    }
}

foo()
    .then(text => console.log(text))
    .catch(err => console.log(err));

async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
}

getUsers().then(users => console.log(users));

/** OLD AJAX STUFF */

document.getElementById("sandbox").style.display = "none";

document.getElementById("button").addEventListener("click", loadData);

function loadData() {
    //create XHRObject
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "data.txt", true);

    xhr.onload = function () {
        if (this.status === 200) {
            document.getElementById("output").innerHTML = this.responseText;
        } else {
            console.log(this.status);
        }
    };

    xhr.onprogress = function () {
        console.log("Processing request...");
    };

    xhr.onerror = function () {
        console.log("REQUEST ERROR");
    };

    xhr.send();
}

document.getElementById("button1").addEventListener("click", loadCustomer);
document.getElementById("button2").addEventListener("click", loadCustomers);

function loadCustomer(e) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "customer.json", true);

    xhr.onload = function () {
        if (this.status === 200) {
            const customer = JSON.parse(this.responseText);
            const output = `
                <ul>
                    <li>ID: ${customer.id} </li>
                    <li>Name: ${customer.name} </li>
                    <li>Company: ${customer.company} </li>
                    <li>Phone: ${customer.phone} </li>
                </ul>
            `;

            document.getElementById("customer").innerHTML = output;
        }
    };

    xhr.send();
}

function loadCustomers(e) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "customers.json", true);

    xhr.onload = function () {
        if (this.status === 200) {
            const customers = JSON.parse(this.responseText);

            let output = "";

            customers.forEach(customer => {
                output += `
                <ul>
                    <li>ID: ${customer.id} </li>
                    <li>Name: ${customer.name} </li>
                    <li>Company: ${customer.company} </li>
                    <li>Phone: ${customer.phone} </li>
                </ul>
            `;
            });

            document.getElementById("customers").innerHTML = output;
        }
    };

    xhr.send();
}

document.getElementById("button3").addEventListener("click", loadJoke);

function loadJoke(e) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api.icndb.com/jokes/random", true);

    xhr.onload = function () {
        if (this.status === 200) {
            const customer = JSON.parse(this.responseText);
            const output = customer.value.joke;

            document.getElementById("jokes").innerHTML = output;
        }
    };

    xhr.send();
}
