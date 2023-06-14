
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

