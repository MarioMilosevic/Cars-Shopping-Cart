"use strict";

export const cars = [
  {
    id: 1,
    name: "Toyota Corolla",
    brand: "Toyota",
    manufacturedYear: 2019,
    doors: 4,
    price: 22000,
    available: "true",
    
  },
  {
    id: 2,
    name: "Honda Civic",
    brand: "Honda",
    manufacturedYear: 2020,
    doors: 4,
    price: 25000,
    available: "true",
  },
  {
    id: 3,
    name: "Ford Mustang",
    brand: "Ford",
    manufacturedYear: 2018,
    doors: 2,
    price: 35000,
    available: "false",
  },
  {
    id: 4,
    name: "BMW 3 Series",
    brand: "BMW",
    manufacturedYear: 2021,
    doors: 4,
    price: 45000,
    available: "true",
  },
  {
    id: 5,
    name: "Chevrolet Camaro",
    brand: "Chevrolet",
    manufacturedYear: 2017,
    doors: 2,
    price: 32000,
    available: "false",
  },
  {
    id: 6,
    name: "Audi A4",
    brand: "Audi",
    manufacturedYear: 2022,
    doors: 4,
    price: 42000,
    available: "true",
  },
  {
    id: 7,
    name: "Mercedes-Benz E-Class",
    brand: "Mercedes-Benz",
    manufacturedYear: 2020,
    doors: 4,
    price: 50000,
    available: "true",
  },
  {
    id: 8,
    name: "Lexus IS",
    brand: "Lexus",
    manufacturedYear: 2019,
    doors: 4,
    price: 38000,
    available: "false",
  },
  {
    id: 9,
    name: "Volkswagen Golf",
    brand: "Volkswagen",
    manufacturedYear: 2021,
    doors: 4,
    price: 28000,
    available: "true",
  },
  {
    id: 10,
    name: "Subaru Outback",
    brand: "Subaru",
    manufacturedYear: 2022,
    doors: 4,
    price: 32000,
    available: "true",
  },
];

export function data() {
  const app = document.querySelector("#app");
  const carDivs = document.querySelector('.carDivs')
  const clearBtn = document.querySelector("#clearBtn");
  const filterBtn = document.querySelector("#filterBtn");
  const sortBtn = document.querySelector("#sortBtn");
  const filterOptions = document.querySelector(".filterOptions");
  const sortOptions = document.querySelector(".sortOptions");
  const available = document.querySelector(".available");
  const unavailable = document.querySelector(".unavailable");
  const ascending = document.querySelector(".ascending");
  const decending = document.querySelector(".decending");
  const carBtn = document.querySelector(".carBtn");
  const optionsArray = [filterOptions, available, unavailable, sortOptions, ascending, decending]

  return {
    app,
    clearBtn,
    filterBtn,
    sortBtn,
    filterOptions,
    sortOptions,
    unavailable,
    available,
    ascending,
    decending,
    optionsArray,
    carBtn,carDivs
  };
}
