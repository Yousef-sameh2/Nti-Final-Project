const rangeInput = document.querySelector("#range4");
const rangeOutput = document.querySelector("#rangeValue");

const FindStays = document.querySelector("#FindStays");
const FlightTitle = document.querySelector("#FlightTitle");

const Prompobtn = document.querySelector("#Prompobtn");
const promoMsg = document.querySelector("#promoMsg");

const rate = document.querySelectorAll(".rate");

const FavoritePlace = document.querySelectorAll(".FavoritePlace");




if (rangeInput && rangeOutput) {
    rangeOutput.textContent = rangeInput.value;

    rangeInput.addEventListener("input", function () {
        rangeOutput.textContent = this.value + "$";
    });
}


if (FindStays && FlightTitle) {
    FindStays.addEventListener("click", function (e) {
        e.preventDefault();
        FindStays.classList.add("oil-green");
        FlightTitle.classList.remove("oil-green");
    });

    FlightTitle.addEventListener("click", function (e) {
        e.preventDefault();
        FlightTitle.classList.add("oil-green");
        FindStays.classList.remove("oil-green");
    });
}


if (Prompobtn && promoMsg) {
    Prompobtn.addEventListener("click", function () {
        const code = prompt("Enter Prompo Code")
        if (code && code.trim() != "") {
            promoMsg.classList.remove("d-none")
            promoMsg.textContent = `Promo code "${code.trim()}" applied successfully.`;

            setTimeout(() => {
                promoMsg.classList.add("d-none");
            }, 3000);

        }
        else {
            alert("this code not ivalid please try again")
        }

    })

}

if (rate) {
    rate.forEach(function (e) {
        e.addEventListener("click", function () {
            e.classList.add("mint-green")
        })
    }
    );
}

let x = 1;
if (FavoritePlace) {
    FavoritePlace.forEach(function (e) {
        e.addEventListener("click", function () {
            e.classList.toggle("fa-regular");
            e.classList.toggle("fa-solid");
            e.classList.toggle("text-dark");

            if (x) {
                alert("add Hotel to favourits")
                x = 0;
            }
            else {
                alert("remove Hotel from favourits")
                x = 1;
            }

        })
    })
}


