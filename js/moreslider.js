var windowValue;
var contentValue;
var moveValue;

function checkSize() {
  windowValue = window.innerWidth;
  contentValue = document.querySelector(".more-wrapper ").offsetWidth;
  moveValue = contentValue - windowValue + 300;
}
//not working:
// window.addEventListener("resize", checkSize);
checkSize();
const morepath = {
  curviness: 0,
  values: [{ x: -moveValue, y: 0 }],
};

const tween = new TimelineLite();
tween.add(
  TweenLite.to(".more-wrapper", 1, {
    bezier: morepath,
    ease: Power1.easeInOut,
  })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: "#more",
  duration: 3000,
  triggerHook: 0,
})
  .setTween(tween)
  //   .addIndicators()
  .setPin("#more")
  .addTo(controller);

const satPath = {
  curviness: 1.5,
  autoRotate: true,
  values: [
    { x: 100, y: 0 },
    { x: -390, y: 400 },
    { x: -500, y: 700 },
    { x: -400, y: 1050 },
    { x: -200, y: 1200 },
  ],
};

const tweenSat = new TimelineLite();

tweenSat.add(
  TweenLite.to("#sattellite", 1, {
    bezier: satPath,
    ease: Power1.easeInOut,
  })
);

const controllerSat = new ScrollMagic.Controller();
const sceneSat = new ScrollMagic.Scene({
  triggerElement: ".g-absolute",
  duration: 1000,
  triggerHook: 0.8,
})
  .setTween(tweenSat)

  // .addIndicators()
  .addTo(controllerSat);
