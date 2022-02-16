var pos = 1;

const leftButton = document.querySelector("#j-left");
const rightButton = document.querySelector("#j-right");
const slider = document.querySelector(".slider-b");
const carousel = document.querySelector(".b-gray-s");
const sliderPos2 = document.querySelector(".pos-2-slider");
const carouselPos2 = document.querySelector(".img-pos-2");
const sliderPos1 = document.querySelector(".pos-1-slider");
const carouselPos1 = document.querySelector(".img-pos-1");

var direction = -1;

leftButton.addEventListener("click", function () {
  if (direction === -1) {
    slider.appendChild(slider.firstElementChild);
    sliderPos1.appendChild(sliderPos1.firstElementChild);
    sliderPos2.appendChild(sliderPos2.firstElementChild);
    direction = 1;
  }
  carousel.style.justifyContent = "flex-end";
  carouselPos1.style.justifyContent = "flex-end";
  carouselPos2.style.justifyContent = "flex-end";
  slider.style.transform = "translateX(200px)";
  sliderPos1.style.transform = "translateX(100%)";
  sliderPos2.style.transform = "translateX(100%)";
});

rightButton.addEventListener("click", function () {
  if (direction === 1) {
    slider.prepend(slider.lastElementChild);
    sliderPos1.prepend(sliderPos1.lastElementChild);
    sliderPos2.prepend(sliderPos2.lastElementChild);
    carousel.style.justifyContent = "flex-start";
    carouselPos1.style.justifyContent = "flex-start";
    carouselPos2.style.justifyContent = "flex-start";
    direction = -1;
  }
  slider.style.transform = "translateX(-200px)";
  sliderPos1.style.transform = "translateX(-100%)";
  sliderPos2.style.transform = "translateX(-100%)";
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

sliderPos1.addEventListener("transitionend", function () {
  if (direction === -1) {
    sliderPos1.appendChild(sliderPos1.firstElementChild);
  } else if (direction === 1) {
    sliderPos1.prepend(sliderPos1.lastElementChild);
  }

  sliderPos1.style.transition = "none";
  sliderPos1.style.transform = "translateX(0)";

  setTimeout(function () {
    sliderPos1.style.transition = "all 0.5s ease";
  });
});

sliderPos2.addEventListener("transitionend", function () {
  if (direction === -1) {
    sliderPos2.appendChild(sliderPos2.firstElementChild);
  } else if (direction === 1) {
    sliderPos2.prepend(sliderPos2.lastElementChild);
  }

  sliderPos2.style.transition = "none";
  sliderPos2.style.transform = "translateX(0)";

  setTimeout(function () {
    sliderPos2.style.transition = "all 0.5s ease";
  });
});
