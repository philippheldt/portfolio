const desktopHeader = document.querySelector(".navigation");

inView("#bm")
  .on("enter", (el) => desktopHeader.classList.remove("visible"))
  .on("exit", (el) => {
    // nav einblenden
    desktopHeader.classList.add("visible");

    // Animation starten
    lottie.destroy();
    lottie.loadAnimation({
      container: document.getElementById("bm-2"),
      renderer: "svg",
      loop: false,
      autoplay: true,
      path: "animation/data1_black.json",
    });

    // i-Loop tauschen
    setTimeout(() => {
      lottie.destroy();
      lottie.loadAnimation({
        container: document.getElementById("bm-2"),
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "animation/data2_black.json",
      });
    }, 1000);
  });
