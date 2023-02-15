window.addEventListener("load", function () {
  var animationBlack = lottie.loadAnimation({
    container: document.getElementById("bm-2"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: "animation/logo_black.json",
  });

  const desktopHeader = document.querySelector(".navigation");
  console.log(desktopHeader);

  inView.threshold(1);
  inView.offset(0);

  inView("#start")
    .on("enter", () => {
      animationBlack.playSegments([147, 159], true);
      desktopHeader.classList.remove("visible");
      console.log("enter1");
    })
    .on("exit", () => {
      desktopHeader.classList.add("visible");
      animationBlack.playSegments([0, 23], true);
      console.log("exit");
    });

  inView("#start-imp").on("enter", () => {
    desktopHeader.classList.add("visible");
    animationBlack.playSegments([22, 23], true);
    console.log("enter2");
  });
});
