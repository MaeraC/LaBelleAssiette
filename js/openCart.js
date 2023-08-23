const cart = document.querySelector(".panier")
const btnCart = document.querySelector(".cart")
const closeCart = document.querySelector(".fa-circle-xmark")

btnCart.addEventListener("click", () => {
    cart.style.display = "block"
})

closeCart.addEventListener("click", () => {
    cart.style.display = "none"
})

