const line = document.querySelector(".timeline-innerline");
const timeline_events = document.querySelectorAll("ul li");

let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // show timeline event
      timeline_events.forEach((e) => {
        showTime(e);
      });
      line.style.width = "100%";
    }
  });
});

let target = document.querySelector(".timeline ul");
observer.observe(target);
