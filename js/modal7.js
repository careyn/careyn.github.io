
var modal7 = document.getElementById("myModal7");

// Get the button that opens the modal
var btn7 = document.getElementById("myBtn7");

// Get the <span> element that closes the modal
var span7 = document.getElementById("x7");

// When the user clicks the button, open the modal 
btn7.onclick = function() {
  modal7.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span7.onclick = function() {
  modal7.style.display = "none";
}
