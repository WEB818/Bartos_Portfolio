/* eslint-disable quotes */

const navSlide = () => {
  const navLinks = document.querySelectorAll('.nav-links li');
  const burger = document.getElementById('burger');
  burger.addEventListener('click', function () {
    //Toggle Nav
    const nav = document.getElementById('nav-links');
    nav.classList.toggle('nav-active');
    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 5 + 0.5
        }s`;
      }
    });
    //Burger animation
    burger.classList.toggle('bar');
  });
};

const hideMenu = () => {
  const navLinks = document.querySelectorAll('.nav-links li');
  const burger = document.getElementById('burger');
  const menuItem = document.querySelectorAll('li');

  menuItem.forEach((item) => {
    item.addEventListener('click', function () {
      const nav = document.getElementById('nav-links');
      nav.classList.toggle('nav-active');

      navLinks.forEach((link) => {
        link.style.animation = '';
      });
      //Burger animation
      burger.classList.toggle('bar');
    });
  });
};

const castShadow = () => {
  const letters = document.getElementById('letters');
  const w = document.getElementById('w');
  const e = document.getElementById('e');
  const b = document.getElementById('b');

  letters.addEventListener('mouseover', function () {
    w.innerHTML = 'w';
    e.innerHTML = 'e';
    b.innerHTML = 'b';
  });

  letters.addEventListener('mouseout', function () {
    w.innerHTML = '';
    e.innerHTML = '';
    b.innerHTML = '';
  });
};

const hexHovers = () => {
  let hex = document.getElementById('hex-landscape');

  hex.addEventListener('mouseover', function (event) {
    event.target.classList.toggle('clear-hex');
    setTimeout(function () {
      event.target.classList.toggle('clear-hex');
    }, 4000);
  });
};

const setSvgViewBox = () => {
  let screenType =
    screen.orientation || screen.mozOrientation || screen.msOrientation;
  let originalType = screenType.type;
  const svg = document.getElementById('hex');
  const titles = document.querySelector('.titles');

  const landscape = document.getElementById('hex-landscape');
  const portrait = document.getElementById('hex-portrait');

  let message = document.getElementById('orientation-msg');
  let landscapeBox = landscape.getBBox();
  let viewBox = [
    landscapeBox.x,
    landscapeBox.y,
    landscapeBox.width,
    landscapeBox.height,
  ].join(' ');

  let portraitBox = portrait.getBBox();
  let portraitViewBox = [
    portraitBox.x,
    portraitBox.y,
    portraitBox.width,
    portraitBox.height,
  ].join(' ');
  svg.setAttribute('viewBox', portraitViewBox);

  console.log('type before refresh', originalType);
  screenType.onchange = function (e) {
    let orientation = e.target.type;

    // if (orientation !== originalType) {
    //   console.log('please refresh');
    //   originalType = orientation;
    //   console.log('type after refresh', originalType);
    //   svg.style.display = 'none';
    //   titles.style.display = 'none';
    //   message.classList.add('message');
    //   message.innerHTML = "Please refresh page";
    // }

    if (
      orientation === 'portrait-primary' ||
      orientation === 'portrait-secondary'
    ) {
      landscape.style.display = 'none';
      portrait.style.display = 'block';
      portrait.setAttribute('viewBox', portraitViewBox);
      console.log('orientation', orientation);
    } else if (
      orientation === 'landscape-primary' ||
      orientation === 'landscape-secondary'
    ) {
      portrait.style.display = 'none';
      landscape.style.display = 'block';
      console.log('orientation', orientation);
      landscape.setAttribute('viewBox', viewBox);
    }
  };
};

const beeCursor = () => {
  const beeArea = document.querySelector('#hex');
  const titleCard = document.querySelector('.titles');

  let xDir;
  let prevX = 0;

  beeArea.addEventListener('mousemove', function (e) {
    //handle horizontal case
    if (prevX < e.pageX) {
      xDir = 'right';
      beeArea.style.cursor =
        "url('https://proportfolio.s3-us-west-1.amazonaws.com/rBee.png'),auto";
      titleCard.style.cursor =
        "url('https://proportfolio.s3-us-west-1.amazonaws.com/rBee.png'),auto";
    } else {
      xDir = 'left';
      beeArea.style.cursor =
        "url('https://proportfolio.s3-us-west-1.amazonaws.com/lBee.png'), auto";
      titleCard.style.cursor =
        "url('https://proportfolio.s3-us-west-1.amazonaws.com/lBee.png'), auto";
    }

    prevX = e.pageX;
  });
};

const sendEmail = () => {
  $('.contact-form').submit((ev) => {
    ev.preventDefault();
    let name = ev.target.name.value;
    let email = ev.target.email.value;
    let content = ev.target.content.value;

    $('.form-container').toggleClass('submitted');
    $('.contact-form').toggleClass('submitted');
    $('.message-header').toggleClass('submitted');
    $('.reply-container').toggleClass('thank-you-msg');

    fetch(
      'https://yfxth9xlwl.execute-api.us-west-2.amazonaws.com/prod/email/send',
      {
        method: 'POST',
        body: JSON.stringify({
          name: name,
          email: email,
          content: content,
        }),
      }
    )
      .then((res) => res.json())
      .catch((err) => console.error(err));
    ev.target.name.value = '';
    ev.target.email.value = '';
    ev.target.content.value = '';
  });
};

const closeMsg = () => {
  $('.close-msg').click(() => {
    $('.form-container').toggleClass('submitted');
    $('.contact-form').toggleClass('submitted');
    $('.message-header').toggleClass('submitted');
    $('.reply-container').toggleClass('thank-you-msg');
  });
};

const main = function () {
  navSlide();
  hideMenu();
  sendEmail();
  closeMsg();
  castShadow();
  hexHovers();
  setSvgViewBox();
  beeCursor();
};

$(main);
