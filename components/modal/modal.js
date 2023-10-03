//Modal
var modals = [ 
    document.getElementById("video-1"),
    document.getElementById("video-2"), 
    document.getElementById("video-3")]
var buttons = [ 
    document.getElementById("video-btn-1"),
    document.getElementById("video-btn-2"),
    document.getElementById("video-btn-3")]
var closeBtn = document.getElementsByClassName("close");
var body = document.getElementById("body");

// Abrir modal
buttons[0].onclick = function () {
  modals[0].classList.add("visible");
  body.style.overflowY = "hidden";
};

buttons[1].onclick = function () {
  modals[1].classList.add("visible");
  body.style.overflowY = "hidden";
};

buttons[2].onclick = function () {
  modals[2].classList.add("visible");
  body.style.overflowY = "hidden";
};

// Cerrar modal
closeBtn[0].onclick = function () {
  modals[0].classList.remove("visible");
  body.style.overflowY = "scroll";
};
closeBtn[1].onclick = function () {
    modals[1].classList.remove("visible");
    body.style.overflowY = "scroll";
  };
closeBtn[2].onclick = function () {
    modals[2].classList.remove("visible");
    body.style.overflowY = "scroll";
  };
window.onclick = function (event) {
  if (event.target == modals[0] || event.target == modals[1] || event.target == modals[2] ) {
    modals[0].classList.remove("visible");
    modals[1].classList.remove("visible");
    modals[2].classList.remove("visible");
    body.style.overflowY = "scroll";
  }
};