var formpopup = document.querySelector(".form-search");
var link = document.querySelector(".hotel-search-btn");
var formjs = document.querySelector(".form-onjs");
var chekin = formpopup.querySelector("[name=check-in]");

formpopup.classList.add("form-onjs");
link.addEventListener("click", function(evt) {
  formpopup.classList.toggle("form-onjs");
  evt.preventDefault();
  chekin.focus();
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (formpopup.classList.contains("form-search")) {
      formpopup.classList.add("form-onjs");
    }
  }
})
