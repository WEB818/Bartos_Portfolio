/* eslint-disable quotes */

const navSlide = () => {
  const navLinks = document.querySelectorAll(".nav-links li");

  $(".burger").click(() => {
    //Toggle Nav
    $(".nav-links").toggleClass("nav-active");
    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 +
          0.5}s`;
      }
    });
    //Burger animation
    $(".burger").toggleClass("bar");
  });
};

const hideMenu = () => {
  const navLinks = document.querySelectorAll(".nav-links li");
  $("li").click(() => {
    $(".nav-links").toggleClass("nav-active");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = "";
      }
    });
    //Burger animation
    $(".burger").toggleClass("bar");
  });
};

const main = function() {
  navSlide();
  hideMenu();
};

$(main);
