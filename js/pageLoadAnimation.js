var pageLoadingAnimation = lottie.loadAnimation({
  container: document.getElementById("page-load-animation"),
  renderer: "svg",
  loop: true,
  autoplay: false,
  path: "animation/loading.json",
});
pageLoadingAnimation.play();
document.querySelector("#page-load-animation").classList.add("opacity-up-1");

setTimeout(function () {
  document.querySelector("#page-load-animation").classList.remove("opacity-up-1");
  setTimeout(function () {
    document.querySelector(".page-loader").classList.add("opacity-down-2");
    setTimeout(function () {
      document.querySelector(".page-loader").style.display = "none";
      document.querySelector("#page-load-animation").style.display = "none";
    }, 500);
  }, 50);
}, 1100);
