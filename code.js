document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;
  const openBtn = document.querySelector('.scw-header__menu-btn');
  const closeBtn = document.querySelector('.scw-mobile-menu__close');
  const overlay = document.querySelector('.scw-mobile-menu__overlay');

  if (openBtn) {
    openBtn.addEventListener('click', function () {
      body.classList.add('scw-menu-open');
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      body.classList.remove('scw-menu-open');
    });
  }

  if (overlay) {
    overlay.addEventListener('click', function () {
      body.classList.remove('scw-menu-open');
    });
  }
});
const textBox = document.getElementById("textBox");
const closeBtn = document.getElementById("closeBtn");
const textBtn = document.getElementById("textBtn");

/* Show box on page load with animation */

window.addEventListener("load", () => {

  setTimeout(() => {
    textBox.classList.add("show");
  }, 800);

});

/* Close message */

closeBtn.addEventListener("click", () => {
  textBox.classList.remove("show");
});

/* Button click */

textBtn.addEventListener("click", () => {

  alert("Redirect to SMS or Chat here");

});
const topBtn = document.getElementById("topBtn");
const shareBtn = document.getElementById("shareBtn");
const undoBtn = document.getElementById("undoBtn");

/* Scroll to top */

topBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

/* Share */

shareBtn.onclick = () => {

  if (navigator.share) {
    navigator.share({
      title: "My Website",
      url: window.location.href
    });
  } else {
    alert("Sharing not supported on this browser");
  }

};

/* Undo / Back */

undoBtn.onclick = () => {
  window.history.back();
};