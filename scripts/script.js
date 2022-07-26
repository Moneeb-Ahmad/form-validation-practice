const form = document.getElementsByTagName("form")[0];

const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");
const country = document.getElementById("country");
const countryError = document.querySelector("#country + span.error");
const zip = document.getElementById("zip");
const zipError = document.querySelector("#zip + span.error");
const pass = document.getElementById("pass");
const passError = document.querySelector("#pass + span.error");
const passConf = document.getElementById("pass-conf");
const passConfError = document.querySelector("#pass-conf + span.error");

email.addEventListener("input", function (event) {
  if (email.validity.valid) {
    emailError.innerHTML = "";
    emailError.className = "error";
  } else {
    showError(1);
  }
});

country.addEventListener("input", function (event) {
  if (country.validity.valid) {
    countryError.innerHTML = "";
    countryError.className = "error";
  } else {
    showError(2);
  }
});

zip.addEventListener("input", function (event) {
  if (zip.validity.valid) {
    zipError.innerHTML = "";
    zipError.className = "error";
  } else {
    showError(3);
  }
});

pass.addEventListener("input", function (event) {
  if (pass.validity.valid && pass.value === passConf.value) {
    passError.innerHTML = "";
    passError.className = "error";
  } else {
    showError(4);
  }
});

passConf.addEventListener("input", function (event) {
  if (passConf.validity.valid || pass.value === passConf.value) {
    passConfError.innerHTML = "";
    passConfError.className = "error";
  } else {
    showError(5);
  }
});

form.addEventListener("submit", function (event) {
  if (!email.validity.valid) {
    showError(1);
    event.preventDefault();
  }
  if (!country.validity.valid) {
    showError(2);
    event.preventDefault();
  }
  if (!zip.validity.valid) {
    showError(3);
    event.preventDefault();
  }
  if (!pass.validity.valid || passConf.value !== pass.value) {
    showError(4);
    event.preventDefault();
  }
  if (!passConf.validity.valid || passConf.value !== pass.value) {
    showError(5);
    event.preventDefault();
  }
});

function showError(num) {
  switch (num) {
    case 1:
      if (email.validity.valueMissing) {
        emailError.textContent = "You need to enter an e-mail address.";
      } else if (email.validity.typeMismatch) {
        emailError.textContent = "Entered value needs to be an e-mail address.";
      } else if (email.validity.tooShort) {
        emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
      }
      emailError.className = "error active";
      break;
    case 2:
      if (country.validity.valueMissing) {
        countryError.textContent = "You need to enter a country.";
      } else if (country.validity.typeMismatch) {
        countryError.textContent = "Entered value needs to be text.";
      }
      countryError.className = "error active";
      break;
    case 3:
      if (zip.validity.valueMissing) {
        zipError.textContent = "You need to enter a zip code.";
      } else if (zip.validity.typeMismatch) {
        zipError.textContent = "Entered value needs to be a 5 digit number.";
      } else if (zip.validity.tooShort) {
        zipError.textContent = `Zip should be ${zip.minLength} digits; you entered ${zip.value.length}.`;
      }
      zipError.className = "error active";
      break;
    case 4:
      if (pass.validity.valueMissing) {
        passError.textContent = "You need to enter a password.";
      } else if (pass.value !== passConf.value) {
        passError.textContent = "Passwords need to match.";
      }
      passError.className = "error active";
      break;
    case 5:
      if (passConf.validity.valueMissing) {
        passConfError.textContent = "You need to enter a matching password.";
      } else if (pass.value !== passConf.value) {
        passConfError.textContent = "Passwords need to match.";
      }
      passConfError.className = "error active";
      break;
    default:
      break;
  }
}
