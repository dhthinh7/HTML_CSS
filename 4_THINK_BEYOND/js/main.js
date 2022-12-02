/* Scale header bar */
window.onscroll = function(){
  var navHeader = document.getElementById("wrap");
  console.log(navHeader);
  // var currentName = document.querySelector()
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    // navHeader.style.height = "60px";
    navHeader.classList.add("navbarWrapper");
  }
  else{
    // navHeader.style.height = "100px";
    navHeader.classList.remove("navbarWrapper");
  }
}

