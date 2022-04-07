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

  var pageLoadingAnimation = lottie.loadAnimation({
    container: document.getElementById("page-load-animation"),
    renderer: "svg",
    loop: true,
    autoplay: false,
    path: "animation/loading.json",
  });
  pageLoadingAnimation.play();
  document.querySelector("#page-load-animation").classList.add("opacity-up-1");

  setTimeout(function () {
    document.querySelector("#page-load-animation").classList.remove("opacity-up-1");
    setTimeout(function () {
      document.querySelector(".page-loader").classList.add("opacity-down-2");

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
      setTimeout(function () {
        document.querySelector(".page-loader").style.display = "none";
        document.querySelector("#page-load-animation").style.display = "none";
      }, 500);
    }, 50);
  }, 1100);
});

function animateYellow(url) {
  // document.querySelector(".page-loader").style.display = "block";
  // document.querySelector(".page-loader").classList.add("opacity-down-2");
  // setTimeout(function () {
  window.location.href = url;
  // }, 500);
}
