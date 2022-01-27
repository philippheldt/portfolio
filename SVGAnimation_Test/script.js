lottie.loadAnimation({
  container: document.getElementById("bm"),
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "animation/data1.json",
});

setTimeout(() => {
  lottie.destroy();
  lottie.loadAnimation({
    container: document.getElementById("bm"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "animation/data2.json",
  });
}, 1000);

setTimeout(() => {
  //hier könnte man die Animation wieder rückwärts spielen lassen, wenn man runter scrollt mit inview
  lottie.destroy();
  lottie.loadAnimation({
    container: document.getElementById("bm"),
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "animation/data1.json",
  });
}, 5000);
