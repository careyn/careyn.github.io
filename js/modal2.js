$(document).ready(function(){
  var modal2 = document.getElementById("myModal2");

  // Get the button that opens the modal
  var btn2 = document.getElementById("myBtn2");

  // Get the <span> element that closes the modal
  var span2 = document.getElementById("x2");

  // When the user clicks the button, open the modal 
  btn2.onclick = function() {
    modal2.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span2.onclick = function() {
    modal2.style.display = "none";
  }
})