//EVENTS
// 1. Consider you have 4 images in a file as shown below: 
// Now When you click on an image it should display in a modal.
// Modal code is available in this assignment file.

function openModal(imageSrc) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImage");
  var closeBtn = document.getElementsByClassName("close")[0];

  modal.style.display = "block";
  modalImg.src = imageSrc;

  // Close modal when the user clicks on the close button (X)
  closeBtn.onclick = function() {
      closeModal();
  }

  // Close modal when the user clicks anywhere outside the image
  window.onclick = function(event) {
      if (event.target == modal) {
          closeModal();
      }
  }

  function closeModal() {
      modal.style.display = "none";
  }
}

// 2. Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-).
// On each click on “zoom in”(+) , add 10px in font size of paragraph.
// And on each click on “zoom out”(-) , minus 10px in font size of paragraph.

function zoomIn(img) {
  document.getElementById("zoom-image").style.display = "block";
  document.getElementById("zoom-image").getElementsByTagName("img")[0].src = img.src;
}
function zoomOut() {
  document.getElementById("zoom-image").style.display = "none";
}

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
