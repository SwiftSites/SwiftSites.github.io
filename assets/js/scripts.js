function animate() {
  document.getElementsByClassName("title")[0].style.display = "block";
  document.getElementsByClassName("subtitle")[0].style.display = "block";
  document.getElementsByClassName("title")[0].className += " animated slideInLeft";
  document.getElementsByClassName("subtitle")[0].className += " animated slideInLeft";
  setTimeout(function () {
    document.getElementsByClassName("navbar-special-item")[0].className += " animated fadeInDown";
    document.getElementsByClassName("navbar-special-item")[0].style.display = "block";

    for (var i = 0; i < document.getElementsByClassName("navbar-item").length; i++) {
      document.getElementsByClassName("navbar-item")[i].className += " animated fadeInDown";
      document.getElementsByClassName("navbar-item")[i].style.display = "block";
    }
  }, 1000);
}
