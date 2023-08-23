const shopSection = document.querySelector(".boutique")

fetch("../datas.json")
.then(res => res.json())
.then(data => {
    const products              = data

    products.forEach((product) => {
        const figure            = document.createElement("figure")
        const link              = document.createElement("a")
        const image             = document.createElement("img")
        const figcaption        = document.createElement("figcaption")
        const title             = document.createElement("h3")
        const price             = document.createElement("span")
        const button            = document.createElement("button")

        shopSection.appendChild(figure)
        figure.appendChild(link)
        link.appendChild(image)
        figure.appendChild(figcaption)
        figcaption.appendChild(title)
        figcaption.appendChild(price)
        figcaption.appendChild(button)

        image.setAttribute("src", product.url)
        image.setAttribute("alt", product.name)
        

        button.classList.add("button")
        figure.classList.add("appear")
        
        title.textContent       = product.name
        price.textContent       = product.price + ",00" + "€"
        button.textContent      = "Ajouter au panier"

        window.addEventListener("scroll", () => {
            const scrolledFromTop   = window.pageYOffset + window.innerHeight;
            const distanceFromTop   = figure.offsetTop;
    
            if (scrolledFromTop >= distanceFromTop + 50) {
                setTimeout(() => {
                    figure.style.opacity = "1"
                }, 100)
            }
        })
        
    })
    
})


