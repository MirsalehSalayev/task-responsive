window.onscroll = function() {
    myFunction()
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction(){
  window.pageYOffset >= sticky ? navbar.classList.add('sticky') : navbar.classList.remove('sticky');
}