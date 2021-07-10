$(document).ready(function(){
  var modal5 = document.getElementById("myModal5");

  // Get the button that opens the modal
  var btn5 = document.getElementById("myBtn5");

  // Get the <span> element that closes the modal
  var span5 = document.getElementById("x5");

  // When the user clicks the button, open the modal 
  btn5.onclick = function() {
    modal5.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span5.onclick = function() {
    modal5.style.display = "none";
  }
})