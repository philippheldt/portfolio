var pos = 1;

const leftButton = document.querySelector("#j-left");
const rightButton = document.querySelector("#j-right");
const slider = document.querySelector(".slider-b");
const carousel = document.querySelector(".b-gray-s");

var direction = -1;

leftButton.addEventListener("click", function () {
  if (direction === -1) {
    slider.appendChild(slider.firstElementChild);
    direction = 1;
  }
  carousel.style.justifyContent = "flex-end";
  slider.style.transform = "translateX(200px)";
});

rightButton.addEventListener("click", function () {
  if (direction === 1) {
    slider.prepend(slider.lastElementChild);
    carousel.style.justifyContent = "flex-start";
    direction = -1;
  }
  slider.style.transform = "translateX(-200px)";
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

  console.log(pos);
  setTimeout(function () {
    slider.style.transition = "all 0.5s ease";
  });
});
