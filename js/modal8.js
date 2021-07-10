$(document).ready(function(){
  var modal8 = document.getElementById("myModal8");
  // Get the button that opens the modal
  var btn8 = document.getElementById("myBtn8");

  // Get the <span> element that closes the modal
  var span8 = document.getElementById("x8");

  // When the user clicks the button, open the modal 
  btn8.onclick = function() {
    modal8.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span8.onclick = function() {
    modal8.style.display = "none";
  }
})
