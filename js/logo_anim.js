window.addEventListener("load", function () {
  var animation1 = lottie.loadAnimation({
    container: document.getElementById("bm"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "animation/logo_white.json",
  });

  var animation2 = lottie.loadAnimation({
    container: document.getElementById("bm-2"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "animation/logo_black.json",
  });

  function loopMiddleWhite() {
    animation1.playSegments([23, 139], false);
  }
  var loopWhite;
  const desktopHeader = document.querySelector(".navigation");

  inView.threshold(1);
  inView.offset(0);

  inView("#bm")
    .on("enter", () => {
      animation2.playSegments([147, 159], true);
      animation1.playSegments([0, 23], true);
      loopWhite = setInterval(loopMiddleWhite, 3000);
      desktopHeader.classList.remove("visible");
    })
    .on("exit", () => {
      clearInterval(loopWhite);
      animation1.playSegments([147, 159], true);
      desktopHeader.classList.add("visible");
      animation2.playSegments([0, 23], true);
    });
});
