document.addEventListener("DOMContentLoaded", function () {
  let facebook = document.querySelector("#facebook");
  let github = document.querySelector("#github");
  let instagram = document.querySelector("#instagram");
  let linkedin = document.querySelector("#linkedin");
  let snapchat = document.querySelector("#snapchat");

  facebook.addEventListener("click", () => {
    window.open("https://www.facebook.com");
  });

  github.addEventListener("click", () => {
    window.open("https://github.com/facebook/react/releases");
  });

  instagram.addEventListener("click", () => {
    window.open("https://www.instagram.com");
  });

  linkedin.addEventListener("click", () => {
    window.open("https://www.linkedin.com");
  });

  snapchat.addEventListener("click", () => {
    window.open("https://www.snapchat.com");
  });
});
