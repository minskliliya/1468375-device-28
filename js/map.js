var mapLink = document.querySelector(".contact-map");
var mapPopup = document.querySelector(".map");
var mapClose = mapPopup.querySelector(".modal-close");
  
mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("map-show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("map-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("map-show")) {
      mapPopup.classList.remove("map-show");
    }
  }
});
