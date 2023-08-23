const reservation = document.querySelector(".reservation")
const btnReservation = document.querySelector(".res-btn")
const closeReservation = reservation.querySelector(".fa-circle-xmark")

btnReservation.addEventListener("click", () => {
    reservation.style.display = "block"
})

closeReservation.addEventListener("click", () => {
    reservation.style.display = "none"
})
