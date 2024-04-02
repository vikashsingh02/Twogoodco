console.log("hello");

var videocon = document.querySelector("#video-container");
var cursor = document.querySelector(".cursor");
var playbtn = document.querySelector("#play");


document.addEventListener("mousemove",function(dets){
  gsap.to(cursor, {
       left:dets.x,
       top:dets.y
     });
 })
videocon.addEventListener("mouseenter", function () {
  gsap.to(playbtn, {
    scale: 1,
    opacity: 0.8,
  });

});
videocon.addEventListener("mouseleave", function () {
  gsap.to(playbtn, {
    scale: 0,
    opacity: 0,
  });
});
videocon.addEventListener("mousemove", function(dets) {
    gsap.to(playbtn, {
      left:dets.x,
      top:dets.y
    });
  });

document.addEventListener("mousemove",function(dets){
 gsap.to(cursor, {
      left:dets.x,
      top:dets.y
    });
})


