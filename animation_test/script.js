var animation1 = lottie.loadAnimation({
  container: document.getElementById("bm"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "../animation/logo_white.json",
});

window.addEventListener("load", function () {
  animation1.playSegments([0, 23], true);
  animation1.playSegments([23, 139], true);
  animation1.playSegments([139, 159], true);
});
