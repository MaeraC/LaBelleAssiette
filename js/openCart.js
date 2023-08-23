const cart = document.querySelector(".panier") // modale panier 
const btnCart = document.querySelector(".cart") // bouton pour ouvrir le panier 
const closeCart = document.querySelector(".fa-circle-xmark") // bouton pour fermer le panier

console.log(btnCart)

btnCart.addEventListener("click", () => {
    cart.style.display = "block"
})

closeCart.addEventListener("click", () => {
    cart.style.display = "none"
})




