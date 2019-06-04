TweenMax.from(".logo", 1, {
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.to(".runner img", 1, {
  delay: .1,
  x: 35,
  opacity: 1,
  ease: Expo.easeInOut
});

TweenMax.to(".title-1", 1, {
  delay: .3,
  x: 30,
  opacity: 1,
  ease: Expo.easeInOut
});

TweenMax.to(".title-2", 1, {
  delay: .5,
  x: 30,
  opacity: 1,
  ease: Expo.easeInOut
});

TweenMax.to(".pattern", 1, {
  delay: .5,
  x: 30,
  opacity: .4,
  ease: Expo.easeInOut
});

TweenMax.from(".box-3", 2, {
  delay: .2,
  x: -180,
  rotation: 180,
  transformOrigin: "50% 50%",
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from(".box-1", 2, {
  delay: .3,
  x: -180,
  rotation: 200,
  transformOrigin: "50% 50%",
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from(".box-2", 2, {
  delay: .5,
  x: -180,
  rotation: 90,
  transformOrigin: "50% 50%",
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.staggerFrom(".menu ul li", 1, {
  delay: 1,
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut
}, .1);

TweenMax.from(".content p", 1, {
  delay: 1.5,
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.from(".call-to-action", 1, {
  delay: 1.75,
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut
});

TweenMax.staggerFrom(".media ul li", 1, {
  delay: 2,
  y: 20,
  opacity: 0,
  ease: Expo.easeInOut
}, .1);
