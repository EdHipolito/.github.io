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

var i = 0;
var txt = "Hi, I'm Ed.";
var prof = document.getElementById("prof");
var desc = document.getElementById("desc");
var ps = document.getElementById("ps");
var my_pic = document.getElementById("my_pic");

document.getElementById("prof").style.opacity = 0;
document.getElementById("desc").style.opacity = 0;
document.getElementById("ps").style.opacity = 0;

typeWriter();
setTimeout(function(){
    fadeIn(prof);
  }, 1200);
setTimeout(function(){
    fadeIn(desc);
  }, 1700);
setTimeout(function(){
    fadeIn(my_pic);
  }, 2000);
setTimeout(function(){
    fadeIn(ps);
  }, 3500);
setTimeout(function(){
    document.getElementById("ps").style.color = "red";
    document.getElementById("ps").innerHTML = "PLEASE";
  }, 5000);
setTimeout(function(){
    document.getElementById("ps").style.color = "red";
    document.getElementById("ps").innerHTML = "";
  }, 5500);

function typeWriter() {
  var speed = 100;
  if (i < txt.length) {
    document.getElementById("intro").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

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
