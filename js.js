function myFunction() {
  var x = document.getElementById("myTopNav");
  if (x.className === "topnav") {
    x.classList.add("responsive");
  } else {
    x.classList.remove("responsive");
  }
}
