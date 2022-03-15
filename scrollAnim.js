const line = document.querySelector(".timeline-innerline");
const timeline_events = document.querySelectorAll("ul li");

let i = 0;

function slowLoop() {
  setTimeout(function () {
    showTime(timeline_events[i]);
    line.style.width = `${((i + 1) / timeline_events.length) * 100}%`;
    i++;

    if (i < timeline_events.length) {
      slowLoop();
    }
  }, 800);
}

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // show timeline event
      slowLoop();
    }
  });
});

let target = document.querySelector(".timeline ul");
observer.observe(target);
