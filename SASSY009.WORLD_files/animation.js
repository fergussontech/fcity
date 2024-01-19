let animFinished = false;

window.addEventListener("load", function() {
  document.body.classList.remove("invisible");

  barba.init({
    transitions: [
      {
        name: "default-transition",
        once(data) {
          gsap.from("#logo", {
            duration: 1,
            opacity: 0,
            scale: 1.1,
            onComplete: function() {
              const video = document.getElementById("video-input");
              video.play();
            }
          });

          gsap.from([".one", ".three", ".fade"], {
            duration: 2,
            opacity: 0,
            delay: 0.5,
            stagger: 0.1
          });

          gsap.from(".video-container", {
            duration: 1,
            opacity: 0,
            delay: 1,
            onComplete: function() {
              animFinished = true;
              initialChat();
              sendRandomMessages();
            }
          });
        }
      }
    ]
  });
});
