"use strict";
const arrowUp = document.querySelector(".arrowUp");

arrowUp.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
function scrollDisappear() {
  if (pageYOffset > 300) {
    arrowUp.style.display = "block";
  } else {
    arrowUp.style.display = "none";
  }
}
window.addEventListener("scroll", scrollDisappear);
