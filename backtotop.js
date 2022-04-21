const button = document.querySelector(".btn-goup");

function showButton() {
  if (window.scrollY > 600) {
    button.style.opacity = 1;
    button.style.pointerEvents = "all";
  } else if (window.scrollY < 600) {
    button.style.opacity = 0;
    button.style.pointerEvents = "none";
  }
}

window.addEventListener("scroll", showButton);
