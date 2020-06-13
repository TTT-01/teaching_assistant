


export function navbar()
{
"use strict";
var indicator = document.querySelector('.nav-indicator');
var items = document.querySelectorAll('.nav-item');
function handleIndicator(el) {
  items.forEach(function (item) {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  });
  indicator.style.width = el.offsetWidth + "px";
  indicator.style.left = el.offsetLeft + "px";
  indicator.style.backgroundColor = el.getAttribute('active-color');
  el.classList.add('is-active');
  el.style.color = el.getAttribute('active-color');
}
items.forEach(function (item, index) {
  item.addEventListener('click', function (e) {handleIndicator(e.target);});
  item.classList.contains('is-active') && handleIndicator(item);
});
}


window.onscroll = function() {scrollFunction()};

export function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("bg1").style.width = "15vw";
    document.getElementById("bg1").style.height = "35vh";
    document.getElementById("bg1").style.opacity = "0.4";
    document.getElementById("gotopbtn").style.display = "block";
  } else {
    document.getElementById("bg1").style.width = "50vw";
    document.getElementById("bg1").style.height = "70vh";
    document.getElementById("bg1").style.opacity = "0.9";
    document.getElementById("gotopbtn").style.display = "none";
  }
  
  

}