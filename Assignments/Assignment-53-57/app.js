//EVENTS
// 1. Consider you have 4 images in a file as shown below: 
// Now When you click on an image it should display in a modal.
// Modal code is available in this assignment file.
function openModal(imageSrc) {
  var modal = document.getElementById("modal");
  var modalImage = document.getElementById("modal-image");
  modal.style.display = "block";
  modalImage.src = imageSrc;
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

// 2. Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-).
// On each click on “zoom in”(+) , add 10px in font size of paragraph.
// And on each click on “zoom out”(-) , minus 10px in font size of paragraph.


function zoomIn() {
  var para = document.getElementById("text");
  var fontSize = parseInt(window.getComputedStyle(para).fontSize);
  para.style.fontSize = (fontSize + 10) + "px";
}
function zoomOut() {
  var para = document.getElementById("text");
  var fontSize = parseInt(window.getComputedStyle(para).fontSize);
  para.style.fontSize = (fontSize - 10) + "px";
}
