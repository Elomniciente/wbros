const container = document.querySelector(".container");
const coffees = [
  {
    name: "bunkervzla2",
    image: "images/coffee21.webp",
	ir: "../bunkervzla2/inicio.html"
  },
  {
    name: "bunkervzla3",
    image: "images/coffee22.webp",
	ir: "../bunkervzla3/inicio.html"
  },
  {
    name: "bunkervzla4",
    image: "images/coffee23.webp",
	ir: "../bunkervzla4/inicio.html"
  },
  {
    name: "bunkervzla5",
    image: "images/coffee24.webp",
	ir: "../bunkervzla5/inicio.html"
  },
  {
    name: "CaracasDesing1",
    image: "images/coffee25.webp",
	ir: "../ccswd1/inicio.html"
  },
  {
    name: "CaracasDesing2",
    image: "images/coffee26.webp",
	ir: "../ccswd2/inicio.html"
  },
  {
    name: "CaracasDesing3",
    image: "images/coffee27.webp",
	ir: "../ccswd3/inicio.html"
  },
  {
    name: "CaracasDesing4",
    image: "images/coffee28.webp",
	ir: "../ccswd4/inicio.html"
  },
  {
    name: "dolcenza1",
    image: "images/coffee29.webp",
	ir: "../bunkervzla1/inicio.html"
  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image, ir  }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href=${ir}>Vista</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
