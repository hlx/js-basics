/* 
DOCUMENT OBJECT
html element collection is not an array
val elements = <get elements>
val elementsArray = Array.from(elements);

*/

// document.getElementById()

const element = document.getElementById("test");

//change styling
element.style.border = "1px solid green";
element.style.width = "30rem";

document.getElementById("test-par").textContent = "JS is happening here."; //returns full text
document.getElementById("test-par").innerText = "JS is happening here as well."; // returns visible text, perf heavy, needs display context

// querry selector
document.querySelector(".listItem:last-child").style.color = "red";
document.querySelector(".listItem:nth-child(2)").style.color = "pink";

// .getElementsByClassName
const items = document.getElementsByClassName("listItem");

// .getElementsByTagName("li")

/* TRAVERSING
    .childNodes //node list
    .childNodes[x].nodeType
    .children //html collection
    .firstChild
    .firstElementChild
    .lastChild
    .lastElementChild
    .childElementCount

    .parentNode
    .parentElement

    .nextSibling
    .nextElementSibling
*/

// creating elements
const li = document.createElement("li");
li.className = "listItem js-added";
li.setAttribute("title", "new title");
li.appendChild(document.createTextNode("New item added!"));
document.querySelector("ul.list").appendChild(li);

// replace elements
const newHeading = document.createElement("h2");
newHeading.innerText = "A new heading!!!";

const oldHeading = document.getElementsByTagName("h5")[0];
const headingParent = oldHeading.parentNode;
headingParent.replaceChild(newHeading, oldHeading);

/*  remove elements
    element.remove();
    parent.removeChild(actual element);
*/

newHeading.classList.add("new-class");

if (newHeading.hasAttribute("class")) {
    console.log("class added succesfully");
} else {
    console.log("class not added");
}

// events
newHeading.addEventListener("click", eventFunction);

function eventFunction(e) {
    console.log("hello world click!");

    e.preventDefault(); //e  - event object
    e.target.innerText = "Clicked!!";
    e.target.removeEventListener("click", eventFunction);
}

const list = document.querySelector("ul.list");
// we also have lis as items

list.addEventListener("click", spanClicked);

function spanClicked(e) {
    if (e.target.nodeName === "SPAN") {
        let index = Array.prototype.indexOf.call(
            list.children,
            e.target.parentNode
        );
        //let index = Array.from(list.children).indexOf(e.target.parentNode);
        console.log(`span clicked - removing list item ${index + 1}`);
        e.target.parentNode.remove();
    }
}

console.log(items);
