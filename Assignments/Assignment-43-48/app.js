//EVENTS
// 1. Show an alert box on click on a link.
function showAlert() {
    alert("Link clicked!");
}
// 2. Display some Mobile images in browser. On click on an 
// image Show the message in alert to user.
function showAlert(message) {
    alert(message);
}
// 3. Display 10 student records in table and each row should contain a delete
// button. If you click on a button to delete a record, entire row should be 
// deleted. 
// Before delete
// After click on delete button on “Mark ” row
function deleteRow(row) {
    var i = row.parentNode.parentNode.rowIndex;
    document.getElementById("studentTable").deleteRow(i);
}
// 4. Display an image in browser. Change the picture on mouseover and set the
// first picture on mouseout.
function changeImage(imageId, newImage) {
    var image = document.getElementById(imageId);
    image.src = newImage;
}
function restoreImage(imageId, originalImage) {
    var image = document.getElementById(imageId);
    image.src = originalImage;
}
// 5. Show a counter in browser. Counter should increase on click on increase 
// button and decrease on click on decrease button. And show updated counter 
// value in browser.
var counter = 0;
function increaseCounter() {
    counter++;
    updateCounter();
}
function decreaseCounter() {
    if (counter > 0) {
        counter--;
        updateCounter();
    }
}
function updateCounter() {
    var counterElement = document.getElementById("counter");
    counterElement.innerHTML = counter;
}