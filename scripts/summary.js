window.onscroll = function() {stickyNav()};

var navbar = document.getElementById("myTopnav");
var sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

var desc = document.getElementById("desc");
var my_pic = document.getElementById("my_pic");

document.getElementById("desc").style.opacity = 0;

setTimeout(function(){
    fadeIn(desc);
  }, 1000);

function fadeIn(elem) {
  if (elem == document.getElementById("replay")){
    elem.disabled = false;
  }
  var op = 0.01;
  elem.style.display = 'block';
  var timer = setInterval(function () {
      if (op >= 1){
          clearInterval(timer);
      }
      elem.style.opacity = op;
      elem.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op += op * 0.1;
  }, 25);
};
