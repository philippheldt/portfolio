var pos = 1;
var direction = -1;

const leftButton = document.querySelector("#j-left");
const rightButton = document.querySelector("#j-right");
const slider = document.querySelector(".slider-b");
const sliderPos1 = document.querySelector(".pos-1-slider");
const sliderPos2 = document.querySelector(".pos-2-slider");
const carousel = document.querySelector(".b-gray-s");
const portfolio = document.querySelector("#portfolio");
const loadingContent = document.querySelector(".loading-content");
const jobMore = document.querySelector("#job-more");

var loadingAnimation = lottie.loadAnimation({
  container: document.getElementById("load"),
  renderer: "svg",
  loop: true,
  autoplay: false,
  path: "animation/loading.json",
});

async function waitLoader(passthrough, passthroughString) {
  await changeContent(passthrough, passthroughString);
  setTimeout(function () {
    portfolio.style.opacity = "1";
    loadingContent.style.transform = "translateY(100px)";
    loadingAnimation.stop();
  }, 250);
}

changeContent(webDev, "webDev");

leftButton.addEventListener("click", function () {
  if (direction === -1) {
    slider.appendChild(slider.firstElementChild);
    carousel.style.justifyContent = "flex-end";
    direction = 1;
  }
  slider.style.transform = "translateX(200px)";
  sliderPos1.children[pos - 1].style.opacity = "0";
  sliderPos2.children[pos - 1].style.opacity = "0";
  portfolio.style.opacity = "0";
  loadingContent.style.transform = "translateY(0)";
  loadingAnimation.play();
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
  portfolio.style.opacity = "0";
  loadingContent.style.transform = "translateY(0)";
  loadingAnimation.play();
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

  if (pos === 3) {
    waitLoader(cutter, "cutter");
    jobMore.innerHTML = "grafik.";
  } else if (pos === 2) {
    waitLoader(grafik, "grafik");
    jobMore.innerHTML = "webdev.";
  } else if (pos === 1) {
    waitLoader(webDev, "webDev");
    jobMore.innerHTML = "video.";
  }

  console.log(pos);
  setTimeout(function () {
    slider.style.transition = "all 0.5s ease";
    sliderPos1.style.transition = "all 0.5s ease";
  });
});

var currentJob;

function changeNameMore(job) {
  currentJob = jobMore.innerHTML;
  if (currentJob !== job) {
    jobMore.style.opacity = "0";
    setTimeout(function () {
      jobMore.innerHTML = job;
      jobMore.style.opacity = "1";
    }, 250);
  }
}

inView("#more-2")
  .on("enter", () => {
    if (pos === 3) {
      changeNameMore("webdev.");
    } else if (pos === 2) {
      changeNameMore("video.");
    } else if (pos === 1) {
      changeNameMore("grafik.");
    }
  })
  .on("exit", () => {});

inView("#more-1")
  .on("enter", () => {
    if (pos === 3) {
      changeNameMore("grafik.");
    } else if (pos === 2) {
      changeNameMore("webdev.");
    } else if (pos === 1) {
      changeNameMore("video.");
    }
  })
  .on("exit", () => {});
