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

const viewMore = () => {
  $(".content").click(() => {
    $(".read-more").toggleClass("view-active");
  });
};
const viewLess = () => {
  $(".read-less").click(() => {
    $(".read-less").toggleClass("read-more");
  });
};
const main = function() {
  navSlide();
  viewMore();
  viewLess();
};

$(main);
