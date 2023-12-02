'use strict'

export const displayCars = (root, arr) => {
    arr.forEach(el => {
       const carDiv = document.createElement('div')
       carDiv.classList.add('car')
       carDiv.textContent = `${el.name}: ${el.brand}, ${el.manufacturedYear}, ${el.doors} doors, price:${el.price}$. Is available? ${el.available}`
       root.appendChild(carDiv)
    });
}