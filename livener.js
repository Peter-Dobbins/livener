
//  this is the burger menu 
const burger = document.querySelector('.burger'); 
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('open');
});

// this is for the title shaking when hovered

const titleElement = document.getElementById("livener");

titleElement.addEventListener("mouseover", function() {
  titleElement.classList.add("shaker");
});

titleElement.addEventListener("mouseout", function() {
  titleElement.classList.remove("shaker");
});

// this is for the scrolling events that brings the writing in from the side

window.addEventListener('scroll', function() {
  var elements = document.querySelectorAll('.animate');
  
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var positionFromTop = element.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
    
    if (positionFromTop - windowHeight <= 0) {
      element.classList.add('animate-in');
    }
  }
});








  
