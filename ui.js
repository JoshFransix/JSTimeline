function showTime(e) {
  e.setAttribute("done", "true");
  e.querySelector(".timeline-point").style.background = "blue";
  e.querySelector(".date").style.opacity = "100%";
  e.querySelector("p").style.opacity = "100%";
}
