/* eslint-disable quotes */
// import axios from "./axios.js";

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
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 5 + 0.5
        }s`;
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

const sendEmail = () => {
  $(".contact-form").submit((ev) => {
    ev.preventDefault();
    let name = ev.target.name.value;
    let email = ev.target.email.value;
    let content = ev.target.content.value;

    $(".form-container").toggleClass("submitted");
    $(".contact-form").toggleClass("submitted");
    $(".message-header").toggleClass("submitted");
    $(".reply-container").toggleClass("thank-you-msg");

    fetch(
      "https://yfxth9xlwl.execute-api.us-west-2.amazonaws.com/prod/email/send",
      {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          content: content,
        }),
      }
    )
      .then((res) => res.json())
      .catch((err) => console.error(err));
    ev.target.name.value = "";
    ev.target.email.value = "";
    ev.target.content.value = "";
  });
};

const closeMsg = () => {
  $(".close-msg").click(() => {
    $(".form-container").toggleClass("submitted");
    $(".contact-form").toggleClass("submitted");
    $(".message-header").toggleClass("submitted");
    $(".reply-container").toggleClass("thank-you-msg");
  });
};
const main = function () {
  navSlide();
  hideMenu();
  sendEmail();
  closeMsg();
};

$(main);
