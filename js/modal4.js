window.onload = function(){
  var modal4 = document.getElementById("myModal4");

  // Get the button that opens the modal
  var btn4 = document.getElementById("myBtn4");

  // Get the <span> element that closes the modal
  var span4 = document.getElementById("x4");

  // When the user clicks the button, open the modal 
  btn4.onclick = function() {
    modal4.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span4.onclick = function() {
    modal4.style.display = "none";
  }
}