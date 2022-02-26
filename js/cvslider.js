var countYears = 0;

const leftButtonCV = document.querySelector("#cv-left");
const rightButtonCV = document.querySelector("#cv-right");
const sliderCV = document.querySelector(".slider-b-cv");
const carouselCV = document.querySelector(".b-gray-s");
const worldPos = document.querySelector("#world-pos");

leftButtonCV.style.backgroundColor = "#e6e6e6";
leftButtonCV.style.cursor = "default";

function yearSwitch() {
  switch (countYears) {
    case 0:
      worldPos.style.transform = "translate(-55.6vw, -15.14vh)";
      break;
    case 1:
      worldPos.style.transform = "translate(-90.6vw, -30.14vh)";
      break;
    case 2:
      worldPos.style.transform = "translate(-55.6vw, -15.14vh)";
      break;
    case 3:
      worldPos.style.transform = "translate(-55.6vw, -15.14vh)";
      break;
    case 4:
      worldPos.style.transform = "translate(-50.6vw, -0vh)";
      break;
    case 5:
      worldPos.style.transform = "translate(-55.6vw, -15.14vh)";
      break;
  }
}

leftButtonCV.addEventListener("click", function () {
  if (countYears > 0) {
    countYears--;
    sliderCV.style.transform = "translateX(-" + countYears * 200 + "px)";
    yearSwitch();
  }
  if (countYears === 0) {
    leftButtonCV.style.backgroundColor = "#e6e6e6";
    leftButtonCV.style.cursor = "default";
  } else {
    rightButtonCV.style.backgroundColor = "#fffd63";
    leftButtonCV.style.backgroundColor = "#fffd63";
    leftButtonCV.style.cursor = "pointer";
  }
});

rightButtonCV.addEventListener("click", function () {
  if (countYears < 5) {
    countYears++;
    sliderCV.style.transform = "translateX(-" + countYears * 200 + "px)";
    yearSwitch();
  }
  if (countYears === 5) {
    rightButtonCV.style.backgroundColor = "#e6e6e6";
    rightButtonCV.style.cursor = "default";
  } else {
    rightButtonCV.style.backgroundColor = "#fffd63";
    leftButtonCV.style.backgroundColor = "#fffd63";
    rightButtonCV.style.cursor = "pointer";
  }
});
