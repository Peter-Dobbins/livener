
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

var elements = document.querySelectorAll('.animate');
var currentIndex = 0;
var lastScrollTop = 0;
var delay = 1000; // Adjust the delay value as needed

window.addEventListener('scroll', function() {
  var st = window.pageYOffset || document.documentElement.scrollTop;
  var scrollDirection = st > lastScrollTop ? 'down' : 'up';
  lastScrollTop = st;

  if (scrollDirection === 'down') {
    var positionFromTop = elements[currentIndex].getBoundingClientRect().top;
    
    if (positionFromTop - window.innerHeight <= 0) {
      setTimeout(function() {
        elements[currentIndex].classList.add('animate-in');
        currentIndex++;
      }, delay);
    }
  } else if (scrollDirection === 'up') {
    if (currentIndex > 0) {
      currentIndex--;
      elements[currentIndex].classList.remove('animate-in');
    }
  }
});









  
