// lottie.destroy();
lottie.loadAnimation({
  container: document.getElementById("bm"),
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "animation/data1.json",
});

lottie.loadAnimation({
  container: document.getElementById("bm-2"),
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "animation/data1_black.json",
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
  lottie.loadAnimation({
    container: document.getElementById("bm-2"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "animation/data2_black.json",
  });
}, 1000);

// setTimeout(() => {
//   //hier könnte man die Animation wieder rückwärts spielen lassen, wenn man runter scrollt mit inview
//   lottie.destroy();
//   lottie.loadAnimation({
//     container: document.getElementById("bm"),
//     renderer: "svg",
//     loop: false,
//     autoplay: true,
//     path: "animation/data3.json",
//   });
// }, 10000);
