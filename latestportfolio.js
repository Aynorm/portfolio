//Background changer
    
    
      // function myFunction() {
      //   var element = document.body;
      //   element.classList.toggle("dark-mode");
      // }
    
    //Background changer

//Nav js
// function openNav() {
//   document.getElementById("mySidebar").style.width = "100%";
//   document.getElementById("main").style.marginLeft = "250px";
// }

// function closeNav() {
//   document.getElementById("mySidebar").style.width = "0";
//   document.getElementById("main").style.marginLeft= "0";
// }
//Nav js


export const mobileNav = 
"<div class='mobilenav-top top-glass-background'>\
<div class='mobile-logo-div'><img class='logo-img' src='aynorm freelance.png' alt='Logo'> <p class='name-logo'>ynorm</p></div>\
<div class='hire-me-div'> <a href='https://aynorm.github.io/portfolio/hire-me'> <img class='logo-img' src='hire me btn.png' alt='hire-me'></a> </div>\
</div>\
<hr>"

document.getElementById("mobileNav").innerHTML = mobileNav;

export const navTop =
"<div class='first-top top-glass-background' >\
<div class='image-div'><img class='logo-img' src='aynorm freelance.png' alt='Logo'> <p class='name-logo'>ynorm</p></div>\
<div class='group-div'><ul class='top-ul'><li class='top-li'><a class='a-color-alt' href='https://aynorm.github.io/portfolio/latestportfolio.html'>Home</a></li><li class='top-li'><a class='a-color-alt' href='https://aynorm.github.io/portfolio/about'>About</a></li><li class='top-li'><a class='a-color-alt' href='https://aynorm.github.io/portfolio/portfolio'>Portfolio</a></li><li class='top-li'><a class='a-color-alt' href='https://aynorm.github.io/portfolio/contact'>Contact</a></li><li class='top-li'><a class='a-color-alt' href='https://aynorm.github.io/portfolio/hire-me'>Hire Me</a></li></ul></div>\
<div class='hire-me-div'> <a class='a-color-alt' href='https://aynorm.github.io/portfolio/hire-me'> <img class='logo-img' src='hire me btn.png' alt='hire me'></a> </div>\
</div>\
"

document.getElementById("navTop").innerHTML = navTop;

export const bottomNav =
  "<div class='mobile top-glass-background'>\
  <ul class='ul-bottom'>\
  <li class='bottom-btn'> <a href='https://aynorm.github.io/portfolio/latestportfolio.html'><p class='p-bottom'>Home</p> <img class='bottom-img' src='home btn.png' alt='home'> </a> </li>\
  <li class='bottom-btn'> <a href='https://aynorm.github.io/portfolio/about'><p class='p-bottom'>About</p><img class='bottom-img' src='about btn.png' alt='about'> </a> </li>\
  <li class='bottom-btn'> <a href='https://aynorm.github.io/portfolio/portfolio'><p class='p-bottom'>Portfolio</p><img class='bottom-img' src='portfolio btn.png' alt='portfolio'> </a> </li>\
  <li class='bottom-btn'> <a href='https://aynorm.github.io/portfolio/contact'><p class='p-bottom'>Contact</p> <img class='bottom-img' src='blog btn.png' alt='blog'> </a> </li>\
  <li class='bottom-btn'> <a href='https://aynorm.github.io/portfolio/hire-me'><p class='p-bottom'>Services</p><img class='bottom-img' src='services btn.png' alt='services'></a> </li>\
  </ul>\
  </div>\
"

document.getElementById("bottomNav").innerHTML = bottomNav;