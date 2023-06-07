//DOM
// 1. Consider you have following code snippet:
//  (Copy it in your HTML file)
// <div>
// <h1> DOM </h1>
// <div id=”form-content” class=”content”>
// <label for=”first-name”>First Name</label>
// <input type=”text” id=”first-name” />
// <label for=”last-name”>Last Name</label>
// <input type=”text” id=”last-name” />
// <label for=”email”>Email</label>
// <input type=”text” id=”email” />
// </div>
// <div id=”main-content” class=”content”>
// <p class=”render”> First Name : Alex</p>
// <p class=”render” id=”lastName”>Last Name: Bank</p>
// <p class=”render”> Email : alexbank@example.com</p>
// <p class=”render”> Country : Pakistan </p>
// <p class=”render”> contact : +92 300 1234567</p>
// </div>
// </div>
// i. Get element of id “main-content” and assign them in a variable.
var content= document.getElementById('main-content');
console.log(content);

// ii. Display all child elements of “main-content” element.
var childe_elements = mainContent.children;
console.log(child_elements);

// iii. Get all elements of class “render” and show their innerHTML 
// in browser.
var renderElements = document.getElementsByClassName("render");
for (var i=0 ; i<renderElements.length ; i++) {
console.log(renderElements[i].innerHTML);
}

// iv. Fill input value whose element id first-name using javascript.
var firstNameInput = document.getElementById("first-name");
firstNameInput.value = "John";

// v. Repeat part iv for id ”last-name” and “email”.
var lastNameInput = document.getElementById("last-name");
var emailInput = document.getElementById("email");
lastNameInput.value = "Doe";
emailInput.value = "johndoe@example.com";

// 2. use HTML code of question 1 and show the result on browser.
// i. What is node type of element having id “form-content”.
var node = document.getElementById("form-content");
console.log("Node type of element with id 'form-content': " + node.nodeType);

// ii. Show node type of element having id “lastName” and its child node.
var lastName_node = document.getElementById("lastName");
console.log("Node type of element with id 'lastName': " + lastName_node.nodeType);
console.log("Child node of element with id 'lastName': " + lastName_node.childNodes[0].nodeType);

// iii. Update child node of element having id “lastName”.
lastName_node.childNodes[0].nodeValue = "New Value";

// iv. Get First and last child of id “main-content”.
var mainContentNode = document.getElementById("main-content");
var firstChild = mainContentNode.firstChild;
var lastChild = mainContentNode.lastChild;
console.log("First child of element with id 'main-content': " + firstChild.nodeName);
console.log("Last child of element with id 'main-content': " + lastChild.nodeName);

// v. Get next and previous siblings of id “lastName”.
var nextSibling = lastName_node.nextSibling;
var previousSibling = lastName_node.previousSibling;
console.log("Next sibling of element with id 'lastName': " + nextSibling.nodeName);
console.log("Previous sibling of element with id 'lastName': " + previousSibling.nodeName);

// vi. Get parent node and node type of element having id “email”
var emailNode = document.getElementById("email");
var parentNode = emailNode.parentNode;
console.log("Parent node of element with id 'email': " + parentNode.nodeName);
console.log("Node type of element with id 'email': " + emailNode.nodeType);

// 2. use HTML code of question 1 and show the result on browser.

// i. What is node type of element having id “form-content”.
// ii. Show node type of element having id “lastName” and its child node.
// iii. Update child node of element having id “lastName”.
// iv. Get First and last child of id “main-content”.
// v. Get next and previous siblings of id “lastName”.
// vi. Get parent node and node type of element having id “email”
