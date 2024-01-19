var chatWindow = document.getElementById("chatWindow");
var chatStatus = document.getElementById("chatStatus");
let counter = document.getElementById("counter");
let countNumber = 0;
var index = 0;
var audio = new Audio("../assets/c.mp3");
let welcome = false;
let mobileDevice = false;

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  mobileDevice = true;
}

var messages = [
  {
    message: "Heart Ego out now!!!✨💗",
    delay: 500
  },
  { message: "Go listen !!!🏎💨", delay: 800, finish: true }
  // { image: "/img/chat/IMG_4507.jpg", delay: 3000 }
];

var randomMessages = [
  {
    message: `Wanna go for a <a href="#" onclick='(function () {
      window.location.href = "/blueracecar";
    })();'>ride</a>??`
  },
  {
    message: `Why don't you try clicking this <a href="#" onclick='(function () {
      window.location.href = "/heartego";
    })();'>link</a>...`
  },
  {
    message: `Why don't you try clicking this <a href="#" onclick='(function () {
      window.location.href = "/heartego";
    })();'>link</a>...`
  },
  {
    message: "Did you hear?? My new mixtape is out now🤪"
  },
  {
    message: "♡⊙"
  },
  {
    message: "Ego, heart, ego<br/>E-ego, E-e-e-e"
  }
  // {
  //   message:
  //     "close your eyes and imagine two opposite things. when you are ready you can open your eyes and tell me what you envisioned. remember these two things as we move forward.😌",
  // },
  // {
  //   message: mobileDevice
  //     ? "above this you see something. it is a time estimator of when new things drop. what do you think it is? ;)"
  //     : "to the left you see a column. it is a time estimator of when new things drop. what do you think it is? ;)",
  // },
  // {
  //   message:
  //     "when i was little i probably had like 10 piczo pages. most were online stables and I had many members who had their very own digital horse through me. this is a bit of the same thing. I have a world that you can participate in. A world must interact to be a true world. so your role in SASSY WORLD is actually incredibly important. here we will interact and create a world together. <3",
  // },
  // {
  //   message:
  //     "i am a detail person. i am also a riddle person. so ...... i've hidden some treasures in here.🧐 i'll reveal some hints here and there on my platforms, so make sure to follow me on my social media accounts to get the full experience.",
  // },
  // { image: "/img/chat/IMG_1944.jpg", message: "check the whip!!" },
  // { image: "/img/chat/IMG_2078.jpg", message: "in the stuuu🔥🔥" },
];

shuffle(randomMessages);

function initialChat() {
  messages.forEach((element, i) => {
    setTimeout(function() {
      createChatElement(element);
    }, element.delay);
  });
}

function sendRandomMessages() {
  randomMessages.forEach((element, i) => {
    setTimeout(function() {
      createChatElement(element);
    }, 16000 * (i + 1) + Math.random() * 17000);
  });
}

function createChatElement(message, instant) {
  instant ? null : (chatStatus.textContent = "Sunniva is typing something...");

  setTimeout(
    function() {
      var container = document.createElement("div");
      container.classList.add("chat");

      var timestamp = document.createElement("h3");
      timestamp.classList.add("timestamp");

      var current = new Date();
      timestamp.innerHTML =
        current.getHours() +
        ":" +
        (current.getMinutes() < 10 ? "0" : "") +
        current.getMinutes();
      container.appendChild(timestamp);

      if (message.message) {
        var chatMessage = document.createElement("h2");
        chatMessage.classList.add("message");
        chatMessage.innerHTML = message.message;
        container.appendChild(chatMessage);
      }

      if (message.image) {
        var chatImage = document.createElement("img");
        chatImage.classList.add("chat-image");
        chatImage.src = message.image;
        container.appendChild(chatImage);
      }

      if (message.finish) {
        welcome = true;
      }

      chatWindow.appendChild(container);
      audio.play();
      chatStatus.textContent = "";
      chatWindow.scrollTop = chatWindow.scrollHeight;

      if (!elementInViewport(container)) {
        countNumber += 1;
        counter.innerHTML = countNumber;
        counter.style.display = "inline-block";
      }
    },
    instant
      ? 0
      : message.delay
      ? message.delay - 100
      : 1000 * (Math.random() + 1) * 4
  );
}

const notOpenMessages = [
  {
    message:
      "come back a little later... or sign up for updates, and you'll know when it opens!"
  },
  { message: "it's not open right now!" },
  { message: "Try again later!" },
  {
    message:
      "Sign up for my newsletter to get all *SASSY-related-content* directly to your inbox"
  }
];

let closeIndex = 0;

const openMessages = [
  { message: "Click it <3" },
  { message: "Go on, give it a try ;*" },
  { message: "That 3d spin effect thoughh 8)" },
  { message: "I'm flippin, i'm flippin...." }
];
let openIndex = 0;

const logoMessages = [
  { message: "Have u listened to the mixtape yet?" }
  // { message: "SASSY WORLD BABY xD" },
  // { message: "u spin my head right round, right rooouund ;P" },
  // { message: "I hope you like it here!" },
];
let logoIndex = 0;

function notOpen() {
  createChatElement(notOpenMessages[closeIndex % notOpenMessages.length], true);
  closeIndex += 1;
}

const blueracecar = document.getElementById("blueracecar");
const mainLogo = document.getElementById("logo");
let hovering = false;

let now = new Date();

blueracecar.addEventListener("mouseenter", e => {
  hovering = true;

  if (welcome && Math.floor(new Date() - now) > 1000) {
    createChatElement(openMessages[openIndex % openMessages.length], true);
    openIndex += 1;
    now = new Date();
  }
});

blueracecar.addEventListener("mouseleave", e => {
  hovering = false;
});

logo.addEventListener("mouseenter", e => {
  hovering = true;

  if (welcome && Math.random() > 0.6 && Math.floor(new Date() - now) > 1000) {
    createChatElement(logoMessages[logoIndex % logoMessages.length], true);
    logoIndex += 1;
    now = new Date();
  }

  // step()
});

logo.addEventListener("mouseleave", e => {
  hovering = false;
});

function step(timestamp) {
  if (Math.floor(new Date() - now) > 4000) {
    createChatElement(
      logoMessages[Math.floor(Math.random() * logoMessages.length)]
    );
    now = new Date();
  }

  if (hovering) {
    window.requestAnimationFrame(step);
  }
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < window.pageYOffset + window.innerHeight &&
    left < window.pageXOffset + window.innerWidth &&
    top + height > window.pageYOffset &&
    left + width > window.pageXOffset
  );
}

document.addEventListener("scroll", function(e) {
  if (elementInViewport(chatWindow)) {
    countNumber = 0;
    counter.style.display = "none";
  }
});
