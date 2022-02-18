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
