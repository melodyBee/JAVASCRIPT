//EVENTS
// 1. Create a signup form and display form data in your web 
// page on submission.
function FormData() {
  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;

  var formData = "First Name: " + firstName + "<br>" +
    "Last Name: " + lastName + "<br>" +
    "Email: " + email;

  // document.getElementById("formDataDisplay").innerHTML = formData;
}
// 2. Suppose in your webpage there is content area in which
// you have entered your item details, but user can only see 
// some details on first look. When user clicks on “Read 
// more” button, full detail of that particular item will be 
// displayed. 
function showDetails(button) {
  var item = button.parentElement;
  var details = item.querySelector('.details');

  details.style.display = 'block';
  button.style.display = 'none';
}
// 3. In previous assignment you have created a tabular data
// using javascript. Let’s modify that. Create a form which 
// takes student’s details and show each student detail in 
// table. Each row of table must contain a delete button and 
// an edit button. On click on delete button entire row should 
// be deleted. On click on edit button, a hidden form will 
// appear with the values of that row.
function addStudent() {
  var name = document.getElementById('name').value;
  var age = document.getElementById('age').value;
  var table = document.getElementById('student-table');

  var row = table.insertRow();

  var nameCell = row.insertCell();
  var ageCell = row.insertCell();
  var actionsCell = row.insertCell();

  nameCell.innerHTML = name;
  ageCell.innerHTML = age;
  actionsCell.innerHTML = '<button onclick="editStudent(this)">Edit</button> <button onclick="deleteStudent(this)">Delete</button>';

  document.getElementById('name').value = '';
  document.getElementById('age').value = '';
}

function deleteStudent(button) {
  var row = button.parentElement.parentElement;
  row.parentNode.removeChild(row);
}

function editStudent(button) {
  var row = button.parentElement.parentElement;
  var name = row.cells[0].innerHTML;
  var age = row.cells[1].innerHTML;

  document.getElementById('edit-name').value = name;
  document.getElementById('edit-age').value = age;
  document.getElementById('hidden-form').style.display = 'block';
}

function updateStudent() {
  var name = document.getElementById('edit-name').value;
  var age = document.getElementById('edit-age').value;

  var row = document.getElementById('student-table').rows[selectedIndex];
  row.cells[0].innerHTML = name;
  row.cells[1].innerHTML = age;

  document.getElementById('hidden-form').style.display = 'none';
}

var selectedIndex = -1;

function selectRow(index) {
  selectedIndex = index;
}