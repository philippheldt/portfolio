window.addEventListener("load", function () {
  var animationWhite = lottie.loadAnimation({
    container: document.getElementById("bm"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "animation/logo_white.json",
  });

  var animationBlack = lottie.loadAnimation({
    container: document.getElementById("bm-2"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "animation/logo_black.json",
  });

  function loopMiddleWhite() {
    animationWhite.playSegments([23, 139], false);
  }
  var loopWhite;
  const desktopHeader = document.querySelector(".navigation");

  inView.threshold(1);
  inView.offset(0);

  inView("#bm")
    .on("enter", () => {
      animationBlack.playSegments([147, 159], true);
      animationWhite.playSegments([0, 23], true);
      loopWhite = setInterval(loopMiddleWhite, 3000);
      desktopHeader.classList.remove("visible");
      document.querySelector(".me").style.transform = "translateY(100px) rotate(10deg)";
    })
    .on("exit", () => {
      clearInterval(loopWhite);
      animationWhite.playSegments([147, 159], true);
      desktopHeader.classList.add("visible");
      animationBlack.playSegments([0, 23], true);
      document.querySelector(".me").style.transform = "translateY(0px)";
    });

  inView("#content")
    .on("enter", () => {})
    .on("exit", () => {});
});
