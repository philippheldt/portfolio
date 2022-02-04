var animation1 = lottie.loadAnimation({
  container: document.getElementById("bm"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "../animation/data1_black.json",
});
animation1.play();
setTimeout
animation1.goToAndStop(100, false);
