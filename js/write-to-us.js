var writeToUsLink = document.querySelector(".write-to-us-link");
var feedbackPopup = document.querySelector(".feedback");
var feedbackClose = feedbackPopup.querySelector(".modal-close");
var feedbackForm = feedbackPopup.querySelector(".feedback-form");
var nameInput = feedbackPopup.querySelector(".name-input");
var inputEmail = document.querySelector(".email-input ");

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

writeToUsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("feedback-show");
  nameInput.focus();
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("feedback-show");
  inputEmail.classList.remove("feedback-input-error");
});

feedbackForm.addEventListener("click", function (evt) {
  console.log("test");
  if ( !validateEmail(inputEmail.value)) {
    evt.preventDefault();
    inputEmail.classList.add("feedback-input-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("feedback-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("feedback-show");
      inputEmail.classList.remove("feedback-input-error");
    }
  }
});
