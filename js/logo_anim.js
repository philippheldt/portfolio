inView("#bm").on("enter", () => {
  //hier könnte man die Animation wieder rückwärts spielen lassen, wenn man runter scrollt mit inview
  lottie.destroy();
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

  lottie.loadAnimation({
    container: document.getElementById("bm-2"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "animation/data2_black.json",
  });
});

inView("#profile").on("enter", () => {
  //hier könnte man die Animation wieder rückwärts spielen lassen, wenn man runter scrollt mit inview
  lottie.destroy();
  lottie.loadAnimation({
    container: document.getElementById("bm"),
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "animation/data3.json",
  });
  lottie.loadAnimation({
    container: document.getElementById("bm-2"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "animation/data2_black.json",
  });
});
