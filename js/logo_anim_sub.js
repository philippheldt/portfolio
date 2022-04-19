window.addEventListener("load", function () {
  var animationBlack = lottie.loadAnimation({
    container: document.getElementById("bm-2"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "animation/logo_black.json",
  });

  const desktopHeader = document.querySelector(".navigation");

  inView.threshold(1);
  inView.offset(0);

  inView("#start")
    .on("enter", () => {
      animationBlack.playSegments([147, 159], true);
      desktopHeader.classList.remove("visible");
    })
    .on("exit", () => {
      desktopHeader.classList.add("visible");
      animationBlack.playSegments([0, 23], true);
    });

  inView("#start-imp")
    .on("enter", () => {
      desktopHeader.classList.add("visible");
      animationBlack.playSegments([22, 23], true);
    })
});
