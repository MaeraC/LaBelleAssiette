window.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.querySelector(".open-burger");
    const menu = document.querySelector(".nav")
    const menuList = document.querySelector(".nav ul")
    const burgerBtns = document.querySelector(".burger-btns")
    let isMenuOpen = false

    menuBtn.style.display = "none"

    function OpenMenuBurger() {

        const menuBurger = document.createElement("ul")
        const burgerItem1 = document.createElement("li")
        const burgerItem2 = document.createElement("li")
        const burgerItem3 = document.createElement("li")
        const burgerItem4 = document.createElement("li")
        const burgerItem5 = document.createElement("li")
        const burgerItem6 = document.createElement("li")
        const closeBtn = document.createElement("i")

        burgerItem1.innerHTML = "<a href='https://labelleassiette.netlify.app/index.html'>Accueil</a>"
        burgerItem2.innerHTML = "<a href='https://labelleassiette.netlify.app/pages/boutique'>Boutique</a>"
        burgerItem3.innerHTML = "<a href='https://labelleassiette.netlify.app/pages/menu.html'>Menu</a>"
        burgerItem4.innerHTML = "Panier"
        burgerItem5.innerHTML = "<a href='https://labelleassiette.netlify.app/pages/contact.html'>Contact</a>"
        burgerItem6.innerHTML = "<button class='button res-btn'>Réservation</button>"

        menuBurger.classList.add("menu2")
        closeBtn.classList.add("fa-regular", "fa-circle-xmark", "close-menu")
        burgerItem1.classList.add("link")
        burgerItem2.classList.add("link")
        burgerItem3.classList.add("link")
        burgerItem4.classList.add("link", "cart")
        burgerItem5.classList.add("link")
        burgerItem6.classList.add("link")

        closeBtn.addEventListener("click", () => {
            menuBurger.style.display = "none"
        })

        menu.appendChild(menuBurger)
        menuBurger.appendChild(burgerItem1)
        menuBurger.appendChild(burgerItem2)
        menuBurger.appendChild(burgerItem3)
        menuBurger.appendChild(burgerItem4)
        menuBurger.appendChild(burgerItem5)
        menuBurger.appendChild(burgerItem6)
        menuBurger.appendChild(closeBtn)

        isMenuOpen = true

        burgerItem4.addEventListener("click", () => {
            const cart = document.querySelector(".panier") // modale panier 
            const closeCart = document.querySelector(".fa-circle-xmark") // bouton pour fermer le panier

            cart.style.display = "block"

            closeCart.addEventListener("click", () => {
                cart.style.display = "none"
            })

        })

        burgerItem6.addEventListener("click", () => {
            const reservation = document.querySelector(".reservation")
            const closeReservation = reservation.querySelector(".fa-circle-xmark") // bouton pour fermer le panier

            reservation.style.display = "block"

            closeReservation.addEventListener("click", () => {
                reservation.style.display = "none"
            })
        })
    }

    function closeMenuBurger() {
        if (isMenuOpen) {
            const menuBurger = menu.querySelector(".menu2")
            if (menuBurger) {
                menuBurger.remove()
            }
            isMenuOpen = false
        }
    }

    function checkWindowSize() {
        if (window.innerWidth <= 840) {
            menuList.style.display = "none"
            menuBtn.style.display = "flex"
            burgerBtns.style.display = "flex"
        } else {
            closeMenuBurger();
            menuBtn.style.display = "none"
            menuList.style.display = "flex"
            burgerBtns.style.display = "none"
        }
    }

    checkWindowSize();

    window.addEventListener("resize", () => {
        checkWindowSize();
    });

    menuBtn.addEventListener("click", () => {
        if (isMenuOpen) {
            closeMenuBurger();
        } else {
            OpenMenuBurger();
        }
    });
});