var modal9 = document.getElementById("myModal9");

// Get the button that opens the modal
var btn9 = document.getElementById("myBtn9");

// Get the <span> element that closes the modal
var span9 = document.getElementById("x9");

// When the user clicks the button, open the modal 
btn9.onclick = function() {
  modal9.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span9.onclick = function() {
  modal9.style.display = "none";
}

