/*
Title: W3.CSS Lightbox
Author: W3Schools
Date:
Code version:
Availability:
Location: https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_modal_lightbox
*/

var modalOpen2 = false;

// Open the Modal
function openModal2() {
  modalOpen2 = true;
  disableScroll2();
  document.getElementById("myModal2").style.display = "block";
}

// Close the Modal
function closeModal2() {
  modalOpen2 = false;
  enableScroll2();
  document.getElementById("myModal2").style.display = "none";
}

var slideIndex = 1;
showSlides2(slideIndex);

// Next/previous controls
function plusSlides2(n) {
  showSlides2(slideIndex += n);
}

// Thumbnail image controls
function currentSlide2(n) {
  showSlides2(slideIndex = n);
}

function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/*
Title: How to disable scrolling temporarily using JavaScript?
Author: GeeksforGeeks
Date:
Code version:
Availability:
Location: https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_modal_lightbox
*/

// Disable scroll
function disableScroll2() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  document.body.style.overflow = 'hidden'; // hide scroll bars
  window.onscroll = function() {
      window.scrollTo(scrollLeft, scrollTop);
  };
}

// Enable scroll
function enableScroll2() {
  document.body.style.overflow = 'visible'; // show scroll bars
  window.onscroll = function() {};
}
