var pos = 1;
var direction = -1;

const leftButton = document.querySelector("#j-left");
const rightButton = document.querySelector("#j-right");
const slider = document.querySelector(".slider-b");
const sliderPos1 = document.querySelector(".pos-1-slider");
const sliderPos2 = document.querySelector(".pos-2-slider");
const carousel = document.querySelector(".b-gray-s");

leftButton.addEventListener("click", function () {
  if (direction === -1) {
    slider.appendChild(slider.firstElementChild);
    carousel.style.justifyContent = "flex-end";
    direction = 1;
  }
  slider.style.transform = "translateX(200px)";
  sliderPos1.children[pos - 1].style.opacity = "0";
  sliderPos2.children[pos - 1].style.opacity = "0";
});

rightButton.addEventListener("click", function () {
  if (direction === 1) {
    slider.prepend(slider.lastElementChild);
    carousel.style.justifyContent = "flex-start";
    direction = -1;
  }
  slider.style.transform = "translateX(-200px)";
  sliderPos1.children[pos - 1].style.opacity = "0";
  sliderPos2.children[pos - 1].style.opacity = "0";
});

slider.addEventListener("transitionend", function () {
  if (direction === -1) {
    slider.appendChild(slider.firstElementChild);
    pos < 3 ? pos++ : (pos = 1);
  } else if (direction === 1) {
    slider.prepend(slider.lastElementChild);
    pos === 1 ? (pos = 3) : pos--;
  }

  slider.style.transition = "none";
  slider.style.transform = "translateX(0)";

  sliderPos1.children[pos - 1].style.opacity = "1";
  sliderPos2.children[pos - 1].style.opacity = "1";

  console.log(pos);
  setTimeout(function () {
    slider.style.transition = "all 0.5s ease";
    sliderPos1.style.transition = "all 0.5s ease";
  });
});
