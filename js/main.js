/* Photo Fuctions */
/*
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

*/

 /* Header Function */

function move(id) {
  let element = document.getElementById(id)

  element.scrollIntoView({behavior:"smooth"})
}

function menuPos(pageheight) {
  let viewh = document.getElementsByClassName('wrapper')[0].clientHeight;
  let navBar = document.getElementsByTagName("nav")[0];

  if (pageheight < viewh * 0.8) {
    navBar.getElementsByTagName("li")[0].classList.add("active");
  } else {
    navBar.getElementsByTagName("li")[0].classList.remove("active");
  };

  if (viewh * 0.8<= pageheight && pageheight < viewh * 1.8) {
    navBar.getElementsByTagName("li")[1].classList.add("active");
  } else {
    navBar.getElementsByTagName("li")[1].classList.remove("active");
  };

  if (viewh * 1.8 <= pageheight && pageheight < viewh * 2.8) {
    navBar.getElementsByTagName("li")[2].classList.add("active");
  } else {
    navBar.getElementsByTagName("li")[2].classList.remove("active");
  };

  if (viewh * 2.8 <= pageheight) {
    navBar.getElementsByTagName("li")[3].classList.add("active");
  } else {
    navBar.getElementsByTagName("li")[3].classList.remove("active");
  };

}

document.getElementsByClassName('wrapper')[0].addEventListener('scroll', function () {menuPos(document.getElementsByClassName('wrapper')[0].scrollTop)});


/* Info Functions */

function info(id) {

  if (id === "herstelling") {
    for (let i = 0; i <= 1 ; i++) {
      document.getElementsByClassName("herstelling")[i].classList.add("active");
    }
  } else {
    for (let i = 0; i <= 1 ; i++) {
    document.getElementsByClassName("herstelling")[i].classList.remove("active");
    }
  };
  if (id === "renovatie") {
    for (let i = 0; i <= 1 ; i++) {
    document.getElementsByClassName("renovatie")[i].classList.add("active");
    }
  } else {
    for (let i = 0; i <= 1 ; i++) {
    document.getElementsByClassName("renovatie")[i].classList.remove("active");
    }
  };
  if (id === "veiligheid") {
    for (let i = 0; i <= 1 ; i++) {
    document.getElementsByClassName("veiligheid")[i].classList.add("active");
    }
  } else {
    for (let i = 0; i <= 1 ; i++) {
    document.getElementsByClassName("veiligheid")[i].classList.remove("active");
    }
  };
  if (id === "fotografie") {
    for (let i = 0; i <= 1 ; i++) {
    document.getElementsByClassName("fotografie")[i].classList.add("active");
    }
  } else {
    for (let i = 0; i <= 1 ; i++) {
    document.getElementsByClassName("fotografie")[i].classList.remove("active");
    }
  };
}

