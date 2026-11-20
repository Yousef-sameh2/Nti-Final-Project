const pay = document.querySelectorAll(".pay");

pay[0].classList.add("active");

pay.forEach((radio) => {
  radio.addEventListener("change", () => {
    pay.forEach((opt) => opt.classList.remove("active"));

    radio.classList.add("active");
  });
});

const guest = document.getElementById("guest");
const loggedIn = document.getElementById("loggedIn");
const phoneInput = document.getElementById("phoneInput");
const continueBtn = document.getElementById("continueBtn");


continueBtn.addEventListener("click", function () {
  if (phoneInput.value.trim() === "") {
    phoneInput.focus();
    return;
  }

  guest.classList.add("d-none");
  loggedIn.classList.remove("d-none");
});
