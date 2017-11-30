var formpopup = document.querySelector(".form-search");
var link = document.querySelector(".hotel-search-btn");
var chekin = formpopup.querySelector("[name=check-in]");

link.addEventListener("click", function(event) {
    event.preventDefault();
    formpopup.classList.toggle("form-block");
    chekin.focus();
});