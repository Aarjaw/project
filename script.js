document.addEventListener("DOMContentLoaded", function () {
  let facebook = document.querySelector("#facebook");
  let github = document.querySelector("#github");
  let instagram = document.querySelector("#instagram");

  facebook.addEventListener("click", () => {
    window.open("https://www.facebook.com");
  });

  github.addEventListener("click", () => {
    window.open("https://github.com/facebook/react/releases");
  });

  instagram.addEventListener("click", () => {
    window.open("https://www.instagram.com");
  });
});
