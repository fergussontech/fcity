const input = document.getElementById("password");
let attempts = 0;
input.addEventListener("keydown", e => {
  if (e.keyCode == 13) {
    checkpassword();
  }
});

const checkpassword = () => {
  if (input.value != ENTER_CODE) {
    attempts += 1;
    gsap.to(".secret", {
      keyframes: [
        { x: 20, duration: 0.15 },
        { x: -20, duration: 0.15 },
        { x: 12, duration: 0.1 },
        { x: -8, duration: 0.05 },
        { x: 0, duration: 0.05 }
      ],
      ease: "power.inOut"
    });
    if (attempts == 1) {
      createChatElement({ message: "That's not it..." }, true);
    }
    if (attempts == 2) {
      createChatElement({ message: "Nope!! :P" }, true);
    }
    if (attempts == 3) {
      createChatElement({ message: "Need a hint?" }, true);
    }
    if (attempts == 4) {
      createChatElement(
        {
          message:
            "Try to work on you drumming skills.. maybe something will pop up"
        },
        true
      );
    }
    if (attempts == 5) {
      createChatElement(
        { message: "Okay that's all the hints you're getting" },
        true
      );
    }
    if (attempts > 5) {
      createChatElement({ message: "Nope, wrong password." }, true);
    }
  } else {
    gsap.to([".secret"], {
      duration: 0.5,
      opacity: 0
    });

    gsap.to([".one", ".three", ".fade", ".video-container"], {
      duration: 2,
      opacity: 0,
      delay: 0.5,
      stagger: 0.1
    });

    gsap.to([".logo"], {
      delay: 2,
      duration: 1,
      opacity: 0,
      onComplete: function() {
        window.location.href = "/" + ENTER_CODE;
      }
    });
  }
};
