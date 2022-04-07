window.addEventListener("load", function () {
  var animationBlack = lottie.loadAnimation({
    container: document.getElementById("bm-2"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "animation/logo_black.json",
  });

  animationBlack.playSegments([0, 23], true);
});
