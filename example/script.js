const password = document.querySelector(".container-input-password");
const email = document.querySelector(".container-input-email");
const button = document.querySelector(".container-button button");

// Via this script you specify that the email must :
// - contain an asterisk and a dot
// - before the presence of the arobase we can find, any letters
// (in lower or upper case), any number, and the characters "-" or "_"
// - after the arobase, the verification remains the same but the presence of "_" is forbidden
// and it is imperative to have at least characters between the arobase and the point
// - after the dot, we need a succession of 2 or 3 characters must be
// present in order to validate the email address.

function validationEmail(email) {
  var check = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
  if (check.exec(email) == null) {
    return false;
  } else {
    return true;
  }
}

function validationPassword(password) {
  var check = /^[A-Za-z]\w{8,50}$/;
  if (check.exec(password) == null) {
    return false;
  } else {
    return true;
  }
}

let isValidateEmail;
let isValidatePassword;

email.addEventListener("input", (e) => {
  isValidateEmail = validationEmail(e.target.value);
  if (isValidateEmail == false) {
    e.target.classList.remove("done");
    e.target.classList.add("error");
  } else {
    e.target.classList.remove("error");
    e.target.classList.add("done");
  }
  checkIsButtonDone();
  if (e.target.value === "") {
    e.target.classList.remove("done");
    e.target.classList.remove("error");
  }
});

password.addEventListener("input", (e) => {
  isValidatePassword = validationPassword(e.target.value);
  if (isValidatePassword == false) {
    e.target.classList.remove("done");
    e.target.classList.add("error");
  } else {
    e.target.classList.remove("error");
    e.target.classList.add("done");
  }
  checkIsButtonDone();
  if (e.target.value === "") {
    e.target.classList.remove("done");
    e.target.classList.remove("error");
  }
});

function checkIsButtonDone() {
  if (isValidateEmail && isValidatePassword) {
    button.classList.add("correct");
  } else {
    button.classList.remove("correct");
  }
}

window.addEventListener("mousemove", (e) => {
  button.addEventListener("mouseenter", () => {
    if (!isValidateEmail || !isValidatePassword) {
      if (e.movementX > 0) {
        if (e.pageX < window.innerWidth / 2) {
          button.style.transform = `translateX(${e.pageX / 3}px)`;
          button.style.transform = `translateY(${e.pageY / 3}px)`;      // Y-axes
        } else {
          button.style.transform = `translateX(-${e.pageX / 3}px)`;
          button.style.transform = `translateY(-${e.pageY / 3}px)`;     // Y-axes
        }
      } else {
        if (e.pageX < window.innerWidth / 2) {
          button.style.transform = `translateX(${e.pageX / 3}px)`;
        } else {
          button.style.transform = `translateX(-${e.pageX / 3}px)`;
        }
      }
    }
  });
});