"use strict";

export const displayCars = (root, arr) => {
  arr.forEach((el) => {
    const cars = document.createElement("div");
    cars.innerHTML = "";
    cars.innerHTML = `<div class="carDiv">
   <p class="carText">Name: ${el.name}, ${el.brand}, ${el.manufacturedYear}, ${
      el.doors
    }, price: ${el.price}$.</p> 
    <div class ="carAvailability">
    ${el.available === true ? "✅" : "❌"}
    </div>
   <button class="carBtn">X</button>
   </div>`;
    root.appendChild(cars);
  });
};

const getCurrentButtons = () => {
  // const currentButtons =
};

export const clearFilters = (root) => {
  // Uzimam trenutne divove
  const currentDivs = getCurrentDivsList(root);
  // Brisem ih
  removeDivs(currentDivs);
};

export const displayOptions = (el) => {
  // Razdvajam djecu iz elementa koji ce biti filterBTN(2 djece) i sortBtn(2 djece)
  const [child1, child2] = el.children;
  if (
    // Element i oba child elementa ako su visible
    el.style.visibility === "visible" &&
    child1.style.visibility === "visible" &&
    child2.style.visibility === "visible"
  ) {
    // Stavlam ih u sakrivene
    el.style.visibility = "hidden";
    child1.style.visibility = "hidden";
    child2.style.visibility = "hidden";
  } else {
    // Ako nisu stavljam ih u vidljive
    el.style.visibility = "visible";
    child1.style.visibility = "visible";
    child2.style.visibility = "visible";
  }
};
// Funkcija koja uzima array i brise svaki pojedinacni element
export const removeDivs = (arr) => {
  arr.forEach((el) => el.remove());
};

// Uzimam trenutne cadDivove jer se mjenjaju kako klikcem okolo
export const getCurrentDivsList = (root) => {
  // Node lista
  const currentDivsNodeList = root.querySelectorAll(".car");
  // Pravi array
  const currentDivs = [...currentDivsNodeList];
  return currentDivs;
};
//////////////////////////////////////////////////////////////////////////////////////
const getCurrentButtonsList = (root) => {
  const currentButtonsNodeList = root.querySelectorAll(".carBtn");
  const currentButtons = [...currentButtonsNodeList];
  return currentButtons;
};
// Uzima array uslov i glavni div
export const filter = (arr, condition, root) => {
  // Uzimam trenutne divove
  const currentDivs = getCurrentDivsList(root);
  const currentButtons = getCurrentButtons(root);
  // Brisem ih
  removeDivs(currentDivs, currentButtons);
  // Filterujem unijeti arr i vracam array sa objektima  koji se poklapaju sa uslovom
  const result = arr.filter((el) => el.available === condition);
  // result.forEach(car => )
  console.log(result);
  // Ubacujem u root filtrirani array umjesto pocetnog arraya sa objektima
  displayCars(root, result);
};

export const sort = (arr, condition, root) => {
  // Uzimam trenutne divove jer se promjene
  const currentDivs = getCurrentDivsList(root);
  const currentButtons = getCurrentButtons(root);
  // Brisem ih
  removeDivs(currentDivs, currentButtons);
  // Pravim array dje sortiram elemente u zavisnosti koji je uslov zadat
  const result = arr.toSorted((a, b) => {
    if (condition === "ascending") {
      return b.price - a.price;
    } else if (condition === "decending") {
      return a.price - b.price;
    }
  });
  // Napravljeni array ubacujem u pocetni div
  displayCars(root, result);
};
// Brisem parent div (napravljeno za carBtn button)
export const deleteDiv = (e) => {
  // Uzimam element koji je kliknut
  const target = e.target;
  // Selektujem parenta i brisem ga
  target.parentElement.remove();
};
// Funkcija koja sklanja fokus sa filter ili sort dugmeta kada kliknem van njih
// export const focusHandler = (event, a, b, arr) => {
//   if (event.target === a || event.target === b) {
//     return;
//   } else {
//     arr.forEach((element) => {
//       element.style.visibility = "hidden";
//     });
//   }
// };
