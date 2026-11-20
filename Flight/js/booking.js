let pay = document.querySelectorAll(".pay");

pay[0].classList.add("active");

pay.forEach((radio) => {
    radio.addEventListener("change", () => {

        pay.forEach((opt) => opt.classList.remove("active"));

        radio.classList.add("active");
    });
});